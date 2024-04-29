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
import { PrimaryBtn, SquareCard } from '../../../../core/uikit';
import {
  LoadingStates,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../../../core/toolkit/helpers';
import { toast } from 'react-toastify';
import { routeNames } from '../../../../core/navigation/routenames';

export default function VerifyEmailPage() {
  const dispatch = useDispatch();
  const openPage = useNavigate();
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const { user } = useSelector((state) => state.auth);

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

  useEffect(() => {
    if (user.loading === LoadingStates.fulfilled) {
      console.log(user);
      toast.success('Email verified successfully!');
      // openPage(routeNames.dashboard)
    } else if (user.loading === LoadingStates.rejected) {
      toast.error('Failed to verify email. Please try again.');
    }
  }, [user.loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = getFromLocalStorage('userEmail');
    console.log(email);

    console.log(otp);
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
                //   separator={<span>-</span>}
                isInputNum={true}
                renderInput={(props) => (
                  <input {...props} type="number" pattern="\d*" />
                )}
              />
            </div>

            <PrimaryBtn type="submit" text="Submit" disabled={!otp} />
          </form>
        </div>
      </center>
    </div>
  );
}
