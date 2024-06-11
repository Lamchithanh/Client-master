import { searchProducts } from "./Action";
import {
  FIND_ALL_PRODUCTS_SUCCESS,
  FIND_ALL_PRODUCTS_FAILURE,
  FIND_ALL_PRODUCTS_REQUEST,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  FIND_ALL_BRANDS_REQUEST,
  FIND_ALL_BRANDS_SUCCESS,
  FIND_ALL_BRANDS_FAILURE,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_SOLD_AT_REQUEST,
  SEARCH_PRODUCTS_SOLD_AT_SUCCESS,
  SEARCH_PRODUCTS_SOLD_AT_FAILURE,
  ADD_PRODUCT_TO_FAVOURITE_REQUEST,
  ADD_PRODUCT_TO_FAVOURITE_SUCCESS,
  ADD_PRODUCT_TO_FAVOURITE_FAILURE,
  FIND_ALL_PRODUCT_FAVOURITE_REQUEST,
  FIND_ALL_PRODUCT_FAVOURITE_SUCCESS,
  FIND_ALL_PRODUCT_FAVOURITE_FAILURE,
  REMOVE_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_REQUEST,
  REMOVE_FAVOURITE_FAILURE,
  FIND_PRODUCTS_BY_BRANDS_FAILURE,
  FIND_PRODUCTS_BY_BRANDS_REQUEST,
  FIND_PRODUCTS_BY_BRANDS_SUCCESS,
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  brands: [],
  searchProducts: [],
  soldAt: [],
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
    case FIND_ALL_PRODUCTS_REQUEST:
    case FIND_ALL_BRANDS_REQUEST:
    case SEARCH_PRODUCTS_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case SEARCH_PRODUCTS_SOLD_AT_REQUEST:
    case ADD_PRODUCT_TO_FAVOURITE_REQUEST:
    case REMOVE_FAVOURITE_REQUEST:
      case FIND_PRODUCTS_BY_BRANDS_REQUEST:

      return {
        ...state,
        loading: true,
        error: null,
        findAllProducts: action.payload,
      };
      case FIND_ALL_PRODUCT_FAVOURITE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        findAllBrand: action.payload,
      };
    case FIND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
      case FIND_PRODUCTS_BY_BRANDS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          products: action.payload,
        };
      case FIND_ALL_PRODUCT_FAVOURITE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          products: action.payload,
        };
    case ADD_PRODUCT_TO_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,  
        addProductToFavourite: action.payload , 
       
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case SEARCH_PRODUCTS_SOLD_AT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        brands: action.payload,
      };
    case FIND_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
        findAllProducts: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleteProduct: action.payload,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case REMOVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        removeFavourite: action.payload,
        products: state.products.filter((products) => products.id !== action.payload),
      };
    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleteBrand: action.payload,
        brands: state.brands.filter((brands) => brands.id !== action.payload),
      };
      case FIND_ALL_PRODUCT_FAVOURITE_FAILURE:
    case FIND_PRODUCTS_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
    case FIND_ALL_PRODUCTS_FAILURE:
    case FIND_ALL_BRANDS_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case DELETE_BRAND_FAILURE:
    case SEARCH_PRODUCTS_FAILURE:
    case ADD_PRODUCT_TO_FAVOURITE_FAILURE:
    case SEARCH_PRODUCTS_SOLD_AT_FAILURE:
    case REMOVE_FAVOURITE_FAILURE:
    case FIND_PRODUCTS_BY_BRANDS_FAILURE:

      return { ...state, loading: false, error: action.payload };
    case CREATE_PRODUCT_REQUEST:
    case CREATE_BRAND_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, action.payload],
      };
    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        brands: [...state.brands, action.payload],
      };
    case CREATE_PRODUCT_FAILURE:
    case CREATE_BRAND_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
