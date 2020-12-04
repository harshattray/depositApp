import React, { Fragment } from 'react';
import './DepositComponentStyles.scss';

interface UserDetailsProps {
    details: DepositData
}

interface DepositData {
    initial_deposit: string,
    created_at: string,
    profile: ProfileData,
    transactions: TransactionsData[]
}

interface ProfileData {
    dateOfBirth: string,
    desiredAgeOfRetirement: string,
    minimumDesiredPensionSize: string
}

interface TransactionsData {
    amount: string,
    date: string,
    type: string
}

const UserDetails: React.FC<UserDetailsProps> = ({ details }) => {

    return (
        <Fragment>
            <div className="user-details">
                <div>
                    <div className="position" data-testid="initialDeposit">
                        <p>Initial Deposit : {details.initial_deposit}</p>
                    </div>
                    <div className="position" data-testid="createdAt">
                        <p> Created At : {details.created_at}</p>
                    </div>
                    <div className="position" data-testid="dateOB">
                        <p>Date of Birth : {details.profile.dateOfBirth}</p>
                    </div>
                    <div className="position" data-testid="minPension">
                        <p>Desired Pension Size: {details.profile.minimumDesiredPensionSize}</p>
                    </div>
                    <div className="position" data-testid="ageofRet">
                        <p>Age of Retirement : {details.profile.desiredAgeOfRetirement}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserDetails;