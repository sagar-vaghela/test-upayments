import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import axios from 'axios';
import { GET_PRODUCTS_STARTED } from '../src/lib/constants/actionTypes';
import ProductList from '../src/components/productList';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
function productSuccess() {
  return {
    type: GET_PRODUCTS_STARTED
  };
}

function fetchProductData() {
  return (dispatch) => {
    return axios
      .get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products') // Some async action with promise
      .then(() => dispatch(productSuccess()));
  };
}

describe('Render App', () => {
  const initialState = {
    categoriesData: {
      categories: [
        {
          "createdAt": "2022-03-09T04:12:28.083Z",
          "name": "electronics",
          "id": "1"
        }
      ],
      category: {},
      isLoading: false,
      error: null
    },
    productData: {
      products: [
        {
          "createdAt": "2022-03-26T15:12:50.845Z",
          "name": "Apple MacBook",
          "avatar": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
          "id": "17",
          "price": "1999",
          "category": "electronics",
          "description": "of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy",
          "developerEmail": "salikalper@gmail.com"
          },
      ],
      product: {},
      isLoading: false,
      error: null
    }
  };
  const store: any = mockStore(initialState);
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <Router>
          <ProductList />
        </Router>
      </Provider>
    );

  test('Product List is rendered correctly', () => {
    const { getByTestId, getByText } = renderComponent();
    expect(getByTestId('productlist')).toBeInTheDocument();
    expect(getByText(initialState.productData.products[0].name)).toBeInTheDocument();
  });
});
