/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const [captcha, setCaptcha] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const suffixIconTheme = { color: '#495057' };
  const dispatch = useDispatch();
  const openRoute = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleCaptchaUpdate = (value) => {
    setCaptcha(value);
  };

  function openSignup() {
    openRoute(routeNames.register);
  }

  function openResetPassword() {
    openRoute(routeNames.resetPassword);
  }

  const onSubmit = (data) => {
    window.alert(
      JSON.stringify({
        data,
        captcha,
      }),
    );
  };

  return (
    <div className="login-page">
      <center>
        <div className="logo-box">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
          <h1 className="auth-page-heading">
            We<b>Shop</b>And<strong>Ship</strong>
          </h1>
        </div>
        <SquareCard>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-label">Sign in to your account</p>
            <InputGroup
              register={register}
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              register={register}
              placeholder="Password"
              name="password"
              suffixIcon={passwordIsVisible ? <FaEye /> : <FaEyeSlash />}
              suffixIconTheme={suffixIconTheme}
              obscureText={!passwordIsVisible}
              onTapSuffix={() => setPasswordIsVisible(!passwordIsVisible)}
            />
            <CaptchaInput onChange={handleCaptchaUpdate} />
            <div className="forgot-password-wrap">
              <button onClick={openResetPassword} className="forgot-password">
                Forgot password?
              </button>
            </div>
            <PrimaryBtn text="Login" />
            <p className="alternate-auth">
              Don't have an account?
              <button onClick={openSignup}>Register</button>
            </p>
          </form>
        </SquareCard>
      </center>
    </div>
  );
}
