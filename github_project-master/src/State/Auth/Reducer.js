import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, GET_ADDRESS_BY_USER_ID_REQUEST, GET_ADDRESS_BY_USER_ID_SUCCESS, GET_ADDRESS_FAILURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ALL_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_USER_BY_ID_FAILURE, GET_USER_BY_ID_REQUEST, GET_USER_BY_ID_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./ActionType"
import { clearUser } from "../../../src/components/User/Header/Header";
import { getAddressByUserId } from "./Action";
const initialState = {
    user: [] , 
    isLoading: false, 
    error: null  ,  
    jwt: null, 
    auth: [],
    address: [], 
    addresses : null , 
    
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST: 
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            case GET_ALL_USER_REQUEST:
        case GET_USER_BY_ID_REQUEST:
            case GET_ADDRESS_BY_USER_ID_REQUEST:
            
            return { ...state, isLoading: true, error: null, auth: action.payload }
            case GET_ADDRESS_REQUEST:
                return { ...state, isLoading: true, error: null , address:action.payload }
            case CREATE_ADDRESS_REQUEST:
                return { ...state, isLoading: true, error: null , address:action.payload }
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
           
        
            case CREATE_ADDRESS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                    error: null,
                    address: action.payload, 
                    getAddress : action.payload , 
            };
            case GET_ADDRESS_BY_USER_ID_SUCCESS:
                return {
                  ...state,
                  loading: false,
                    error: null,
                    addresses: action.payload, 
                    getAddressByUserId: action.payload ,  
                };
        case REGISTER_SUCCESS  : 
        case LOGIN_SUCCESS: 
        localStorage.setItem('isAnonymous', 'false');
        return { ...state, isLoading: false, error: null,jwt:action.payload  }
        case UPDATE_USER_SUCCESS: 
        return {
            ...state,
            loading: false,
            success: true,
            auth: action.payload,
            error: null,
          };
       
        case GET_USER_SUCCESS:  
            return { ...state, isLoading: false, error: null ,success: true , auth:action.payload}
            case GET_ADDRESS_SUCCESS:  
            return { ...state, isLoading: false, error: null ,success: true , address:action.payload ,getAddress: action.payload}   
        case GET_ALL_USER_SUCCESS:  
            return { ...state, isLoading: false, error: null, success: true, user: action.payload }
            case GET_USER_BY_ID_SUCCESS:  
            return { ...state, isLoading: false, error: null ,success: true , user:action.payload}
            case CREATE_ADDRESS_FAILURE:
        case REGISTER_FAILURE: 
        case LOGIN_FAILURE:
        case GET_USER_FAILURE: 
        case GET_ALL_USER_FAILURE: 
        case GET_USER_BY_ID_FAILURE: 
        return { ...state, isLoading: false, error: null, error: action.payload ,  auth:action.payload }
        case GET_ADDRESS_FAILURE: 
        return { ...state, isLoading: false, error: null, error: action.payload ,  address:action.payload }
        case UPDATE_USER_FAILURE: 

            return {
              ...state,
              loading: false,
              error: action.payload,
            };
     
        case LOGOUT: 
            return {...initialState}
            
            
        default:
            return state; 

    }
    
 }