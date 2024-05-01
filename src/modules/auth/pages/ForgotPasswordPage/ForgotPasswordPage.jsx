/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './ForgotPasswordPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { routeNames } from '../../../../core/navigation/routenames';
import { useEffect, useState } from 'react';
import {
  LoadingStates,
  saveToLocalStorage,
} from '../../../../core/toolkit/helpers';
import { forgotPasswordThunk } from '../../authThunks';
import { toast } from 'react-toastify';

export default function ForgotPasswordPage() {
  const suffixIconTheme = { color: '#495057' };
  const [captcha, setCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  const { forgot_password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const openPage = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const userEmail = watch('email');

  useEffect(() => {
    if (forgot_password.loading === LoadingStates.fulfilled) {
      setLoading(false);
      toast.success('An OTP has been sent to your email!');
      saveToLocalStorage('userEmail', userEmail);
      openPage(routeNames.resetPassword);
    } else if (forgot_password.loading === LoadingStates.rejected) {
      setLoading(false);
      console.log(forgot_password.error?.response);
      toast.error(
        forgot_password.error?.response?.data?.errorMessage ||
          'Something went wrong. Please try again.',
      );
    }
  }, [forgot_password.loading]);

  const validationRules = {
    required: 'This field is required',
    emailValidation: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  };

  const handleCaptchaUpdate = (value) => {
    setCaptcha(value);
  };

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(forgotPasswordThunk(data));
  };

  function openSignup() {
    openRoute(routeNames.register);
  }

  return (
    <div className="reset-password-page">
      <center>
        <div className="logo-box">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
          <h1 className="auth-page-heading">
            We<b>Shop</b>And<strong>Ship</strong>
          </h1>
        </div>
        <SquareCard>
          <form
            className="reset-password-form"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <p className="form-label">Enter email to reset password</p>
            <InputGroup
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
              register={(name, rules) =>
                register(name, {
                  required: validationRules.required,
                  pattern: validationRules.emailValidation,
                })
              }
              errorMessage={errors.email ? errors.email.message : ''}
            />
            <CaptchaInput
              onChange={handleCaptchaUpdate}
              isCorrect={isAnswerCorrect}
            />
            <div className="spacer" />
            <PrimaryBtn
              text="Submit"
              type="submit"
              disabled={loading || !captcha}
              isLoading={loading}
            />
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
