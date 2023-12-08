/* eslint-disable react/display-name */
import { useState } from 'react';
import './ProfilePage.css';
import {FaEye, FaEyeSlash, FaUser} from "react-icons/fa";
import userProfile from '../../../../core/assets/user_profile.svg';
import {InputGroup} from "../../../../core/uikit/index.js";
import {MdEmail} from "react-icons/md";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from "../../../../core/uikit/Button/Button.jsx";
import {IoIosSwap} from "react-icons/io";

export default function ProfilePage() {
  const [editMode, enableEditMode] = useState(false);
  const [name] = useState('John Doe');
  const [email] = useState('johndoe@gmail.com');
  // const tab__actions = [
  //     "Edit Profile",
  //     "Preferences",
  //     "Security",
  //     "Linked Accounts",
  //     "Log Out"
  // ]
  return (
    <>
      <nav className="appbar">
        <h1 className="appbar-title">User Profile</h1>
      </nav>

        { <ProfilePage.ExchangeRateSection /> }

      <main className="profile-page">
          <aside className="content__section">
              <header>
                  {editMode ? "Edit Profile" : "Personal Information"}
              </header>
              <section className="content__section__body">
                    <div className="user__profile">
                        <div className="user__profile__left">
                            <figure className="user__profile__image">
                                <img src={userProfile} alt="User Profile Image"/>
                            </figure>
                            <div className="user__profile__content">
                                <div className="user__profile__content__name">
                                    {name}
                                </div>
                                <div className="user__profile__content__email">
                                    {email}
                                </div>
                            </div>
                        </div>
                        <div className="user__profile__right">
                            <div className="user__profile__right__actions">
                                <Button
                                    text={editMode ? "Cancel" : "Edit Profile"}
                                    theme="btn-main"
                                    type="button"
                                    onClick={() => enableEditMode(!editMode)}/>
                            </div>
                        </div>
                    </div>
                  {editMode ? <ProfilePage.EditableForm /> : <ProfilePage.NonEditableForm />}
              </section>
          </aside>
      </main>
    </>
  )
}

ProfilePage.EditableForm = () => {
    const [phone, setPhone] = useState('');
    const [firstPasswordVisible, setFirstPasswordVisibility] = useState(false);
    const [secondPasswordVisible, setSecondPasswordVisibility] = useState(false);
    const suffixIconTheme = { color: '#B0B7C3' };
    const toggleFirstPasswordVisibility = () => {
        setFirstPasswordVisibility(!firstPasswordVisible);
    }

    const toggleSecondPasswordVisibility = () => {
        setSecondPasswordVisibility(!secondPasswordVisible);
    }
  return (
      <form action="">
          <section className="form__sections">
              <div className="form-group-input">
                  <InputGroup
                      name="first_name"
                      onChange={()=>console.log(null)}
                      placeholder="Enter your first name"
                      suffixIcon={<FaUser />}
                      suffixIconTheme={{color: "#B0B7C3"}}/>
              </div>
              <div className="form-group-input">
                  <InputGroup
                      name="last__name"
                      onChange={()=>console.log(null)}
                      placeholder="Enter your last name"
                      suffixIcon={<FaUser />}
                      suffixIconTheme={{color: "#B0B7C3"}}/>
              </div>
          </section>
          <section className="form__sections">
              <div className="form-group-input">
                  <InputGroup
                      name="email"
                      onChange={()=>console.log(null)}
                      placeholder="Enter your email"
                      suffixIcon={<MdEmail />}
                      suffixIconTheme={{color: "#B0B7C3"}}/>
              </div>
              <div className="form-group-input">
                  <PhoneInput
                      country='ng'
                      value={phone}
                      placeholder="Enter your phone number"
                      onChange={phone => setPhone(phone)}
                  />
              </div>
          </section>
          <section className="form__sections">
              <div className="form-group-input">
                  <InputGroup
                      placeholder="Password"
                      name="password"
                      suffixIcon={firstPasswordVisible ? <FaEye /> : <FaEyeSlash /> }
                      suffixIconTheme={suffixIconTheme}
                      obscureText={!firstPasswordVisible}
                      onTapSuffix={() => toggleFirstPasswordVisibility()}
                  />
              </div>
              <div className="form-group-input">
                  <InputGroup
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      suffixIcon={secondPasswordVisible ? <FaEye /> : <FaEyeSlash /> }
                      suffixIconTheme={suffixIconTheme}
                      obscureText={!secondPasswordVisible}
                      onTapSuffix={() => toggleSecondPasswordVisibility()}
                  />
              </div>
          </section>
          <section className="form__final">
              <Button
                  theme="btn-main"
                  type="button"
                  text="Save Changes"/>
          </section>
      </form>
  )
}

ProfilePage.NonEditableForm = () => {
  return (
    <section className="non__editable__form">
      <div className="personal__information">
        <div className="header">PERSONAL INFORMATION</div>
          <div className="details__container">
              <p>
                  <span>Account Balance</span>
                  <span>Name</span>
                  <span>Contact Number</span>
                  <span>Username</span>
                  <span>Email</span>
                  <span>Account ID</span>
                  <span>Country</span>
              </p>
              <p>
                  <span>$0.71</span>
                  <span>John Doe</span>
                  <span>(201) 555-0124</span>
                  <span>Male</span>
                  <span>johndoe@gmail.com</span>
                  <span>1234567890</span>
                  <span>Nigeria</span>
              </p>
          </div>
      </div>
      <div className="shipping__address">
            <div className="header">SHIPPING ADDRESS</div>
          <div className="details__container">
              <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
              <div className="details__container__stats">
                  <div>
                      <span>150</span>
                      <span>Total Order</span>
                  </div>
                  <div>
                      <span>140</span>
                      <span>Completed</span>
                  </div>
                  <div>
                      <span>10</span>
                      <span>Cancelled</span>
                  </div>
              </div>
          </div>
        </div>
    </section>
  )
}


ProfilePage.ExchangeRateSection = () => {
  return (
    <section className="exchange__rate__section">
      <header>Today's exchange rate</header>
        <div className="exchange__rate__section__body">
            <div className="exchange__rate__section__body__left">
                <div className="exchange__rate__section__body__title">£</div>
                <div className="exchange__rate__section__body__value">1.00</div>
            </div>
            <div className="exchange__rate__section__body__center">
                <IoIosSwap />
            </div>
            <div className="exchange__rate__section__body__right">
                <div className="exchange__rate__section__body__title">₦</div>
                <div className="exchange__rate__section__body__value">450.00</div>
            </div>
        </div>
    </section>
  )
}
