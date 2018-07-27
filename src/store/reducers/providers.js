const providers = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_HOUSE':
            return [
                ...state,
                {
                    id: action.id,
                    price: action.price
                }
            ];
        default:
            return state;
    }
};

export default providers;