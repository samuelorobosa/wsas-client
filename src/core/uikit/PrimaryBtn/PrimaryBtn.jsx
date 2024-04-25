/* eslint-disable react/prop-types */
import './PrimaryBtn.css';

export default function PrimaryBtn({ text, type = 'submit', disabled }) {
  return (
    <button className="primary-btn" type={type} disabled={disabled}>
      {text}
    </button>
  );
}
