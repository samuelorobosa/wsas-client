import { FaEnvelope, FaEye, FaEyeSlash, FaPhone, FaUser } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import captchaService from '../../services/captcha-service';
import logo from '../../../../core/assets/logo.jpeg';
import './RegistrationPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import { useEffect, useState } from 'react';
import { getCountriesThunk } from '../../authThunks.js';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { toast } from 'react-toastify';
import InputGroupAlt from '../../../../core/uikit/InputGroupAlt/InputGroupAlt';

export default function RegistrationPage() {
  const [captcha, setCaptcha] = useState(false);
  const [firstPasswordVisible, setFirstPasswordVisible] = useState(false);
  const [secondPasswordVisible, setSecondPasswordVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  const [answer, setAnswer] = useState(null);
  const [defaultCountry] = useState({ value: 'NGR', label: 'Nigeria' });
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
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: {
        label: 'Nigeria',
        value: 'NGR',
      },
      phoneNumber: '',
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

  const isTermsAndConditions = watch('termsAndConditions');

  const handleCaptchaUpdate = (value) => {
    console.log(value);
    setCaptcha(value);
  };

  function handleCaptchaChange(value) {
    console.log(value);
  }

  const onSubmit = (data) => {
    // window.alert(
    //   JSON.stringify({
    //     data,
    //     captcha,
    //   }),
    // );

    console.log(data);
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match. Please check your input.');
      return;
    }

    console.log('success');
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
              // {...register('firstName', { required: validationRules.required })}
              register={(name, rules) =>
                register(name, { required: validationRules.required })
              }
              errorMessage={errors.firstName ? errors.firstName.message : ''}
            />

            <InputGroup
              placeholder="Last Name"
              name="lastName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
              register={(name, rules) =>
                register(name, { required: validationRules.required })
              }
              errorMessage={errors.lastName ? errors.lastName.message : ''}
            />

            <InputGroup
              placeholder="Username"
              name="username"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
              register={(name, rules) =>
                register(name, { required: validationRules.required })
              }
              errorMessage={errors.username ? errors.username.message : ''}
            />

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

            {/* <InputGroup
              placeholder="Password"
              name="password"
              suffixIcon={firstPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              suffixIconTheme={suffixIconTheme}
              obscureText={!firstPasswordVisible}
              onTapSuffix={() => setFirstPasswordVisible(!firstPasswordVisible)}
              register={...register('password', {
                required: validationRules.required,
                pattern: validationRules.pattern,
              })}
              errorMessage={errors.password ? errors.password.message : ''}
              required
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
              register={...register('confirmPassword', {
                required: validationRules.required,
                pattern: validationRules.pattern,
              })}
              errorMessage={errors.password ? errors.password.message : ''}
              required
            /> */}

            {countryOptions && (
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <Select
                    {...field}
                    isClearable={false}
                    isSearchable={true}
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
              register={(name, rules) =>
                register(name, { required: validationRules.required })
              }
              errorMessage={
                errors.phoneNumber ? errors.phoneNumber.message : ''
              }
            />
            <CaptchaInput
              onChange={handleCaptchaUpdate}
              isCorrect={isAnswerCorrect}
            />
            <div className="robot-error">
              {!isAnswerCorrect && <p>Incorrect answer. Please try again.</p>}
            </div>
            <div className="t-and-c">
              <input
                {...register('termsAndConditions')}
                className="checkbox"
                type="checkbox"
                required
              />
              <label htmlFor="agreedToTerms" className="checkbox-label">
                {'I agree to the '}
                <span>
                  <a href="#">terms and conditions</a>
                </span>
              </label>
            </div>
            <PrimaryBtn
              type="submit"
              text="Register"
              // disabled={isSubmitting || !captcha || !isTermsAndConditions}
            />
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
