import axios from "axios"
import { type } from "@testing-library/user-event/dist/type"
import { REGISTER_REQUEST  ,REGISTER_SUCCESS ,REGISTER_FAILURE ,LOGIN_REQUEST ,LOGIN_SUCCESS , LOGIN_FAILURE ,GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, LOGOUT , UPDATE_USER_SUCCESS ,UPDATE_USER_REQUEST , UPDATE_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAILURE, GET_USER_BY_ID_REQUEST, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, CREATE_ADDRESS_FAILURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE, GET_ADDRESS_BY_USER_ID_REQUEST, GET_ADDRESS_BY_USER_ID_SUCCESS, GET_ADDRESS_BY_USER_ID_FAILURE} from "./ActionType";
import  { API_BASE_URL , api} from "../../config/apiConfig";

const token = localStorage.getItem("jwt"); 

const registerRequest = () => ({ type: REGISTER_REQUEST }); 
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS  , payload:user});
const registerFailure = (error) => ({ type: REGISTER_FAILURE  ,payload:error});


export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data; 
        if (user.jwt) {
            localStorage.setItem("jwt" , user.jwt)
        }
     
    
        dispatch(registerSuccess(user.jwt))
    } catch(error) {
        dispatch(registerFailure(error.message))
    }
}

const loginRequest = () => ({ type: LOGIN_REQUEST }); 
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS  , payload:user});
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        const user = response.data; 
        if (user.jwt) {
          localStorage.setItem("jwt", user.jwt)
          console.log(user.jwt);
        }
        
        
        dispatch(loginSuccess(user.jwt))
    } catch(error) {
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST }); 
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS  , payload:user});
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });



export const getUser = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get('/api/users/profile'); 
    dispatch({ type: GET_USER_SUCCESS, payload: data });
 
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
    
}
export const logout = () =>(dispatch) =>{
    dispatch({type:LOGOUT , payload:null})
}
export const getAllUser = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USER_REQUEST });
  try {
    const { data } = await api.get('/api/users/'); 
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: data });
   
  } catch (error) {
    dispatch({ type: GET_ALL_USER_FAILURE, payload: error.message });
  }

}
export const getUserById = (userId) => async (dispatch) => {
    dispatch({ type: GET_USER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/users/get/${userId}`, userId); 
    dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_BY_ID_FAILURE, payload: error.message });
  }

}
export const getAddressByUserId = (userId) => async (dispatch) => {
  dispatch({ type: GET_ADDRESS_BY_USER_ID_REQUEST });
try {
  const { data } = await api.get(`/api/users/address/${userId}`, userId); 
  dispatch({ type: GET_ADDRESS_BY_USER_ID_SUCCESS, payload: data });
} catch (error) {
  dispatch({ type: GET_ADDRESS_BY_USER_ID_FAILURE, payload: error.message });
}

}
export const getAddress = () => async (dispatch) => {
  dispatch({ type: GET_ADDRESS_REQUEST });
try {
  const { data } = await api.get(`/api/users/address`); 
  dispatch({ type: GET_ADDRESS_SUCCESS, payload: data });

} catch (error) {
  dispatch({ type: GET_ADDRESS_FAILURE, payload: error.message });
}

}

export const updateUserProfile = (userData) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
       
        const { data } = await api.post(
            `/api/users/update`,
            userData ,
        );
    
      
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
      
        dispatch({
            type: UPDATE_USER_FAILURE,
            payload: error.message,
        });
    }
}

export const createAddress = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ADDRESS_REQUEST });
  try {
     
      const { data } = await api.post(
          `/api/users/address`,
          reqData.address,
      );
  
     
      dispatch({
          type: CREATE_ADDRESS_SUCCESS,
          payload: data,
      });
  } catch (error) {
   
      dispatch({
          type: CREATE_ADDRESS_FAILURE,
          payload: error.message,
      });
  }
};