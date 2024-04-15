/* eslint-disable react/prop-types */
import { IconContext } from 'react-icons';
import './InputGroup.css';

export default function InputGroup({
  name,
  obscureText = false,
  onTapSuffix = () => {},
  placeholder,
  suffixIcon,
  suffixIconTheme = { color: '#777' },
}) {
  return (
    <div className="input-group">
      <input
        className="input-group-input"
        type={obscureText ? 'password' : 'text'}
        placeholder={placeholder}
        name={name}
      />
      <figure className="input-suffix-icon" onClick={onTapSuffix}>
        <IconContext.Provider value={suffixIconTheme}>
          {suffixIcon}
        </IconContext.Provider>
      </figure>
    </div>
  );
}
