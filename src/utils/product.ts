import { IProduct } from '../models/index'

export const remapProducts = (products: IProduct[]): IProduct[] => {
    return products.map((item) => ({
        ...item,
        isFavorite: false, // Add a new boolean property
    }));
};

export const filterOnlyFavorites = (products: IProduct[]): IProduct[] => {
    return products.filter((item) => ( item.isFavorite === true));
};

export const filterDescendingProducts = (products: IProduct[]): IProduct[] => {
    return products.sort((a: IProduct, b: IProduct) => a.price - b.price);
};

export const filterAscendingProducts = (products: IProduct[]): IProduct[] => {
   
    return products.sort((a: IProduct, b: IProduct) => b.price - a.price);
};
