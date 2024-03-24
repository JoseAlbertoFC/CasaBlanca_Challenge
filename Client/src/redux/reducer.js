import { ACTION_TYPES } from './actions';

const initialState = {
    users: [],
    isLoading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ACTION_TYPES.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case ACTION_TYPES.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case ACTION_TYPES.SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;

