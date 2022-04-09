import { AxiosPromise } from 'axios';
import httpService from './http-service';
import { categoryType } from '../interfaces/index';

export const getCategories = (): AxiosPromise<{ categories: categoryType[] }> => {
  return httpService.get(`categories`);
};