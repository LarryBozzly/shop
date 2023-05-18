import axios from 'axios';
import { IProduct } from '../models/index';
import { remapProducts } from '../utils/product'

export const getProductsAPI = async (): Promise<IProduct[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products:IProduct[]  = response.data || [];
    return remapProducts(products);
  } catch (error) {
    // console.error('Error fetching data:', error.message);
    // Handle the error here
    throw error;
  }
};

export const getProductsStore = async (): Promise<IProduct[]> => {
  try {
    const favoriteProducts = localStorage.getItem('favorite-product');
    let parsedFavoriteProducts;
    let allProducts:IProduct[] = [];
    if(favoriteProducts) {
      parsedFavoriteProducts = JSON.parse(favoriteProducts);
    }
    if(parsedFavoriteProducts) {
      allProducts = [...parsedFavoriteProducts]
    } 

    return allProducts;
  } catch (error) {
    // console.error('Error fetching data:', error.message);
    // Handle the error here
    throw error;
  }
};

