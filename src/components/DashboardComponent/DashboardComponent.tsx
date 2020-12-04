import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { withRouter, RouteComponentProps } from "react-router";


import { ReactComponent as Logo } from '../Images/bg-header-desktop.svg';
import './DashboardComponent.scss';
import auth from '../../auth'



const DashboardComponent: React.FC<RouteComponentProps> = (props) => {

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
    const initial_state: DepositData = {
        initial_deposit: "",
        created_at: "",
        profile: {
            dateOfBirth: "",
            desiredAgeOfRetirement: "",
            minimumDesiredPensionSize: ""
        },
        transactions: []
    }


    const [listing, setListing] = useState<DepositData>(initial_state)

    useEffect(() => {
        axios.get<DepositData>('https://run.mocky.io/v3/655398ab-9865-4aad-8c27-b86917a1d21d')
            .then(({ data }) => {
                setListing(data)
            })
    }, [])
    return (
        <Fragment>
            <header>
                <Logo />
            </header>
            <main>
                <div className="content">
                    <div data-testid="text" className="logout" onClick={() => {
                        auth.logout(() => {
                            props.history.push("/");
                        });
                    }}> Logout</div>
                    {listing && listing.transactions.map((value, index) => {
                        return <div></div>
                    })}
                </div>
            </main>
        </Fragment>
    );
}

export default withRouter(DashboardComponent);