import { FaEnvelope, FaEye, FaEyeSlash, FaPhone, FaUser } from 'react-icons/fa';
import { CustomSelectField, InputGroup, PrimaryBtn, SquareCard } from '../../../../core/uikit';
import CaptchaInput from '../../components/CaptchaInput/CaptchaInput';
import logo from '../../../../core/assets/logo.jpeg';
import './RegistrationPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFirstPasswordVisibility, toggleSecondPasswordVisiblity } from '../../state/registration-slice';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../../../core/navigation/routenames';

export default function RegistrationPage() {
  const suffixIconTheme = { color: '#495057' };
  const countryOptions = [
    { name: 'Nigeria', value: 'ng' },
    { name: 'United Kingdom', value: 'uk' },
  ];
  const dispatch = useDispatch();
  const { firstPasswordVisible, secondPasswordVisible } = useSelector((state) => state.registration);
  const openPage = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    const passwordsMatch = confirmPasswordsMatch();
    console.log(passwordsMatch);
  }

  function confirmPasswordsMatch(first, second) {
    return first === second;
  }

  function openLogin() {
    openPage(routeNames.login);
  }

  return (
    <div className="registration-page">
      <center>
        <div className="logo-box">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
          <h1 className="auth-page-heading">We<b>Shop</b>And<strong>Ship</strong></h1>
        </div>
        <SquareCard>
          <form className="reg-form" onSubmit={submitForm} method="post">
            <p className="form-label">Create a new account</p>
            <InputGroup
              placeholder="Full Name"
              name="fullName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
            />
            {/* <InputGroup
              placeholder="Last Name"
              name="lastName"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Username"
              name="username"
              suffixIcon={<FaUser />}
              suffixIconTheme={suffixIconTheme}
            /> */}
            <InputGroup
              placeholder="Email"
              name="email"
              suffixIcon={<FaEnvelope />}
              suffixIconTheme={suffixIconTheme}
            />
            <InputGroup
              placeholder="Password"
              name="password"
              suffixIcon={firstPasswordVisible ? <FaEye /> : <FaEyeSlash /> }
              suffixIconTheme={suffixIconTheme}
              obscureText={!firstPasswordVisible}
              onTapSuffix={() => dispatch(toggleFirstPasswordVisibility())}
            />
            <InputGroup
              placeholder="Confirm Password"
              name="confirmPassword"
              suffixIcon={secondPasswordVisible ? <FaEye /> : <FaEyeSlash /> }
              suffixIconTheme={suffixIconTheme}
              obscureText={!secondPasswordVisible}
              onTapSuffix={() => dispatch(toggleSecondPasswordVisiblity())}
            />
            <CustomSelectField options={countryOptions} />
            <InputGroup
              placeholder="Phone Number"
              name="phoneNumber"
              suffixIcon={<FaPhone />}
              suffixIconTheme={suffixIconTheme}
            />
            <CaptchaInput />
            <div className="t-and-c">
              <input className="checkbox" type="checkbox" id="agreedToTerms" name="agreedToTerms" />
              <label htmlFor="agreedToTerms" className="checkbox-label">
                {'I agree to the '}
                <span>
                  <a href='#'>terms and conditions</a>
                </span>
              </label>
            </div>
            <PrimaryBtn text="Register" />
            <p className="alternate-auth">Already have an account?
              <button onClick={openLogin}>Login</button>
            </p>
          </form>
        </SquareCard>
      </center>
    </div>
  )
}