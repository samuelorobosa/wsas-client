/* eslint-disable react/display-name */
import { useState } from 'react';
import './ProfilePage.css';
import {FaEye, FaEyeSlash, FaUser} from "react-icons/fa";
import userProfile from '../../../../core/assets/user_profile.svg';
import {InputGroup} from "../../../../core/uikit/index.js";
import {MdEmail} from "react-icons/md";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function ProfilePage() {
  const [editMode, enableEditMode] = useState(false);
  const [name] = useState('John Doe');
  const [email] = useState('johndoe@gmail.com');
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
        <h1 className="appbar-title">Edit Profile</h1>
      </nav>
      <main className="profile-page">
         <aside className="actions__section">
            <div className="edit">
                <FaUser/>
                <span>Edit Profile</span>
            </div>
         </aside>
          <aside className="content__section">
              <header>
                  Edit Profile
              </header>
              <section className="content__section__body">
                    <div className="user__profile">
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
                                    country='us'
                                    value={phone}
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
                    </form>
              </section>
          </aside>
      </main>
    </>
  )
}

ProfilePage.EditableForm = () => {
  return (
    <div className="form-wrap">
      <form action="" className="profile-form">
        <div className="form-group-input">
          <label htmlFor=""></label>
          <div className="">
            <figure>
              <img src="" alt="" />
            </figure>
            <input type="text" />
          </div>
        </div>
      </form>
      <div className="actions">
        <button className="cancel">Cancel</button>
        <button className="save">Save Changes</button>
      </div>
    </div>
  )
}

ProfilePage.NonEditableForm = () => {
  return (
    <div className="form-wrap">
      <div action="" className="profile-form">
        <div className="form-group-input">
          <label htmlFor=""></label>
          <div className="">
            <figure>
              <img src="" alt="" />
            </figure>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="edit">Edit Profile</button>
      </div>
    </div>
  )
}
