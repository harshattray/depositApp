import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DashboardComponent from './DashboardComponent'
import { MemoryRouter } from 'react-router-dom';


describe('DepositComponent', () => {
    it('should render with logout button', () => {
        const onClick = jest.fn();

        const { getByTestId } = render(
            <MemoryRouter>
                <DashboardComponent>
                    <div onClick={onClick}></div>
                </DashboardComponent>,
      </MemoryRouter>
        );

        fireEvent.click(getByTestId('text'));

        expect(getByTestId('text')).toBeInTheDocument();
    });
});