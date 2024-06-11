import  {api ,  API_BASE_URL } from "../../config/apiConfig";
import { CREATE_DEALHOT_FAILURE, CREATE_DEALHOT_REQUEST, CREATE_DEALHOT_SUCCESS, DELETE_DEALHOT_FAILURE, DELETE_DEALHOT_REQUEST, DELETE_DEALHOT_SUCCESS, GET_All_DATA_FAILURE, GET_All_DATA_REQUEST, GET_All_DATA_SUCCESS, GET_ALL_DEALHOT_FAILURE, GET_ALL_DEALHOT_REQUEST, GET_ALL_DEALHOT_SUCCESS, SENT_CART_ITEM_FAILURE, SENT_CART_ITEM_REQUEST, SENT_CART_ITEM_SUCCESS } from "./ActionType";
// import { } from "./ActionType";
export const createDealhot = (dealhotData) => async (dispatch) => {
    dispatch({ type: CREATE_DEALHOT_REQUEST });
  
    try {
      const response = await api.post(`/api/dealhot/create`, dealhotData);
      dispatch({ type: CREATE_DEALHOT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_DEALHOT_FAILURE, payload: error.message });
    }
};
export const getAllDealhot = () => async (dispatch) => {
    dispatch({ type: GET_ALL_DEALHOT_REQUEST });
  
    try {
      const response = await api.get(`/api/dealhot/get`);
      dispatch({ type: GET_ALL_DEALHOT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_DEALHOT_FAILURE, payload: error.message });
    }
};
  
export const getData = () => async (dispatch) => {
  dispatch({ type: GET_All_DATA_REQUEST });

  try {
    const response = await api.get(`/api/dataStatistics/`);
    dispatch({ type: GET_All_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_All_DATA_FAILURE, payload: error.message });
  }
};
export const deleteDealhot = (dealhotId) => async (dispatch) => {
  dispatch({ type: DELETE_DEALHOT_REQUEST });

  try {
       await api.delete(`/api/dealhot/delete/${dealhotId}` , dealhotId);
    dispatch({ type: DELETE_DEALHOT_SUCCESS, payload: dealhotId });
  } catch (error) {
    dispatch({ type: DELETE_DEALHOT_FAILURE, payload: error.message });
  }
};