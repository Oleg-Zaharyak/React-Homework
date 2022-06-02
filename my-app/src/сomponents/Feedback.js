import React from "react";
import style from "./Feedback.module.scss";

export const Feedback = ({ feedbackText, onclick }) => {
  return (
    <button
      className={style.feedback_button}
      disabled={!feedbackText}
      onClick={onclick}
    >
      Send
    </button>
  );
};
