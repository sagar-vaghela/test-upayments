import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../lib/constants/routes';
import { initialStateType, productType, categoryType } from '../interfaces/index';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, removeProduct } from '../actions';
import { TrashIcon } from '@heroicons/react/solid';

const ProductList = () => {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const products = useSelector<initialStateType, productType[]>(
    (state) => state.productData.products
  );
  const categories = useSelector<initialStateType, categoryType[]>(
    (state) => state.categoriesData.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    if (categories.length === 0) dispatch(getCategories());
  }, []);

  const onDelete = async (id: string) => {
    await dispatch(removeProduct(id));
    dispatch(getProducts());
  };

  const searchResult = products?.filter(
    (prod) =>
      (prod.name.toUpperCase().indexOf(search.toUpperCase()) > -1 ||
        prod.price.toUpperCase().indexOf(search.toUpperCase()) > -1 ||
        prod.category.toUpperCase().indexOf(search.toUpperCase()) > -1) &&
      prod.category.toUpperCase().indexOf(category.toUpperCase()) > -1
  );

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex mb-4 ">
          <div className="grid justify-items-start pb-6 h-12 w-1/2">
            <input
              id="search"
              name="search"
              type="search"
              autoComplete="search"
              required
              className="appearance-none rounded-md  relative block w-80 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  shadow-md focus:z-10 sm:text-sm"
              placeholder="Search Products.."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div className="grid justify-items-end pb-6 h-12 w-1/2">
            <label htmlFor="categories" className="sr-only">
              Categories
            </label>
            <div>
              <select
                onChange={(e) => setCategory(e.target.value)}
                id="categories"
                name="categories"
                placeholder="Categories"
                autoComplete="categories"
                value={category}
                className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500  sm:text-sm"
              >
                <option value="">Categories</option>
                {categories?.map((cat, index) => (
                  <option key={index} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {searchResult?.map((product, index) => (
            <div className="group" key={index}>
              <Link to={`${PRODUCT_ROUTE}/${product?.id}`}>
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    alt={product?.avatar}
                    src={product?.avatar}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h2 className="mt-4 decoration-4 text-gray-1000">{product?.name}</h2>
              </Link>
              <span onClick={() => onDelete(product?.id)}>
                <TrashIcon className="h-5 w-5" />
              </span>
              <Link to={`${PRODUCT_ROUTE}/${product?.id}`}>
                <p className="mt-1 decoration-4 text-center font-medium text-gray-900">{`$${product?.price}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
