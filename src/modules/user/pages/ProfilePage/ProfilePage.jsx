/* eslint-disable react/display-name */
import { useState, useEffect } from 'react';
import './ProfilePage.css';
import { FaGlobe, FaHome, FaUser } from 'react-icons/fa';
import userProfile from '../../../../core/assets/user_profile.svg';
import { InputGroup } from '../../../../core/uikit/index.js';
import { MdEmail } from 'react-icons/md';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../../../../core/uikit/Button/Button.jsx';
import { IoIosSwap, IoMdNotificationsOutline } from 'react-icons/io';
import Modal from '../../../../core/uikit/Modal/Modal.jsx';
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler.js';
import { editProfileThunk, getProfileThunk } from '../../profileThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingStates } from '../../../../core/toolkit/helpers';
import Skeleton from 'react-loading-skeleton';
import { useForm } from 'react-hook-form';

export default function ProfilePage() {
  const [editMode, enableEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { get_profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const openPage = useNavigate();
  const openModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (get_profile.loading === LoadingStates.fulfilled) {
      setLoading(false);
      const response = get_profile.response.data;
      setUserData(response);
      setName(`${response.firstname} ${response.lastname}`);
      setEmail(response.email);
      setUsername(response.username);
      setCountry(response.country);
      setUserId(response.id);
      setPhoneNumber(response.phone);
    } else if (get_profile.loading === LoadingStates.rejected) {
      setLoading(false);
      console.log(get_profile.error);
    }
  }, [get_profile.loading]);

  useEffect(() => {
    setLoading(true);
    dispatch(getProfileThunk());
  }, []);

  return (
    <>
      <nav className="appbar">
        <h1 className="appbar-title">User Profile</h1>
      </nav>

      {<ProfilePage.ExchangeRateSection />}

      <main className="profile-page">
        <aside className="content__section">
          <header>
            <span>{editMode ? 'Edit Profile' : 'Personal Information'}</span>
            <figure onClick={() => openModal()}>
              <IoMdNotificationsOutline size={30} />
            </figure>
            <Modal open={modalOpen} className="profile__notification__modal">
              <OutsideClickHandler
                onOutsideClick={() => {
                  setModalOpen(false);
                }}
              >
                <div className="notification__item">
                  <figure>
                    <img src={userProfile} alt="user__image" />
                  </figure>
                  <aside>
                    <p>
                      Zaynab Azzahra recommended this online store to buy
                      electronics
                    </p>
                    <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
                </div>
                <div className="notification__item">
                  <figure>
                    <img src={userProfile} alt="user__image" />
                  </figure>
                  <aside>
                    <p>
                      Zaynab Azzahra recommended this online store to buy
                      electronics
                    </p>
                    <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
                </div>
              </OutsideClickHandler>
            </Modal>
          </header>
          <section className="content__section__body">
            <div className="user__profile">
              <div className="user__profile__left">
                <figure className="user__profile__image">
                  <img src={userProfile} alt="User Profile Image" />
                </figure>
                <div className="user__profile__content">
                  <div className="user__profile__content__name">
                    {name || <Skeleton height={20} width={150} />}
                  </div>
                  <div className="user__profile__content__email">
                    {email || <Skeleton height={20} width={150} />}
                  </div>
                </div>
              </div>
              <div className="user__profile__right">
                <div className="user__profile__right__actions">
                  <Button
                    text={editMode ? 'Cancel' : 'Edit Profile'}
                    theme="btn-main"
                    type="button"
                    onClick={() => enableEditMode(!editMode)}
                  />
                </div>
              </div>
            </div>
            {editMode ? (
              <ProfilePage.EditableForm userData={userData} />
            ) : (
              <ProfilePage.NonEditableForm userData={userData} />
            )}
          </section>
        </aside>
      </main>
    </>
  );
}

ProfilePage.EditableForm = ({ userData }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      username: userData?.username,
      email: userData?.email,
      country: userData?.country,
      phone: userData?.phone,
      address: userData?.address,
    },
  });

  const onSubmit = (formData) => {
    setLoading(true);
    console.log(formData);

    dispatch(editProfileThunk(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="form__sections">
        <div className="form-group-input">
          <InputGroup
            name="firstname"
            suffixIcon={<FaUser />}
            suffixIconTheme={{ color: '#B0B7C3' }}
            register={(name) => register(name)}
          />
        </div>
        <div className="form-group-input">
          <InputGroup
            name="lastname"
            suffixIcon={<FaUser />}
            suffixIconTheme={{ color: '#B0B7C3' }}
            register={(name) => register(name)}
          />
        </div>
      </section>
      <section className="form__sections">
        <div className="form-group-input">
          <InputGroup
            name="email"
            suffixIcon={<MdEmail />}
            suffixIconTheme={{ color: '#B0B7C3' }}
            register={(name) => register(name)}
          />
        </div>
        <div className="form-group-input">
          <PhoneInput
            country="ng"
            name="phone"
            register={(name) => register(name)}
          />
        </div>
      </section>
      <section className="form__sections">
        <div className="form-group-input">
          <InputGroup
            name="username"
            suffixIcon={<FaUser />}
            suffixIconTheme={{ color: '#B0B7C3' }}
            register={(name) => register(name)}
          />
        </div>
        <div className="form-group-input">
          <InputGroup
            name="address"
            suffixIcon={<FaHome />}
            suffixIconTheme={{ color: '#B0B7C3' }}
            register={(name) => register(name)}
          />
        </div>
      </section>
      <section className="form__sections">
        <div className="form-group-input">
          <InputGroup
            name="country"
            suffixIcon={<FaGlobe />}
            suffixIconTheme={{ color: '#B0B7C3' }}
            register={(name) => register(name)}
          />
        </div>
      </section>
      <section className="form__final">
        <Button theme="btn-main" type="submit" text="Save Changes" />
      </section>
    </form>
  );
};

ProfilePage.NonEditableForm = ({ userData }) => {
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
            <span>
              {userData?.firstname || <Skeleton height={20} width={150} />}
            </span>
            <span>
              {userData?.phone || <Skeleton height={20} width={150} />}
            </span>
            <span>
              {userData?.username || <Skeleton height={20} width={150} />}
            </span>
            <span>
              {userData?.email || <Skeleton height={20} width={150} />}
            </span>
            <span>{userData?.id || <Skeleton height={20} width={150} />}</span>
            <span>
              {userData?.country || <Skeleton height={20} width={150} />}
            </span>
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
  );
};

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
  );
};
