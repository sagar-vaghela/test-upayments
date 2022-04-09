import { AppThunk, formProps } from "../interfaces";
import { GET_CREATE_PRODUCT_FAILED, GET_CREATE_PRODUCT_STARTED, GET_CREATE_PRODUCT_SUCCEEDED, GET_PRODUCTS_FAILED, GET_PRODUCTS_STARTED, GET_PRODUCTS_SUCCEEDED, GET_PRODUCT_DETAILS_FAILED, GET_PRODUCT_DETAILS_STARTED, GET_PRODUCT_DETAILS_SUCCEEDED } from "../lib/constants/actionTypes";
import * as ProductService from "../services/product-services";

// Get Product
const getProductsStarted = () => ({
  type: GET_PRODUCTS_STARTED
});

const getProductsSucceeded = (data: any) => ({
  type: GET_PRODUCTS_SUCCEEDED,
  payload: data
});

const getProductsFailed = (error: string) => ({
  type: GET_PRODUCTS_FAILED,
  payload: error,
  error: true
});

export const getProducts = (): AppThunk => async (dispatch) => {
    dispatch(getProductsStarted());
    await ProductService.getProducts()
      .then((res) => {
        dispatch(getProductsSucceeded(res.data));
      })
      .catch((error) => {
        dispatch(getProductsFailed("error.response"));
      });
};

// Get Product
const getProductDetailsStarted = () => ({
  type: GET_PRODUCT_DETAILS_STARTED
});

const getProductDetailsSucceeded = (data: any) => ({
  type: GET_PRODUCT_DETAILS_SUCCEEDED,
  payload: data
});

const getProductDetailsFailed = (error: string) => ({
  type: GET_PRODUCT_DETAILS_FAILED,
  payload: error,
  error: true
});

export const getProductDetails = (id: string | undefined): AppThunk => async (dispatch) => {
    dispatch(getProductDetailsStarted());
    await ProductService.getProductDetails(id)
      .then((res) => {
        dispatch(getProductDetailsSucceeded(res.data));
      })
      .catch((error) => {
        dispatch(getProductDetailsFailed("error.response"));
      });
};

// create Product
const createProductStarted = () => ({
  type: GET_CREATE_PRODUCT_STARTED
});

const createProductSucceeded = (data: any) => ({
  type: GET_CREATE_PRODUCT_SUCCEEDED,
  payload: data
});

const createProductFailed = (error: string) => ({
  type: GET_CREATE_PRODUCT_FAILED,
  payload: error,
  error: true
});

export const createProduct = (payload: formProps): AppThunk => async (dispatch) => {
    dispatch(createProductStarted());
    await ProductService.createProduct(payload)
      .then((res) => {
        dispatch(createProductSucceeded(res.data));
      })
      .catch((error) => {
        dispatch(createProductFailed("error.response"));
      });
};