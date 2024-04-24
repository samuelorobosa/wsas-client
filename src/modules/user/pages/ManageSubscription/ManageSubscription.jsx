import './ManageSubscription.css';
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import {CustomSelectField} from "../../../../core/uikit/index.js";
import Button from "../../../../core/uikit/Button/Button.jsx";
export default function ManageSubscription() {
    return (
        <>
            <nav className="appbar">
                <h1 className="appbar-title">Manage Subscription</h1>
            </nav>
            <section className="manage__subscription__form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="amount">
                            How many months?
                        </label>
                        <CustomSelectField
                            placeholder="How many months subscription?"
                            options={[
                                {
                                    name: "1 month",
                                    value: "1"
                                },
                                {
                                    name: "3 months",
                                    value: "3"
                                },
                                {
                                    name: "6 months",
                                    value: "6"
                                },
                                {
                                    name: "12 months",
                                    value: "12"
                                },
                            ]}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">
                            Subscription Type?
                        </label>
                        <CustomSelectField
                            placeholder="Select Subscription Type"
                            options={[
                                {
                                    name: "Procurement",
                                    value: "procurement"
                                },
                            ]}/>
                    </div>
                    <div className="form-group">
                        <Button
                            theme="btn-main"
                            text="Submit"
                            type="primary"/>
                    </div>
                </form>
            </section>
        </>
    );
}
