import {
  ADD_ITEMS_TO_CART_REQUEST,
  ADD_ITEMS_TO_CART_SUCCESS,
  ADD_ITEMS_TO_CART_FAILURE,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_TOTAL_PRICE_CART_REQUEST,
  UPDATE_TOTAL_PRICE_CART_SUCCESS,
  UPDATE_TOTAL_PRICE_CART_FAILURE,
  SENT_CART_ITEM_REQUEST,
  SENT_CART_ITEM_SUCCESS,
  SENT_CART_ITEM_FAILURE,
  GET_ALL_CHECKOUT_REQUEST,
  GET_ALL_CHECKOUT_SUCCESS,
  GET_ALL_CHECKOUT_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILURE,
  GET_ALL_ORDER_ITEM_REQUEST,
  GET_ALL_ORDER_ITEM_SUCCESS,
  GET_ALL_ORDER_ITEM_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
} from "./ActionType";
const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
  checkout: [],
  orders: [],
  orderItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_ALL_ORDER_REQUEST:
    case GET_ALL_ORDER_ITEM_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return { ...state, loading: true, error: null, checkout: action.payload   };
    case CREATE_ORDER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case SENT_CART_ITEM_REQUEST:
    case ADD_ITEMS_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ALL_ORDER_SUCCESS:
      return { ...state, loading: true, error: null, orders: action.payload };
    case UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        getAllOrders: action.payload,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
        // orders : action.payload , 
      };
    case SENT_CART_ITEM_SUCCESS:
    case ADD_ITEMS_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.cartItems],
        findCartItemsByCart: action.payload,
        getCart: action.payload , 
        loading: false,
      };
    case GET_ALL_ORDER_ITEM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        orderItems: action.payload,
      };
    case GET_ALL_ORDER_FAILURE:
    case SENT_CART_ITEM_FAILURE:
    case ADD_ITEMS_TO_CART_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
    case GET_ALL_ORDER_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_ALL_CHECKOUT_REQUEST:
    case GET_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout: action.payload,
        loading: false,
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cart: action.payload,
        loading: false,
      };
    case GET_ALL_CHECKOUT_FAILURE:
    case GET_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
    case UPDATE_TOTAL_PRICE_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        deleteCartItem: action.payload,
        loading: false,
      };
    case UPDATE_CART_ITEM_SUCCESS:
    case UPDATE_TOTAL_PRICE_CART_SUCCESS:
      return {
        ...state,
        updateCartItem: action.payload,
        updateCartTotalPriceCheck: action.payload,
        loading: false,
      };
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
    case UPDATE_TOTAL_PRICE_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

