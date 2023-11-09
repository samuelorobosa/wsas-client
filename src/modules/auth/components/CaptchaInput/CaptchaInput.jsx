/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './CaptchaInput.css';
import captchaService from '../../services/captcha-service';

export default function CaptchaInput({ onChange }) {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const captchaObject = captchaService.genCaptcha()
    setAnswer(captchaObject.result);
    parseQuestion(captchaObject);
  }, []);

  function parseQuestion(captchaObj) {
    const { firstInput, secondInput, operator } = captchaObj;
    const question = `${firstInput} ${operator} ${secondInput} = ?`;
    setQuestion(question);
  }

  function handleChange(e) {
    if (answer && e.target.value === answer) {
      onChange(true);
    } else {
      onChange(false);
    }
  }

  return (
    <div className="robot-input">
      <div className="robot-label-wrap">
        <p className="robot-label">{question ?? ''}</p>
      </div>
      <input placeholder="Enter the answer" className="answer-input" type="text" name="captcha" onInput={handleChange} />
    </div>
  )
}