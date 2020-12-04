import React from 'react';
import './DepositValuesStyles.scss';

interface PropsData {
    amount: string;
    date: string;
}

const DepositValues = ({ amount, date }: PropsData) => {
    return (
        <div className="location-time">
            <span data-testid="amountvalue"> Amount: {amount}</span>
            <span data-testid="datevalue">Date: {date}</span>
        </div>
    );
};

export default DepositValues;
