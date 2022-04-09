import { initialStateType } from "../interfaces";

const initialState: initialStateType = {
  categoriesData: {
    categories: [],
    category: {},
    isLoading: false,
    error: null
  },
  productData: {
    products: [],
    product: null,
    isLoading: false,
    error: null
  }
};

export default initialState;
