import axios from 'axios';

export const FETCH_HOUSES_START = "FETCH_HOUSES_START";
export const FETCH_HOUSES_SUCCESS = "FETCH_HOUSES_SUCCESS";
export const FETCH_HOUSES_FAILURE = "FETCH_HOUSES_FAILURE";

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

