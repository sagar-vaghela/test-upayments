import { AppThunk } from "../interfaces";
import { GET_CATEGORIES_FAILED, GET_CATEGORIES_STARTED, GET_CATEGORIES_SUCCEEDED, GET_PRODUCT_DETAILS_FAILED, GET_PRODUCT_DETAILS_STARTED, GET_PRODUCT_DETAILS_SUCCEEDED } from "../lib/constants/actionTypes";
import * as CategoryService from "../services/category-services";

// Get Categories
const getCategoriesStarted = () => ({
  type: GET_CATEGORIES_STARTED
});

const getCategoriesSucceeded = (data: any) => ({
  type: GET_CATEGORIES_SUCCEEDED,
  payload: data
});

const getCategoriesFailed = (error: string) => ({
  type: GET_CATEGORIES_FAILED,
  payload: error,
  error: true
});

export const getCategories = (): AppThunk => async (dispatch) => {
    dispatch(getCategoriesStarted());
    await CategoryService.getCategories()
      .then((res) => {
        dispatch(getCategoriesSucceeded(res.data));
      })
      .catch((error) => {
        dispatch(getCategoriesFailed("error.response"));
      });
};