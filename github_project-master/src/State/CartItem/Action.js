import { FIND_CART_ITEMS_REQUEST, FIND_CART_ITEMS_SUCCESS, FIND_CART_ITEMS_FAILURE } from './ActionType';
import api, { API_BASE_URL } from "../../config/apiConfig";

export const findCartItemsByCart = () => async (dispatch) => {
  dispatch({ type: FIND_CART_ITEMS_REQUEST });

  try {
    const { data } = await api.get('/api/cart/items'); 
    dispatch({ type: FIND_CART_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_CART_ITEMS_FAILURE, payload: error.message });
  }
};
export default findCartItemsByCart; 

