import { FaEnvelope, FaEye, FaEyeSlash, FaPhone, FaUser } from 'react-icons/fa';
import {
  CustomSelectField,
  InputGroup,
  PrimaryBtn,
  SquareCard,
} from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './RegistrationPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import { useEffect, useState } from 'react';
import { getCountriesThunk } from '../../authThunks.js';

export default function RegistrationPage() {
  const [firstPasswordVisible, setFirstPasswordVisible] = useState(false);
  const [secondPasswordVisible, setSecondPasswordVisible] = useState(false);
  const { countries } = useSelector((state) => state.auth);
  const suffixIconTheme = { color: '#495057' };
  const countryOptions = countries.map(({ name, cioc }) => ({
    name,
    value: cioc,
  }));
  const dispatch = useDispatch();
  const openPage = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    const passwordsMatch = confirmPasswordsMatch();
    console.log(passwordsMatch);
  }

  function confirmPasswordsMatch(first, second) {
    return first === second;
  }

  function openLogin() {
    openPage(routeNames.login);
  }

  useEffect(() => {
    const data = {
      fields: 'name,cioc',
    };
    dispatch(getCountriesThunk(data));
  }, []);

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
          <form className="reg-form" onSubmit={submitForm} method="post">
            <p className="form-label">Create a new account</p>
            <InputGroup
              placeholder="First Name"
              name="firstName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Last Name"
              name="lastName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Username"
              name="username"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Password"
              name="password"
              suffixIcon={firstPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              suffixIconTheme={suffixIconTheme}
              obscureText={!firstPasswordVisible}
              onTapSuffix={() => setFirstPasswordVisible(!firstPasswordVisible)}
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
            />
            <CustomSelectField options={countryOptions} />
            <InputGroup
              placeholder="Phone Number"
              name="phoneNumber"
              suffixIcon={<FaPhone />}
              suffixIconTheme={suffixIconTheme}
            />
            <CaptchaInput />
            <div className="t-and-c">
              <input
                className="checkbox"
                type="checkbox"
                id="agreedToTerms"
                name="agreedToTerms"
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
