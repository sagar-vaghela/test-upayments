import { combineReducers } from "redux";
import productData from "./productReducer";
import categoriesData from "./categoryReducer";

const rootReducer = combineReducers({
    productData,
    categoriesData,
});

export default rootReducer;
