import './Button.css';
export default function Button({ theme, text, type = "submit", onClick = () => {}  }) {
  return (
    <button onClick={onClick} className={`${theme} btn`} type={type}>{text}</button>
  )
}
