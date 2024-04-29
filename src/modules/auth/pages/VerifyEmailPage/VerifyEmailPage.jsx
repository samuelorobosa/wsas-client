import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../core/assets/logo.jpeg';
import '../../../../core/uikit/InputGroup/InputGroup.css';
import { verifyEmailThunk } from '../../authThunks.js';
import '../RegistrationPage/RegistrationPage.css';
import './VerifyEmailPage.css';
import { PrimaryBtn } from '../../../../core/uikit';
import {
  getFromLocalStorage,
  LoadingStates,
  removeFromLocalStorage,
  saveToLocalStorage,
} from '../../../../core/toolkit/helpers';
import { toast } from 'react-toastify';

export default function VerifyEmailPage() {
  const dispatch = useDispatch();
  const openPage = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const { verify_email } = useSelector((state) => state.auth);

  useEffect(() => {
    if (verify_email.loading === LoadingStates.fulfilled) {
      setLoading(false);
      console.log(verify_email.response);
      toast.success('Email verification successful!');
      saveToLocalStorage('userToken', verify_email.response?.data?.token);
      openPage(routeNames.dashboard);
    } else if (verify_email.loading === LoadingStates.rejected) {
      setLoading(false);
      toast.error(
        verify_email.error?.response?.data?.errorMessage ||
          'Failed to verify email. Please try again.',
      );
      console.log(verify_email.error);
    }
  }, [verify_email.loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = getFromLocalStorage('userEmail');

    dispatch(verifyEmailThunk({ otp, email }));
    removeFromLocalStorage('userEmail');
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
        <div className="bg-white w-[500px] mb-4 mx-auto">
          <form className="reg-form" onSubmit={onSubmit}>
            <p className="form-label">Enter OTP sent to your email</p>

            <div className="flex justify-center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle="otp-input"
                isInputNum={true}
                renderInput={(props) => (
                  <input {...props} type="number" pattern="\d*" />
                )}
              />
            </div>

            <PrimaryBtn
              type="submit"
              text="Submit"
              disabled={!otp || loading}
              isLoading={loading}
            />
          </form>
        </div>
      </center>
    </div>
  );
}
