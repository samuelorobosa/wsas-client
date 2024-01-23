import './WithdrawFunds.css'
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import Button from "../../../../core/uikit/Button/Button.jsx";
import {CustomSelectField} from "../../../../core/uikit/index.js";
import {useState} from "react";
export default function WithdrawFunds () {
    const [activeTab, setActiveTab] = useState('ngnBank');
    const tabRef = [
        {
            key: 1,
            name: 'ngnBank',
            tabContent: 'Nigerian Bank Account'
        },
        {
            key: 2,
            name: 'ukBank',
            tabContent: 'UK Bank Account'
        },
    ]

    return (
        <>
            <nav className="appbar">
                <h1 className="appbar-title">Withdraw Funds</h1>
            </nav>
            {/*Tabs goes here*/}
            <div className="tabs">
                {
                    tabRef.map(({ name, tabContent }) => (
                        <button
                            key={name}
                            className={activeTab === name ? 'active' : ''}
                            onClick={() => setActiveTab(name)}
                        >
                            {tabContent}
                        </button>
                    ))
                }
            </div>
            {/*Tabs goes here*/}

            {/*Tab content goes here*/}
            {
                activeTab === 'ngnBank' && <WithdrawFunds.ngnBank/>
            }
            {
                activeTab === 'ukBank' && <WithdrawFunds.ukBank/>
            }
            {/*Tab content goes here*/}


        </>
    )
}


WithdrawFunds.PaymentHistoryNgnBank = () => {
    return (
        <table className="payment__history">
            <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Account Number</th>
                <th>Bank Name</th>
                <th>Account Name</th>
                <th>Total Amount</th>
                <th>Amount to Receive</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="TrxID">xxxx</td>
                <td data-label="Account Number">023267XXXX</td>
                <td data-label="Bank Name">Kuda Bank</td>
                <td data-label="Account Name">John Doe</td>
                <td data-label="Total Amount">20,000</td>
                <td data-label="Amount to Receive">19,600</td>
                <td data-label="Status">Pending</td>
            </tr>
            <tr>
                <td data-label="TrxID">xxxx</td>
                <td data-label="Account Number">023267XXXX</td>
                <td data-label="Bank Name">Kuda Bank</td>
                <td data-label="Account Name">John Doe</td>
                <td data-label="Total Amount">20,000</td>
                <td data-label="Amount to Receive">19,600</td>
                <td data-label="Status">Pending</td>
            </tr>
            </tbody>
        </table>
    )
}

WithdrawFunds.ngnBank = () => {
    return (
        <>
            <section className="withdraw_funds_form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="account_name">Account Name</label>
                        <InputGroupAlt
                            name="account_name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="account_number">Account Number</label>
                        <InputGroupAlt
                            name="account_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">
                            Preferred Bank
                        </label>
                        <CustomSelectField
                            placeholder="Select Bank"
                            options={[
                                {
                                    name: "Zenith Bank",
                                    value: "zenith"
                                },
                            ]}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <InputGroupAlt
                            name="amount"
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            theme="btn-main"
                            text="Submit"
                            type="primary"/>
                    </div>
                </form>
            </section>

            <WithdrawFunds.PaymentHistoryNgnBank/>
        </>
    )
}


WithdrawFunds.PaymentHistoryUkBank = () => {
    return (
        <table className="payment__history">
            <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Account Number</th>
                <th>Sort Code</th>
                <th>Account Name</th>
                <th>Total Amount</th>
                <th>Amount to Receive</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="TrxID">xxxx</td>
                <td data-label="Account Number">023267XXXX</td>
                <td data-label="Bank Name">Kuda Bank</td>
                <td data-label="Account Name">John Doe</td>
                <td data-label="Total Amount">20,000</td>
                <td data-label="Amount to Receive">19,600</td>
                <td data-label="Status">Pending</td>
            </tr>
            <tr>
                <td data-label="TrxID">xxxx</td>
                <td data-label="Account Number">023267XXXX</td>
                <td data-label="Bank Name">Kuda Bank</td>
                <td data-label="Account Name">John Doe</td>
                <td data-label="Total Amount">20,000</td>
                <td data-label="Amount to Receive">19,600</td>
                <td data-label="Status">Pending</td>
            </tr>
            </tbody>
        </table>
    )
}

WithdrawFunds.ukBank = () => {
    return (
        <>
            <section className="withdraw_funds_form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="amount">Account Number</label>
                        <InputGroupAlt
                            name="account_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Account Number</label>
                        <InputGroupAlt
                            name="account_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <InputGroupAlt
                            name="amount"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Sort Code</label>
                        <InputGroupAlt
                            name="sort_code"
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            theme="btn-main"
                            text="Submit"
                            type="primary"/>
                    </div>
                </form>
            </section>

            <WithdrawFunds.PaymentHistoryUkBank/>
        </>
    )
}
