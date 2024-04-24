import './ShippingAddressBook.css';
import {useState} from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import Button from "../../../../core/uikit/Button/Button.jsx";

export const dummyAddresses = [
    {
        key: 1,
        phone: '+234 000 000 0000',
        address: 'No 1, John Doe Street, Lagos, Nigeria',
        postalCode: '100001'
    },
    {
        key: 2,
        phone: '+234 000 000 0000',
        address: 'No 1, John Doe Street, Lagos, Nigeria',
        postalCode: '100001'
    },
    {
        key: 3,
        phone: '+234 000 000 0000',
        address: 'No 1, John Doe Street, Lagos, Nigeria',
        postalCode: '100001'
    },
    {
        key: 4,
        phone: '+234 000 000 0000',
        address: 'No 1, John Doe Street, Lagos, Nigeria',
        postalCode: '100001'
    },
]
export default function ShippingAddressBook() {
    const [activeAddress, setActiveAddress] = useState(1); // [1, 2, 3, 4]
    const [addresses, setAddresses] = useState(dummyAddresses);
    const [showForm, setShowForm] = useState(false);
    const deleteAddress = (key) => {
        setAddresses(addresses.filter(({key: addressKey}) => addressKey !== key));
    }
    return (
        <>
            <nav className="appbar">
                <h1 className="appbar-title">Shipping Address Book</h1>
            </nav>
            <section className="shipping-address-content">
                <div className="shipping__addresses__container">
                    <div onClick={()=> setShowForm(!showForm)} className="shipping__addresses__container__header">
                        <FaPlus />
                        <span> Add New Address</span>
                    </div>
                    <div className="shipping__addresses__container__body">
                        {
                            addresses.map(({name, key, phone, address, postalCode}) => (
                                <div onClick={()=>setActiveAddress(key)}
                                     key={key} className={`shipping__address__item ${activeAddress === key && 'active'}`}>
                                    <div onClick={()=>deleteAddress(key)} className="delete__icon">
                                        <MdDelete size={20} />
                                    </div>
                                    <div className="shipping__address__item__body">
                                        <p>{phone}</p>
                                        <p>{address}</p>
                                        <p>{postalCode}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    showForm && <ShippingAddressBook.AddNewAddress />
                }
            </section>
        </>
    )
}


ShippingAddressBook.AddNewAddress = () => {
    return (
        <form className="add-new-address-form" action="">
            <div className="form-group">
                <label htmlFor="amount">Receiver's Address</label>
                <InputGroupAlt
                    name="receiever_address"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">City</label>
                <InputGroupAlt
                    name="city"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Post Code</label>
                <InputGroupAlt
                    name="post_code"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Country</label>
                <InputGroupAlt
                    name="country"
                />
            </div>
            <div className="form-group">
                <Button
                    theme="btn-main"
                    text="Add Address"
                    type="primary"/>
            </div>
        </form>
    )
}
