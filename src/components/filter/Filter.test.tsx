
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Filter from './Filter'

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
        // Assert label is rendered
        const labelElement = screen.getByText('Filter Label');
        expect(labelElement).toBeInTheDocument();

        // Assert options are rendered
        options.forEach((option) => {
            const optionElement = screen.getByText(option.option);
            expect(optionElement).toBeInTheDocument();
        });

        // Assert initial value is selected
        const selectedValueElement = screen.getByDisplayValue('option1');
        expect(selectedValueElement).toBeInTheDocument();
    });


});
