import  {api ,  API_BASE_URL } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";




export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {
        
        const { data } = await api.get(
            `/api/orders/${orderId} `,
        );
      
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
       
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        });


    }
}