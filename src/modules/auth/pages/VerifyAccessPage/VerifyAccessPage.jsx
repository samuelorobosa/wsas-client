import { FaEnvelope, FaEye, FaEyeSlash, FaPhone, FaUser } from 'react-icons/fa';
import { InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import '../RegistrationPage/RegistrationPage.css';
import '../../../../core/uikit/InputGroup/InputGroup.css';
import './VerifyAccessPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';
import { useEffect, useState } from 'react';
import { getCountriesThunk, registerUserThunk } from '../../authThunks.js';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
import OTPInput from 'react-otp-input';

export default function VerifyAccessPage() {
  const dispatch = useDispatch();
  const openPage = useNavigate();
  const [otp, setOtp] = useState();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: '',
    },
  });

  const onSubmit = async (formData) => {};

  const renderInput = (inputProps, index) => {
    const { onChange, ...rest } = inputProps;
    return (
      <input
        {...rest}
        onChange={(e) => {
          onChange(e.target.value);
          // You can add custom logic here if needed
        }}
      />
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
            <p className="form-label">Enter OTP sent to your email</p>

            <div>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle="otp-input"
                //   separator={<span>-</span>}
                isInputNum={true}
                renderInput={(props) => (
                  <input {...props} type="number" pattern="\d*" />
                )}
              />
            </div>

            <PrimaryBtn type="submit" text="Submit" disabled={isSubmitting} />
          </form>
        </SquareCard>
      </center>
    </div>
  );
}
