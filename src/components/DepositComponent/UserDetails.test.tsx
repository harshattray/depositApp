import React from 'react';
import { render } from '@testing-library/react';
import UserDetailsComponent from './UserDetailsComponent'


describe('UserDetailsComponent', () => {
    const data = {
        initial_deposit: "224343",
        created_at: "11-12-2019",
        profile: {
            dateOfBirth: "21-12-90",
            desiredAgeOfRetirement: "62",
            minimumDesiredPensionSize: "9000000"
        },
        transactions: [{
            amount: "799999",
            date: "23-11-19",
            type: "MONTHLY_CONTRIBUTION"
        }]
    }
    it('should render with data props', () => {
        const { getByTestId } = render(
            <UserDetailsComponent details={data} />
        );
        expect(getByTestId('initialDeposit')).toBeInTheDocument();
        expect(getByTestId('initialDeposit')).toHaveTextContent('224343');
        expect(getByTestId('createdAt')).toBeInTheDocument();
        expect(getByTestId('createdAt')).toHaveTextContent('11-12-2019');
        expect(getByTestId('dateOB')).toBeInTheDocument();
        expect(getByTestId('dateOB')).toHaveTextContent('21-12-90');
        expect(getByTestId('minPension')).toBeInTheDocument();
        expect(getByTestId('minPension')).toHaveTextContent('9000000');
        expect(getByTestId('ageofRet')).toBeInTheDocument();
        expect(getByTestId('ageofRet')).toHaveTextContent('62');
    });
});