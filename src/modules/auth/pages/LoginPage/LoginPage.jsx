/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginThunk } from '../../authThunks';
import {
  LoadingStates,
  saveToLocalStorage,
} from '../../../../core/toolkit/helpers';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [captcha, setCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  const suffixIconTheme = { color: '#495057' };
  const { login_user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const openPage = useNavigate();

  const profileRoute = {
    dashboard: {
      profile: '/dashboard/profile',
    },
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

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
    emailValidation: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  };

  const handleCaptchaUpdate = (value) => {
    setCaptcha(value);
  };

  useEffect(() => {
    if (login_user.loading === LoadingStates.fulfilled) {
      setLoading(false);
      toast.success('Login successful!');
      console.log(login_user.response);
      saveToLocalStorage('userToken', login_user.response?.data?.token);
      openPage(profileRoute.dashboard.profile);
    } else if (login_user.loading === LoadingStates.rejected) {
      setLoading(false);
      console.log(login_user.error?.response?.data?.errorMessage);
      toast.error(
        login_user.error?.response?.data?.errorMessage ||
          'Failed to login. Please try again.',
      );
    }
  }, [login_user.loading]);

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(loginThunk(data));
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
            <div className="robot-error">
              {!isAnswerCorrect && <p>Incorrect answer. Please try again.</p>}
            </div>

            <div className="forgot-password-wrap">
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <PrimaryBtn
              type="submit"
              text="Login"
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
