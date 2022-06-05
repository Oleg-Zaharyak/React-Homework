import React from "react";
import style from "./ButtonFeedback.module.scss"

export const ButtonFeedback = ({ feedbackText, onclick }) => {
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
  