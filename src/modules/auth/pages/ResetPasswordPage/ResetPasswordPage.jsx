/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../../core/assets/logo.jpeg';
import { routeNames } from '../../../../core/navigation/routenames';
import {
  LoadingStates,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../../../core/toolkit/helpers';
import { PrimaryBtn, SquareCard } from '../../../../core/uikit';
import { resetPasswordThunk } from '../../authThunks';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import './ResetPasswordPage.css';

export default function ResetPasswordPage() {
  const [captcha, setCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [otp, setOtp] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  const { reset_password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const openPage = useNavigate();
  const userEmail = getFromLocalStorage('userEmail');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
  });

  useEffect(() => {
    if (reset_password.loading === LoadingStates.fulfilled) {
      setLoading(false);
      toast.success('Password successfully reset!');
      removeFromLocalStorage('userEmail');
      openPage(routeNames.dashboard);
    } else if (reset_password.loading === LoadingStates.rejected) {
      setLoading(false);
      console.log(reset_password.error.response?.data?.errorMessage);
      toast.error(
        reset_password.error?.response?.data?.errorMessage ||
          'Failed to reset password. Please try again.',
      );
    }
  }, [reset_password.loading]);

  const validationRules = {
    required: 'This field is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long',
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    },
  };

  const handleCaptchaUpdate = (value) => {
    setCaptcha(value);
  };

  const onSubmit = (data) => {
    const { password } = data;
    setLoading(true);
    dispatch(resetPasswordThunk({ password, token: otp }));
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
            <p className="form-label">Reset your password</p>
            <p className="text-base text-[#666] text-start mx-0 mb-0">
              Please enter the OTP sent to {userEmail}
            </p>
            <div className="flex justify-center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle="otp-input2"
                isInputNum={true}
                skipDefaultStyles={true}
                className="otp-input-custom"
                renderInput={(props) => (
                  <input {...props} type="number" pattern="\d*" />
                )}
              />
            </div>

            <div>
              <div className="input-group">
                <input
                  className="input-group-input"
                  type={!passwordIsVisible ? 'password' : 'text'}
                  placeholder="Password"
                  name="password"
                  {...register('password', {
                    required: validationRules.required,
                    minLength: validationRules.minLength,
                    pattern: validationRules.pattern,
                  })}
                />
                <figure
                  className="input-suffix-icon"
                  onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                >
                  {passwordIsVisible ? <FaEye /> : <FaEyeSlash />}
                </figure>
              </div>
              <div className="input-error">
                {errors.password && <span>{errors.password.message}</span>}
              </div>
            </div>

            <CaptchaInput
              onChange={handleCaptchaUpdate}
              isCorrect={isAnswerCorrect}
            />

            <div className="spacer" />
            <PrimaryBtn
              text="Reset password"
              type="submit"
              disabled={loading || !captcha}
              isLoading={loading}
            />
            <p className="alternate-auth">
              Don't have an account?
              <a href="/register">Register</a>
            </p>
          </form>
        </SquareCard>
      </center>
    </div>
  );
}
