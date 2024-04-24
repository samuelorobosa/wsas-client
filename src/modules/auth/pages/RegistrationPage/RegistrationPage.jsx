import { FaEnvelope, FaEye, FaEyeSlash, FaPhone, FaUser } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './RegistrationPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import { useEffect, useState } from 'react';
import { getCountriesThunk } from '../../authThunks.js';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

export default function RegistrationPage() {
  const [captcha, setCaptcha] = useState(false);
  const [firstPasswordVisible, setFirstPasswordVisible] = useState(false);
  const [secondPasswordVisible, setSecondPasswordVisible] = useState(false);
  const { countries } = useSelector((state) => state.auth);
  const suffixIconTheme = { color: '#495057' };
  const countryOptions = countries.map(({ name, value }) => ({
    label: name,
    value,
  }));

  const dispatch = useDispatch();
  const openPage = useNavigate();

  function openLogin() {
    openPage(routeNames.login);
  }

  useEffect(() => {
    const data = {
      fields: 'name,cioc',
    };
    dispatch(getCountriesThunk(data));
  }, []);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: {
        label: '',
        value: '',
      },
      phoneNumber: '',
    },
  });

  const handleCaptchaUpdate = (value) => {
    setCaptcha(value);
  };

  const onSubmit = (data) => {
    window.alert(
      JSON.stringify({
        data,
        captcha,
      }),
    );
  };

  return (
    <div className="registration-page">
      <center>
        <div className="logo-box">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
          <h1 className="auth-page-heading">
            We<b>Shop</b>And<strong>Ship</strong>
          </h1>
        </div>
        <SquareCard>
          <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-label">Create a new account</p>
            <InputGroup
              placeholder="First Name"
              name="firstName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
              register={register}
            />
            <InputGroup
              placeholder="Last Name"
              name="lastName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
              register={register}
            />
            <InputGroup
              placeholder="Username"
              name="username"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
              register={register}
            />
            <InputGroup
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
              register={register}
            />
            <InputGroup
              placeholder="Password"
              name="password"
              suffixIcon={firstPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              suffixIconTheme={suffixIconTheme}
              obscureText={!firstPasswordVisible}
              onTapSuffix={() => setFirstPasswordVisible(!firstPasswordVisible)}
              register={register}
            />
            <InputGroup
              placeholder="Confirm Password"
              name="confirmPassword"
              suffixIcon={secondPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              suffixIconTheme={suffixIconTheme}
              obscureText={!secondPasswordVisible}
              onTapSuffix={() =>
                setSecondPasswordVisible(!secondPasswordVisible)
              }
              register={register}
            />
            {countryOptions && (
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Select a country"
                    isClearable={false}
                    isSearchable={false}
                    options={countryOptions}
                    unstyled={true}
                    classNames={{
                      container: (state) => 'react-select-select-container',
                      control: (state) => 'react-select-control',
                      menuList: (state) => 'react-select-menu-list',
                      menu: (state) => 'react-select-menu',
                      option: (state) => 'react-select-option',
                      singleValue: (state) => 'react-select-single-value',
                    }}
                  />
                )}
              />
            )}

            <InputGroup
              placeholder="Phone Number"
              name="phoneNumber"
              suffixIcon={<FaPhone />}
              suffixIconTheme={suffixIconTheme}
              register={register}
            />
            <CaptchaInput onChange={handleCaptchaUpdate} />
            <div className="t-and-c">
              <input
                {...register('termsAndConditions')}
                className="checkbox"
                type="checkbox"
              />
              <label htmlFor="agreedToTerms" className="checkbox-label">
                {'I agree to the '}
                <span>
                  <a href="#">terms and conditions</a>
                </span>
              </label>
            </div>
            <PrimaryBtn text="Register" />
            <p className="alternate-auth">
              Already have an account?
              <button onClick={openLogin}>Login</button>
            </p>
          </form>
        </SquareCard>
      </center>
    </div>
  );
}
