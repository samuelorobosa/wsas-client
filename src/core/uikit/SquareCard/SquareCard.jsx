/* eslint-disable react/prop-types */
import './SquareCard.css';

export default function SquareCard({ children }) {
  return (
    <div className="square-card">{children}</div>
  )
}