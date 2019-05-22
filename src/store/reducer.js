import * as actionTypes from './action';

const initialState = {
    productInfo: false,
    isLoggedIn: false,
    userId: false,
    userInfo: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_PRODUCT_INFO:
        return {
            ...state,
            productInfo: action.productInfo
        };
        case actionTypes.IS_LOGGED_IN:
        return {
            ...state,
            isLoggedIn: action.isLoggedIn
        }
        case actionTypes.ADD_USER_ID:
        return{
            ...state,
            userId: action.userId
        }
        case actionTypes.IS_LOGGED_OUT:
        return{
            ...state,
            isLoggedIn: action.isLoggedOut,
            userId: false
        }
        case actionTypes.ADD_USER_INFO:
        return{
            ...state,
            userInfo: action.userInfo
        }
        default:
        return state;
    }
} ;


export default reducer;