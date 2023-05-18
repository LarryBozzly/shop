
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Filter from './Filter'
import { DropDownLOV } from '../../models/index';


describe('Descrkbe the filter component', () => {
    const options = [
        { option: 'Option 1', value: 'option1' },
        { option: 'Option 2', value: 'option2' },
        { option: 'Option 3', value: 'option3' },
    ];


    test('should render correctly', () => {
        const onChange = jest.fn();
        render(
            <Filter
                name="filterName"
                label="Filter Label"
                value="option1"
                options={options}
                onChange={onChange}
            />
        );
    });

    test('checks if component function outputs the expected result', () => {
        // Provide any necessary input or mock dependencies
   
    });


});
