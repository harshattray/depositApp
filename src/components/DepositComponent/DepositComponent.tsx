import React from 'react';
import './DepositComponentStyles.scss';
import Image from '../ImageComponent/ImageComponent';
import DepositValues from '../DepositValuesComponent/DepositValuesComponent'
import UserDetailsComponent from './UserDetailsComponent'

interface DepositPropsData {
    data: TransactionsData
}

interface TransactionsData {
    amount: string,
    date: string,
    type: string
}

const DepositComponent = ({ data }: DepositPropsData) => {

    return (
        <div className="card">
            <div className="image-and-title">
                <div className="title-and-location">
                    <Image data-testid="logo" />
                    <div className="company">
                        Contribution type:
                    </div>
                    <div className="position">
                        <p data-testid="datatype">{data.type}</p>
                    </div>
                    <DepositValues
                        amount={data.amount}
                        date={data.date}
                    />
                </div>
            </div>
        </div>
    );
};


export default DepositComponent;