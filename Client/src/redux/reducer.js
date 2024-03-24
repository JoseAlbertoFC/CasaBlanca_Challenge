const ACTION_TYPES = {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION'
};

const initialState = {
    data: null,
    isLoading: false,
    error: null
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.EXAMPLE_ACTION:
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
};

export default myReducer;
