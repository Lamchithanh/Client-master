import { CREATE_BRAND_FAILURE } from "../Product/ActionType";

import { CREATE_DEALHOT_REQUEST, CREATE_DEALHOT_SUCCESS, DELETE_DEALHOT_FAILURE, DELETE_DEALHOT_REQUEST, DELETE_DEALHOT_SUCCESS, GET_ALL_DEALHOT_FAILURE, GET_ALL_DEALHOT_REQUEST, GET_ALL_DEALHOT_SUCCESS, GET_All_DATA_FAILURE, GET_All_DATA_REQUEST, GET_All_DATA_SUCCESS } from "./ActionType";

const initialState = {
    dealhot: null,
    data : [] , 
    loading: false,
    error: null,
    dealhotItems: [], 
 
}
export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DEALHOT_REQUEST:
        case GET_ALL_DEALHOT_REQUEST:
            case GET_All_DATA_REQUEST:
            return { ...state, loading: true, error: action.payload  };
            case DELETE_DEALHOT_REQUEST:
                return { ...state, loading: true, error: action.payload  ,     getAllDealhot: action.payload,};
        case CREATE_DEALHOT_SUCCESS:
            return {
                ...state,
                dealhotItems: [...state.dealhotItems, action.payload],
                dealhot: action.payload,
                // dealhotItems: action.payload,
                creatDealhot: action.payload ,
                loading: false,
            };
        case GET_ALL_DEALHOT_SUCCESS:
            return {
                ...state,
                loading: false,
                 error: null,
                dealhotItems: action.payload,
            };
            case GET_All_DATA_SUCCESS:
                return {
                    ...state,
                    loading: false,
                   error: null,
                    data: action.payload,
                    // getAllData : action.payload, 
                };
                case DELETE_DEALHOT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                deleteDealhot: action.payload,
                dealhotItems: state.dealhotItems.filter(
                  (dealhotItems) => dealhotItems.id !== action.payload
                ),
            
            };
          
        case CREATE_BRAND_FAILURE:
            case DELETE_DEALHOT_FAILURE:
        case GET_ALL_DEALHOT_FAILURE:
            case GET_All_DATA_FAILURE :
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
          
                default:
                return state;
        
        
        
    }

    
}