
import { render, screen, fireEvent } from '@testing-library/react';
import Products from './Products';
import { IProduct } from '../../models/index';


describe('Product component', () => {
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

    test('Test if the price is rendered', () => {
        // Create a mock onChangeProduct function
        const { container } = render(<Products products={mockProducts} onChangeProduct={() => { }} />);

        const priceHeader: any = container.querySelector('.css-19r320q-MuiTypography-root');
        expect(priceHeader.textContent).toMatch(/Price/i);
    })

    test('Test if the favorite button is vibile to the user', () => {
        render(<Products products={mockProducts} onChangeProduct={() => { }} />);
        const itemElement = screen.getByTestId('FavoriteIcon')
        expect(itemElement).toBeInTheDocument();
    })

})



