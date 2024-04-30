/* eslint-disable react/prop-types */
import { IconContext } from 'react-icons';
import './InputGroupAlt.css';

export default function InputGroupAlt({
  name,
  obscureText = false,
  onChange,
  onTapSuffix = () => {},
  placeholder,
  suffixIcon,
  suffixIconTheme = { color: '#777' },
  ...rest
}) {
  return (
    <div className="input-group-alt">
      <input
        className="input-group-input"
        type={obscureText ? 'password' : 'text'}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...rest}
      />
      <figure className="input-suffix-icon" onClick={onTapSuffix}>
        <IconContext.Provider value={suffixIconTheme}>
          {suffixIcon}
        </IconContext.Provider>
      </figure>
    </div>
  );
}
