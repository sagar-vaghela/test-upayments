import {
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCCEEDED
} from '../lib/constants/actionTypes';
import initialState from './initialState';

const categoryReducer = (state = initialState.categoriesData, action) => {
  switch (action.type) {
    case GET_CATEGORIES_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default categoryReducer;
