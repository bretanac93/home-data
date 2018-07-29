import {
    FETCH_HOUSES_START,
    FETCH_HOUSES_SUCCESS,
    FETCH_HOUSES_FAILURE,
    ORDER_SPECIFIC,
    UPDATE_PRICE
} from '../actions/houses';

const initialState = {
    items: [],
    updated: [],
    loading: false,
    error: null,
    name: 'Cesar'
};

const houses = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOUSES_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_HOUSES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.houses
            };
        case FETCH_HOUSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        case ORDER_SPECIFIC:
            return {
                ...state,
                loading: false,
                items: action.payload.houses
            };
        case UPDATE_PRICE:
            return {
                ...state,
                updated: action.payload.updated,
                items: action.payload.houses
            };
        default:
            return state;
    }
};

export default houses;