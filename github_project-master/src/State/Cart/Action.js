import { api, API_BASE_URL } from "../../config/apiConfig";
import { CREATE_ADDRESS_REQUEST } from "../Auth/ActionType";
import {
  ADD_ITEMS_TO_CART_FAILURE,
  ADD_ITEMS_TO_CART_REQUEST,
  ADD_ITEMS_TO_CART_SUCCESS,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ALL_CHECKOUT_FAILURE,
  GET_ALL_CHECKOUT_REQUEST,
  GET_ALL_CHECKOUT_SUCCESS,
  GET_ALL_ORDER_FAILURE,
  GET_ALL_ORDER_ITEM_FAILURE,
  GET_ALL_ORDER_ITEM_REQUEST,
  GET_ALL_ORDER_ITEM_SUCCESS,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  SENT_CART_ITEM_FAILURE,
  SENT_CART_ITEM_REQUEST,
  SENT_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_TOTAL_PRICE_CART_FAILURE,
  UPDATE_TOTAL_PRICE_CART_REQUEST,
  UPDATE_TOTAL_PRICE_CART_SUCCESS,
} from "./ActionType";

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get("/api/cart/get");
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};
export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEMS_TO_CART_REQUEST });

  try {
    const { data } = await api.put(`/api/cart/add`, reqData);
    dispatch({ type: ADD_ITEMS_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ITEMS_TO_CART_FAILURE, payload: error.message });
  }
};
export const removeItemToCart = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(`/api/cartItems/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};
export const updateItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(
      `/api/cartItems/${reqData.cartItemId}`,
      reqData.data
    );
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};
export const updateCartTotalPriceCheck =
  (selectedProductId) => async (dispatch) => {
    dispatch({ type: UPDATE_TOTAL_PRICE_CART_REQUEST });

    try {
      const { data } = await api.put(
        `/api/cartItems/update/${selectedProductId}`
      );
      dispatch({ type: UPDATE_TOTAL_PRICE_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_TOTAL_PRICE_CART_FAILURE,
        payload: error.message,
      });
    }
  };
export const sentToCheckout = (cartItemIds) => async (dispatch) => {
  dispatch({ type: SENT_CART_ITEM_REQUEST });
  try {
    const queryParams = new URLSearchParams();
    cartItemIds.forEach((cartItemId) => {
      queryParams.append("cartItemIds", cartItemId);
    });
    const queryString = queryParams.toString();
    await api.post(`/api/checkout?${queryString}`);
    dispatch({ type: SENT_CART_ITEM_SUCCESS, payload: cartItemIds });
  } catch (error) {
    dispatch({ type: SENT_CART_ITEM_FAILURE, payload: error.message });
  }
};
export const getAllCheckout = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CHECKOUT_REQUEST });

  try {
    const { data } = await api.get("/api/checkout/get");

    dispatch({ type: GET_ALL_CHECKOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CHECKOUT_FAILURE, payload: error.message });
  }
};
export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { data } = await api.post(`/api/orders/`, reqData);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};
export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDER_REQUEST });

  try {
    const { data } = await api.get("/api/orders/get");
    dispatch({ type: GET_ALL_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDER_FAILURE, payload: error.message });
  }
};
export const getAllOrderItems = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDER_ITEM_REQUEST });

  try {
    const { data } = await api.get(`/api/orders/get/orderItems/${orderId}`);
    dispatch({ type: GET_ALL_ORDER_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDER_ITEM_FAILURE, payload: error.message });
  }
};
export const updateOrderStatus = (orderId) => async (dispatch) => {
  dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

  try {
    const response = await api.put(`/api/orders/orderStatus/${orderId}`);
    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error.message });
  }
};
