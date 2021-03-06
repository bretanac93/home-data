import axios from 'axios';
import _ from 'lodash';

export const FETCH_HOUSES_START = "FETCH_HOUSES_START";
export const FETCH_HOUSES_SUCCESS = "FETCH_HOUSES_SUCCESS";
export const FETCH_HOUSES_FAILURE = "FETCH_HOUSES_FAILURE";
export const ORDER_SPECIFIC = "ORDER_SPECIFIC";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const fetchHousesBegin = () => ({
    type: FETCH_HOUSES_START
});

export const fetchHousesSuccess = houses => ({
    type: FETCH_HOUSES_SUCCESS,
    payload: { houses }
});

export const fetchHousesFailure = error => ({
    type: FETCH_HOUSES_SUCCESS,
    payload: { error }
});

export const ordered = houses => ({
    type: ORDER_SPECIFIC,
    payload: { houses }
});

export const pushPriceUpdate = (updated, houses) => ({
    type: UPDATE_PRICE,
    payload: { updated, houses }
});

export function orderHousesCollection (prop, order, vendor_id = null) {
    return (dispatch, getState) => {
        let vendors = [...getState().houses.items];
        for (let item of vendors) {
            if (vendor_id) {
                if (item.id === vendor_id) {
                    item.houses = _.orderBy(item.houses, [prop], [order]);
                }
            } else {
                item.houses = _.orderBy(item.houses, [prop], [order]);
            }
        }
        dispatch(ordered(vendors));
    }
}

export function pushUpdatedPrice(id, price) {
    return (dispatch,  getState) => {
        let updated = [...getState().houses.updated];
        let vendors = [...getState().houses.items];
        let flag = false;

        for (let item of updated) {
            if (item.id === id) {
                item.price = price;
                flag = true;
            }
        }
        if (!flag) {
            updated.push({ id, price });
        }

        for (let vendor in vendors) {
            for (let house in vendor.houses) {
                if (house.internal_id === id) {
                    house.price = price;
                }
            }
        }

        dispatch(pushPriceUpdate(updated, vendors));
    }
}

function handleData(data) {
    let contained_vendors = [];
    let vendors = [];
    // Retrieve the vendors separated from the house collection
    data.filter(x => {
        if (!contained_vendors.includes(x.vendor_verbose.id)) {
            contained_vendors.push(x.vendor_verbose.id);
            vendors.push({
                ...x.vendor_verbose,
                houses: []
            });
        }
        return x;
    });

    for (let item of vendors) {
        data.filter(x => {
            if (x.vendor_verbose.id === item.id) {
                item.houses.push(x);
            }
            return x;
        })
    }

    return vendors;
}

export function fetchHouses() {
    return dispatch => {
        dispatch(fetchHousesBegin());
        return axios.get('/data.json')
            .then(res => {
                dispatch(fetchHousesSuccess(handleData(res.data.results)));
            })
            .catch(error => dispatch(fetchHousesFailure(error)));
    }
}