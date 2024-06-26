import { legacy_createStore  ,applyMiddleware , combineReducers} from "redux";
import { thunk } from 'redux-thunk';
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { cartItemsReducer } from "./CartItem/Reducer";
import { adminReducer } from "./Admin/Reducer";




const rootReducers = combineReducers({
    auth: authReducer, 
    products: customerProductReducer,
    cart: cartReducer, 
    order: orderReducer ,
    cartItems: cartItemsReducer,
    admin :adminReducer
    
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk ))