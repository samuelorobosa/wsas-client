/* eslint-disable react/display-name */
import { useState } from 'react';
import './ProfilePage.css';

export default function ProfilePage() {
  const [editMode, enableEditMode] = useState(false);
  const [name] = useState('John Doe');
  const [email] = useState('johndoe@gmail.com');

  return (
    <>
      <nav className="appbar">
        <h1 className="appbar-title">Edit Profile</h1>
      </nav>
      <main className="profile-page">
        <div className="name-listtile">
          <figure className="avatar-wrap">
            <img src="" alt="interesting things" className="avatar" />
            <div className="listtile-content">
              <h6 className="name">{name}</h6>
              <p className="email">{email}</p>
            </div>
          </figure>
        </div>
        <section className="info-content">
          {
            editMode ? <ProfilePage.EditableForm /> : <ProfilePage.NonEditableForm />
          }
        </section>
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