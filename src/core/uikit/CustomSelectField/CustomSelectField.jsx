/* eslint-disable react/prop-types */
import { useState } from 'react';
import './CustomSelectField.css';
import uuid from 'react-uuid';
import { FaChevronDown } from 'react-icons/fa';

export default function CustomSelectField({ options, onChange = () => {} }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function selectItem({ name, value }) {
    onChange(value);
    setSelectedOption({ name, value });
    setIsOpen(false);
  }

  return (
    <div className="custom-select-field">
      <div className="head">
        <button className={`select-btn ${selectedOption && 'selected'}`} onClick={() => setIsOpen((current) => !current)}>
          {selectedOption? selectedOption.name : 'Select Country'}
        </button>
        <div className={`icon-wrap ${isOpen && 'is-open'}`}>
          <FaChevronDown />
        </div>
      </div>
      {
        isOpen && (
          <div className="dropdown">
            <ul className="option-list">
              {
                options.map(({ name, value }) => (
                  <button
                    key={uuid()}
                    onClick={() => selectItem({ name, value })}
                    className="option-btn"
                  >
                    {name}
                  </button>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}