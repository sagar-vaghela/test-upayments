import { AxiosPromise } from 'axios';
import httpService from './http-service';
import { formProps, productType } from '../interfaces/index';

export const getProducts = (): AxiosPromise<{ products: productType[] }> => {
  return httpService.get(`products`);
};

export const getProductDetails = (
  id: string | undefined
): AxiosPromise<{ product: productType }> => {
  return httpService.get(`products/${id}`);
};

export const createProduct = (payload: formProps): AxiosPromise<void> => {
  return httpService.post(`products`, payload);
};

export const removeProduct = (id: string): AxiosPromise<void> => {
  return httpService.delete(`products/${id}`);
};
