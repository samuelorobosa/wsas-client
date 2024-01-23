import './RequestShipping.css';
import {Fragment} from "react";
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import Button from "../../../../core/uikit/Button/Button.jsx";
export default function RequestShipping() {
    return (
        <Fragment>
            <nav className="appbar">
                <h1 className="appbar-title">Request Shipping</h1>
            </nav>
            <section className="request__shipping__content">
                <form className="request__shipping__form" action="">
                    <div className="form-group">
                        <label htmlFor="receiver_name">Receiver's Name</label>
                        <InputGroupAlt
                            name="receiver_name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <InputGroupAlt
                            name="phone_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="receiver_address">Receiver's Address</label>
                        <InputGroupAlt
                            name="receiver_address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <InputGroupAlt
                            name="city"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post_code">Post Code</label>
                        <InputGroupAlt
                            name="post_code"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <InputGroupAlt
                            name="country"
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            theme="btn-main"
                            text="Request Shipping"
                            type="primary"/>
                    </div>
                </form>
            </section>
        </Fragment>
    );
}
