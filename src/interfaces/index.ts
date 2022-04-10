import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';

export type initialStateType = {
  categoriesData: categoriesDataType;
  productData: productDataType;
};

export type categoryType = {
  createdAt: string;
  name: string;
  id: string;
};

export type productType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  price: string;
  category: string;
  description: string;
  developerEmail: string;
};

export type categoriesDataType = {
  categories: Array<categoryType>;
  category: any | undefined | null | categoryType;
  isLoading: boolean;
  error: any | undefined | null;
};

export type productDataType = {
  products: Array<productType>;
  product: any | undefined | null | productType;
  isLoading: boolean;
  error: any | undefined | null;
};

export type AppThunk = ThunkAction<void, initialStateType, null, Action<string>>;

export type formProps = {
  name: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  avatar: string;
};
