import './RequestExpressCourierService.css';
import {Fragment} from "react";
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import Button from "../../../../core/uikit/Button/Button.jsx";
export default function RequestExpressCourierService() {
    return (
        <Fragment>
            <nav className="appbar">
                <h1 className="appbar-title">Request Express Courier Service</h1>
            </nav>
            <section className="express__courier__service__content">
                <form className="express__courier__service__form" action="">
                    <div className="form-group">
                        <label htmlFor="receiver_name">Shipper's Name</label>
                        <InputGroupAlt
                            name="shipper_name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <InputGroupAlt
                            name="phone_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="receiver_address">Shipper's Address</label>
                        <InputGroupAlt
                            name="shipper_address"
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
                        <label htmlFor="receiver_name">Shipment Content</label>
                        <InputGroupAlt
                            name="receiver_name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_number">Weight</label>
                        <InputGroupAlt
                            name="phone_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="receiver_address">Length</label>
                        <InputGroupAlt
                            name="length"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Width</label>
                        <InputGroupAlt
                            name="city"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post_code">Height</label>
                        <InputGroupAlt
                            name="post_code"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Value of Shipment</label>
                        <InputGroupAlt
                            name="country"
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            theme="btn-main"
                            text="Request Courier Service"
                            type="primary"/>
                    </div>
                </form>
            </section>
        </Fragment>
    );
}
