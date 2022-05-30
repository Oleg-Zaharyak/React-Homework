import React, { useState } from "react";

export const Question = () => {
  const [checkedValue, setCheckedValue] = useState(10);
  const [feedbackText, setFeedbackText] = useState("");
  const [output, setOutput] = useState([]);

  const NumberList = ({ count }) => 
    <ul>{ Array.from({ length: count }, (a, k) => (
      <li key={k}>
        <input
          type="radio"
          name="radio"
          id={k}
          value={k + 1}
          onChange={ratingChange}
          checked={checkedValue === k + 1}
        />
        <label htmlFor={k}> {k + 1} </label>
      </li>
    ))}</ul>;
  

  const ratingChange = (event) => {
    const result = +event.currentTarget.value;
    setCheckedValue(result);
  };

  const fieldInput = (event) => {
    const result = event.currentTarget.value;
    setFeedbackText(result);
  };

  const sendFeedback = () => {
    setOutput([...output, { number: checkedValue, textFeed: feedbackText }]);
    setCheckedValue(10);
    setFeedbackText("");
  };
  
  const Feedback = () => {
    return (
      <div>
        <input
          id="input"
          type="text"
          value={feedbackText}
          onChange={fieldInput}
          placeholder="Write your feedback"
        />
        <button disabled={!feedbackText} onClick={sendFeedback}>
          Send feedback
        </button>
      </div>
    );
  };

  const TextFeedback = () => {
    return output.map((elem) => (
      <p key={elem.textFeed}>
        {elem.number} - {elem.textFeed}
      </p>
    ));
  };

  return (
    <div className="flexDiv">
      <h2>How would you rate our cours?</h2>
      <NumberList count={10} />
      <Feedback />
      <TextFeedback />
    </div>
  );
};
