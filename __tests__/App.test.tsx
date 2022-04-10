import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../src/App';
import { MemoryRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: 'GET_PRODUCTS_STARTED'
  };
}

function fetchData() {
  return (dispatch) => {
    return axios
      .get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products') // Some async action with promise
      .then(() => dispatch(success()));
  };
}
describe('Render App', () => {
  const initialState = {
    categoriesData: {
      categories: [],
      category: {},
      isLoading: false,
      error: null
    },
    productData: {
      products: [],
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
          <App />
        </Router>
      </Provider>
    );

  test('App is rendered correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app')).toBeInTheDocument();

    // Return the promise
    return store.dispatch(fetchData()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(success());
    });
  });
});
