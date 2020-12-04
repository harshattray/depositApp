import React from 'react';
import { render } from '@testing-library/react';
import DepositValuesComponent from './DepositValuesComponent'


describe('DepositValues', () => {

    it('should render with deposit values props', () => {
        const { getByTestId } = render(
            <DepositValuesComponent amount={'30202'} date={'12-11-19'} />
        );
        expect(getByTestId('amountvalue')).toBeInTheDocument();
        expect(getByTestId('datevalue')).toBeInTheDocument();
        expect(getByTestId('amountvalue')).toHaveTextContent('30202');
        expect(getByTestId('datevalue')).toHaveTextContent('12-11-19');
    });
});