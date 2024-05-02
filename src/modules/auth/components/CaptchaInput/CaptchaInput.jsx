/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './CaptchaInput.css';
import useSWR from 'swr';
import captchaService from '../../services/captcha-service';

export default function CaptchaInput({ onChange }) {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(true);

  const fetchCaptchaData = async () => {
    const captchaObject = captchaService.genCaptcha();
    setAnswer(captchaObject.result);
    parseQuestion(captchaObject);
    return captchaObject;
  };

  const { data, error, isLoading } = useSWR('captchaData', fetchCaptchaData);

  function parseQuestion(captchaObj) {
    const { firstInput, secondInput, operator } = captchaObj;
    const question = `${firstInput} ${operator} ${secondInput} = ?`;
    setQuestion(question);
  }

  function handleChange(e) {
    const inputValue = Number(e.target.value);
    if (!isNaN(inputValue) && answer !== null && inputValue === answer) {
      setIsCorrect(true);
      onChange && onChange(true);
    } else {
      setIsCorrect(false);
      onChange && onChange(false);
    }
  }

  return (
    <div>
      <div className="robot-input">
        <div className="robot-label-wrap">
          <p className="robot-label">{question ?? ''}</p>
        </div>
        <input
          placeholder="Enter the answer"
          className="answer-input"
          type="text"
          name="captcha"
          onInput={handleChange}
        />
      </div>
      <div className="robot-error">
        {!isCorrect && <p>Incorrect answer. Please try again.</p>}
      </div>
    </div>
  );
}
