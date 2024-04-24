import './TransactionHistory.css'
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import {CustomSelectField} from "../../../../core/uikit/index.js";
import { FaSearch } from "react-icons/fa";
export default function TransactionHistory(){
    return (
        <>
            <nav className="appbar">
                <h1 className="appbar-title">Transaction History</h1>
            </nav>
            <section className="filter__section">
                <InputGroupAlt name="search"
                 suffixIcon={<FaSearch/>}
                 placeholder="Search"
                />
                <CustomSelectField
                    placeholder="Status"
                    options={[
                        {
                            name: "All",
                            value: "all"
                        },
                        {
                            name: "Credit",
                            value: "credit"
                        },
                        {
                            name: "Debit",
                            value: "debit"
                        },
                    ]}/>
            </section>
            <table className="transaction__history">
                <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Current</th>
                    <th>Initial</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Reference</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-label="TrxID">xxxx</td>
                    <td data-label="Current">$2.5</td>
                    <td data-label="Initial">$8.88</td>
                    <td data-label="Amount">$7.6</td>
                    <td data-label="Type">Credit</td>
                    <td data-label="Reference">Credited a certain amount</td>
                    <td data-label="Date">2023-xx-xx</td>
                </tr>
                <tr>
                    <td data-label="TrxID">xxxx</td>
                    <td data-label="Current">$2.5</td>
                    <td data-label="Initial">$8.88</td>
                    <td data-label="Amount">$7.6</td>
                    <td data-label="Type">Credit</td>
                    <td data-label="Reference">Credited a certain amount</td>
                    <td data-label="Date">2023-xx-xx</td>
                </tr>
                <tr>
                    <td data-label="TrxID">xxxx</td>
                    <td data-label="Current">$2.5</td>
                    <td data-label="Initial">$8.88</td>
                    <td data-label="Amount">$7.6</td>
                    <td data-label="Type">Credit</td>
                    <td data-label="Reference">Credited a certain amount</td>
                    <td data-label="Date">2023-xx-xx</td>
                </tr>
                <tr>
                    <td data-label="TrxID">xxxx</td>
                    <td data-label="Current">$2.5</td>
                    <td data-label="Initial">$8.88</td>
                    <td data-label="Amount">$7.6</td>
                    <td data-label="Type">Credit</td>
                    <td data-label="Reference">Credited a certain amount</td>
                    <td data-label="Date">2023-xx-xx</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
