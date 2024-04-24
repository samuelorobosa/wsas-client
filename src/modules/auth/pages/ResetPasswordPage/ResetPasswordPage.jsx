/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './ResetPasswordPage.css';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';

export default function ResetPasswordPage() {
  const suffixIconTheme = { color: '#495057' };
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

  return (
    <div className="reset-password-page">
      <center>
        <div className="logo-box">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
          <h1 className="auth-page-heading">We<b>Shop</b>And<strong>Ship</strong></h1>
        </div>
        <SquareCard>
          <form className="reset-password-form" onSubmit={submitForm} method="post">
            <p className="form-label">Reset your password</p>
            <InputGroup
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
            />
            <CaptchaInput />
            <div className="spacer" />
            <PrimaryBtn text="Reset password" />
            <p className="alternate-auth">Don't have an account?
              <button onClick={openSignup}>Register</button>
            </p>
          </form>
        </SquareCard>
      </center>
    </div>
  )
}