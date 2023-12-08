/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import {useState} from "react";

export default function LoginPage() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const suffixIconTheme = { color: '#495057' };
  const dispatch = useDispatch();
  const openRoute = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    const passwordsMatch = confirmPasswordsMatch();
    console.log(passwordsMatch);
  }

  function confirmPasswordsMatch(first, second) {
    return first === second;
  }

  function openSignup() {
    openRoute(routeNames.register);
  }

  function openResetPassword() {
    openRoute(routeNames.resetPassword);
  }

  return (
    <div className="login-page">
      <center>
        <div className="logo-box">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
          <h1 className="auth-page-heading">We<b>Shop</b>And<strong>Ship</strong></h1>
        </div>
        <SquareCard>
          <form className="login-form" onSubmit={submitForm} method="post">
            <p className="form-label">Sign in to your account</p>
            <InputGroup
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Password"
              name="password"
              suffixIcon={passwordIsVisible ? <FaEye /> : <FaEyeSlash /> }
              suffixIconTheme={suffixIconTheme}
              obscureText={!passwordIsVisible}
              onTapSuffix={() => setPasswordIsVisible(!passwordIsVisible)}
            />
            <CaptchaInput />
            <div className="forgot-password-wrap">
              <button onClick={openResetPassword} className="forgot-password">Forgot password?</button>
            </div>
            <PrimaryBtn text="Login" />
            <p className="alternate-auth">Don't have an account?
              <button onClick={openSignup}>Register</button>
            </p>
          </form>
        </SquareCard>
      </center>
    </div>
  )
}
