import React, { useState } from "react";
import { TextFeedback } from "./TextFeedback";
import { Feedback } from "./Feedback";
import { NumberList } from "./NumberList";

export const Question = () => {
  const [checkedValue, setCheckedValue] = useState(10);
  const [feedbackText, setFeedbackText] = useState("");
  const [output, setOutput] = useState([]);

  const ratingChange = (event) => {
    const result = +event.currentTarget.value;
    setCheckedValue(result);
  };

  const fieldInput = (event) => {
    const result = event.target.value;
    setFeedbackText(result);
  };

  const sendFeedback = () => {
    setOutput([...output, { number: checkedValue, textFeed: feedbackText }]);
    setCheckedValue(10);
    setFeedbackText("");
  };

  return (
    <div className="flexDiv">
      <h2>How would you rate our cours?</h2>
      <NumberList
        count={10}
        ratingChange={ratingChange}
        checkedValue={checkedValue}
      />
      <div>
        <input
          id="input"
          type="text"
          value={feedbackText}
          onChange={fieldInput}
          placeholder="Write your feedback"
        />
        <Feedback feedbackText={feedbackText} onclick={sendFeedback} />
      </div>

      <TextFeedback output={output} />
    </div>
  );
};
