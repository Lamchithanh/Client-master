import { FIND_CART_ITEMS_REQUEST, FIND_CART_ITEMS_SUCCESS, FIND_CART_ITEMS_FAILURE } from './ActionType';
const initialState = {
    loading: false,
    cartItems: [],
    error: null,
  };
export const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_CART_ITEMS_REQUEST:
        return { ...state, loading: true };
      case FIND_CART_ITEMS_SUCCESS:
        return { ...state, loading: false, cartItems: action.payload };
      case FIND_CART_ITEMS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };