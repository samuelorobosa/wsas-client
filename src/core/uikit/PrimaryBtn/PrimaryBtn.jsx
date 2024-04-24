/* eslint-disable react/prop-types */
import './PrimaryBtn.css';

export default function PrimaryBtn({ text, type = "submit" }) {
  return (
    <button className="primary-btn" type={type}>{text}</button>
  )
}