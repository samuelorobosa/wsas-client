/* eslint-disable react/prop-types */
import { ClipLoader } from 'react-spinners';
import './PrimaryBtn.css';

export default function PrimaryBtn({
  text,
  type = 'submit',
  isLoading,
  disabled,
}) {
  return (
    <button className="primary-btn" type={type} disabled={disabled}>
      {!isLoading ? (
        <span>{text}</span>
      ) : (
        <ClipLoader
          color="#fff"
          loading={isLoading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </button>
  );
}
