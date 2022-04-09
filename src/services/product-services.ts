import { AxiosPromise } from 'axios';
import httpService from './http-service';
import { productType } from '../interfaces/index';

export const getProducts = (): AxiosPromise<{ products: productType[] }> => {
  return httpService.get(`products`);
};

export const getProductDetails = (id: string | undefined): AxiosPromise<{ products: productType[] }> => {
  return httpService.get(`products/${id}`);
};