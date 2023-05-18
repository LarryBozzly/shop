
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App'


describe('Descrkbe the filter component', () => {

    test('initial state of filter is an empty string', () => {
        render(<App />);
    
        const filterElement:any = screen.getByTestId('filter');
        expect(filterElement.value).toBe('');
    });


});



