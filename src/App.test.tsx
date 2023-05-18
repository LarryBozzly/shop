
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App'
import React from 'react'


describe('Descrkbe the filter component', () => {

    test('initial state of filter is an empty string', () => {
        const { container } = render(<App />);
        
        const filterElement:any = container.querySelector('.css-yf8vq0-MuiSelect-nativeInput');
        expect(filterElement?.value).toBe('');
      });


});



