import './PaySupplier.css';
import {useState} from "react";
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import Button from "../../../../core/uikit/Button/Button.jsx";
export default function PaySupplier() {
    const suppliersCatgories = [
        { name: 'Pay Supplier', key: 'paysupplier' },
        { name: 'Processing', key: 'processing' },
        { name: 'Pending Order', key: 'pendingorder' },
        { name: 'Processed', key: 'processed' },
        { name: 'Received', key: 'received' },
        { name: 'Shipped', key: 'shipped' },
    ]

    const [currentTabIdx, setTabIdx] = useState(0);
  return (
      <>
          <nav className="appbar">
              <h1 className="appbar-title">Pay Supplier</h1>
          </nav>
          <section className="pay-supplier-content">
              {/*<ul className="supplier-tab-state">*/}
              {/*    {*/}
              {/*        suppliersCatgeories.map(({name}, idx) => (*/}
              {/*            <li key={uuid()} className={`tab ${name}`}>*/}
              {/*                <button*/}
              {/*                    onClick={() => setTabIdx(idx)}*/}
              {/*                    className={`supplier-tab-btn ${currentTabIdx === idx && 'active'}`}*/}
              {/*                >*/}
              {/*                    {name}*/}
              {/*                </button>*/}
              {/*            </li>*/}
              {/*        ))*/}
              {/*    }*/}
              {/*</ul>*/}
              <form className="pay-supplier-form" action="">
                  <div className="form-group">
                      <label htmlFor="amount">Supplier's Name</label>
                      <InputGroupAlt
                          name="supplier_name"
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="amount">Phone Number</label>
                      <InputGroupAlt
                          name="phone_number"
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="amount">Amount</label>
                      <InputGroupAlt
                          name="amount"
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="amount">Content</label>
                      <InputGroupAlt
                          name="content"
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="amount">Account Number</label>
                      <InputGroupAlt
                          name="account_number"
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
                          text="Place Order"
                          type="primary"/>
                  </div>
              </form>

              <PaySupplier.PaymentHistory/>
          </section>
      </>
  )
}


PaySupplier.PaymentHistory = () => {
    return (
        <section className="pay__supplier__payment__history">
            <table>
                <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Supplier Name</th>
                    <th>Phone Number</th>
                    <th>Amount Paid</th>
                    <th>Content</th>
                    <th>Account Number</th>
                    <th>Sort Code</th>
                    <th>Total(+3%)</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-label="S/N">xxxx</td>
                    <td data-label="Supplier Name">John Doe</td>
                    <td data-label="Phone Number">247383993</td>
                    <td data-label="Amount Paid">$100</td>
                    <td data-label="Content">XYZ Bank</td>
                    <td data-label="Account Number">234678901</td>
                    <td data-label="Sort Code">234672</td>
                    <td data-label="Total(+3%)">$103</td>
                    <td data-label="Status">Pending</td>
                </tr>
                <tr>
                    <td data-label="S/N">xxxx</td>
                    <td data-label="Supplier Name">John Doe</td>
                    <td data-label="Phone Number">247383993</td>
                    <td data-label="Amount Paid">$100</td>
                    <td data-label="Content">XYZ Bank</td>
                    <td data-label="Account Number">234678901</td>
                    <td data-label="Sort Code">234672</td>
                    <td data-label="Total(+3%)">$103</td>
                    <td data-label="Status">Pending</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}
