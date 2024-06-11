import api, { API_BASE_URL } from "../../config/apiConfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_ALL_PRODUCTS_REQUEST,
  FIND_ALL_PRODUCTS_SUCCESS,
  FIND_ALL_PRODUCTS_FAILURE,
  DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, 
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
  REMOVE_FAVOURITE_REQUEST,
  REMOVE_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_FAILURE,
  FIND_PRODUCTS_BY_BRANDS_REQUEST,
  FIND_PRODUCTS_BY_BRANDS_SUCCESS,
  FIND_PRODUCTS_BY_BRANDS_FAILURE
} from "./ActionType";
import axios from "axios";

export const findAllProducts = () => async(dispatch) => {
      dispatch({type:FIND_ALL_PRODUCTS_REQUEST})
     
      try {
        const { data } = await api.get('/api/allProducts');
        dispatch({ type: FIND_ALL_PRODUCTS_SUCCESS, payload: data });
      
      } catch (error) {
          dispatch({type:FIND_ALL_PRODUCTS_FAILURE , payload:error.message})
      }
  };
export const findProductsByCategory = (reqData) => async (dispatch) => {
  dispatch({type: FIND_PRODUCTS_REQUEST})
    const { category } = reqData;
    try {
        const { data } = await api.get(`/api/admin/products?category=${category}`);

        dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: error.message});
    }
};
export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  
  try {
    const { data } =await api.get(`/api/products/id/${productId}`);
   

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
export const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });

  try {
    await api.delete(`/api/admin/products/delete/${productId}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });

  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};
export const deleteBrand = (brandId) => async (dispatch) => {
  dispatch({ type: DELETE_BRAND_REQUEST });
  try {
    await api.delete(`/api/admin/products/delete/brand/${brandId}`);
    dispatch({ type: DELETE_BRAND_SUCCESS, payload: brandId });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_FAILURE, payload: error.message });
  }
};
export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });

  try {
    const response = await api.post(`/api/admin/products/`, productData);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
};
export const createBrand = (brandData) => async (dispatch) => {
  dispatch({ type: CREATE_BRAND_REQUEST });

  try {
    const response = await api.post(`/api/brand/`, brandData);
    dispatch({ type: CREATE_BRAND_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_BRAND_FAILURE, payload: error.message });
  }
};
export const findAllBrand = () => async (dispatch) => {
  dispatch({ type: FIND_ALL_BRANDS_REQUEST });

  try {
    const { data } = await api.get(`/api/admin/products/brand`);
    
    dispatch({ type: FIND_ALL_BRANDS_SUCCESS, payload: data  });
  } catch (error) {
    dispatch({ type: FIND_ALL_BRANDS_FAILURE, payload: error.message });
  }
};
export const searchProductsByQuery = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCTS_REQUEST });
  try {
    const { data } =await api.get(`/api/products/search/${query}`);


    dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_FAILURE, payload: error.message });
  }
};
export const searchProductsBySoldAt = (soldAt) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCTS_SOLD_AT_REQUEST });
  try {
    const { data } = await api.get(`/api/products/soldAt/${soldAt}`);
    dispatch({ type: SEARCH_PRODUCTS_SOLD_AT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_SOLD_AT_FAILURE, payload: error.message });
  }
};
export const addProductToFavourite = (productId) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_FAVOURITE_REQUEST });
  try {
    const {response} = await api.put(`/api/product/favourite/${productId}`);
   
    // const product = response.data;
   
    dispatch({ type: ADD_PRODUCT_TO_FAVOURITE_SUCCESS, payload:response });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_TO_FAVOURITE_FAILURE, payload: error.message });
  }
};
export const findAllProductFavourite = () => async(dispatch) => {
  dispatch({type:FIND_ALL_PRODUCT_FAVOURITE_REQUEST})
 
  try {
    const { data } = await api.get('/api/products/favourite');
    dispatch({ type: FIND_ALL_PRODUCT_FAVOURITE_SUCCESS, payload: data });

  } catch (error) {
      dispatch({type:FIND_ALL_PRODUCT_FAVOURITE_FAILURE , payload:error.message})
  }
};
export const removeFavourite = (productId) => async (dispatch) => {
  dispatch({ type: REMOVE_FAVOURITE_REQUEST });
  try {
    await api.delete(`/api/product/${productId}`);
    dispatch({ type: REMOVE_FAVOURITE_SUCCESS, payload: productId });
  } catch (error) {
    dispatch({ type: REMOVE_FAVOURITE_FAILURE, payload: error.message });
  }
};
export const findProductsByBrands = (reqData) => async (dispatch) => {
  dispatch({type: FIND_PRODUCTS_BY_BRANDS_REQUEST})
    const { brands } = reqData;
    try {
        const { data } = await api.get(`/api/productsByBrands?brands=${brands}`);
     
        dispatch({type: FIND_PRODUCTS_BY_BRANDS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: FIND_PRODUCTS_BY_BRANDS_FAILURE, payload: error.message});
    }
};

