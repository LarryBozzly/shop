
import { render, screen, fireEvent } from '@testing-library/react';
import Products from './Products';
import { IProduct } from '../../models/index';

test('Test if the component is rendered', () => {
    // Create a mock onChangeProduct function

    const mockProducts: IProduct[] = [
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            },
            "isFavorite": true
        }
        // Define mock product objects here
    ];

    render(<Products products={mockProducts} onChangeProduct={() => { }} />);
})