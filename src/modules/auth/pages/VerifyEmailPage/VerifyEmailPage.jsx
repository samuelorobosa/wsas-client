import { useState } from 'react';
import { useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../core/assets/logo.jpeg';
import { PrimaryBtn, SquareCard } from '../../../../core/uikit';
import '../../../../core/uikit/InputGroup/InputGroup.css';
import { verifyEmailThunk } from '../../authThunks.js';
import '../RegistrationPage/RegistrationPage.css';
import './VerifyEmailPage.css';

export default function VerifyEmailPage() {
  const dispatch = useDispatch();
  const openPage = useNavigate();
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

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

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(otp);
    dispatch(verifyEmailThunk({ otp }));
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
          <form className="reg-form" onSubmit={onSubmit}>
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

            <PrimaryBtn type="submit" text="Submit" disabled={!otp} />
          </form>
        </SquareCard>
      </center>
    </div>
  );
}
