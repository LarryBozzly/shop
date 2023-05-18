import React, { useState, useEffect } from 'react';
import './App.scss';
import Filter from './components/filter';
import Products from './components/products';
import { getProductsAPI, getProductsStore } from './services/product'
import { IProduct, DropDownLOV } from './models/index'
import { filterOnlyFavorites, filterAscendingProducts, filterDescendingProducts } from './utils/product'




function App() {
  const [_products, _setProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const [filter, setFilter] = useState<any>('');

  const filterLOV: DropDownLOV[] = [
    { value: 'favorite', option: 'Favorite Items' },
    { value: 'asc', option: 'Descending' },
    { value: 'desc', option: 'Ascending (ASC)' }
  ]

  // init//
  useEffect(() => {
    Promise.all([getProductsAPI(), getProductsStore()]).then(([productsAPI, productsStore]) => {
      const arrayOfIds: number[] = productsStore.map((obj) => obj.id);
      const allProducts: IProduct[] = productsAPI.map((prod) => ({
        ...prod,
        isFavorite: arrayOfIds.includes(prod.id),
      }));
      _setProducts([...productsAPI]);
      setProducts([...allProducts]);
    }).catch(error => {
      // Handle the error here
    });
  }, []);
  ///

  const handleChangeProduct = (product: IProduct) => {
    const replacedArray = products.map((prod) =>
      prod.id === product.id ? product : prod
    );
    setProducts(replacedArray);
  };

  const handleChangeFilter = (selectedValue: string) => {
    setFilter(selectedValue);
  };



  // effects //
  useEffect(() => {
    const filteredProducts = (products: IProduct[]) => {
      switch (filter) {
        case 'favorite':
          return filterOnlyFavorites(products)
        case 'asc':
          return filterAscendingProducts(products)
        case 'desc':
          return filterDescendingProducts(products)
        default:
          return [];
      }
    };
    const remapProd = (products: IProduct[], _products: IProduct[]) => {
      const productsAPI: IProduct[] = [..._products];
      const favoriteProductsIDs = products
      .filter((prod) => prod.isFavorite === true ? prod.id : null)
      .map((item) => {
        return item.id
      })

      return productsAPI.map((prod) => {
        if (favoriteProductsIDs.includes(prod.id)) {
          return { ...prod, isFavorite: true }
        }
        return prod;
      })
    };
    const mutatedProducts = remapProd(products, _products)

    setProducts([...filteredProducts(mutatedProducts)]);
  }, [setFilter, filter]);
  //
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-200">
      <div className="py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-end container">
            <Filter name={'filterControl'} label={'Filter'} value={filter} options={filterLOV}
              onChange={handleChangeFilter}></Filter>
            <div className="grid grid-cols-3 gap-4">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Products products={products} onChangeProduct={handleChangeProduct}></Products>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
