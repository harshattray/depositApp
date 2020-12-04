import React from 'react';
import { render } from '@testing-library/react';
import DepositComponent from './DepositComponent'


describe('DepositComponent', () => {
    const data = {
        amount: "1278",
        date: "23-11-19",
        type: "MONTHLY_CONTRIBUTION"
    }
    it('should render with data props', () => {
        const { getByTestId } = render(
            <DepositComponent data={data} />
        );
        expect(getByTestId('datatype')).toBeInTheDocument();
        expect(getByTestId('datatype')).toHaveTextContent('MONTHLY_CONTRIBUTION');
    });
});