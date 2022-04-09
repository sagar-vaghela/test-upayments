import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CREATE_PRODUCT, PRODUCT_ROUTE } from "../lib/constants/routes";
import { initialStateType, productDataType, productType } from '../interfaces/index';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions";

const ProductList = () => {
  const products = useSelector<initialStateType, productType[]>(state => state.productData.products);
  const dispatch = useDispatch()
  useEffect(() => {  
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex mb-4 ">
          <div className="grid justify-items-start pb-6 h-12 w-1/2">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              name="search"
              type="search"
              autoComplete="search"
              required
              className="appearance-none rounded-md  relative block w-80 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  shadow-md focus:z-10 sm:text-sm"
              placeholder="search"
            />
          </div>
          <div className="grid justify-items-end pb-6 h-12 w-1/2">
            <label htmlFor="categories" className="sr-only">
              Categories
            </label>
            <div>
              <select
                id="categories"
                name="categories"
                placeholder="Categories"
                autoComplete="categories"
                className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500  sm:text-sm"
              >
                <option>Mobile</option>
                <option>Watch</option>
                <option>Headphone</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <Link to={`${PRODUCT_ROUTE}/${product.id}`} key={product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.avatar}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 decoration-4 text-gray-1000">
                {product.name}
              </h2>
              <p className="mt-1 decoration-4 text-center font-medium text-gray-900">{`$${product.price}`}</p>
            </Link>
          ))}
        </div>
        <div className="grid justify-items-end ">
          <Link to={CREATE_PRODUCT}>
          <button className="bg-black text-white py-5 px-5 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
