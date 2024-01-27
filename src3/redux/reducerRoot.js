import cartReducer from "./cart/reducerCart";
import whishListReducer from "./whishlist/reducerWhishlist";
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    cart: cartReducer,
    whishList: whishListReducer
})

export default RootReducer;
