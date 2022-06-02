import React from "react";

export const Feedback = ({ feedbackText, onclick }) => {
  return (
    <button disabled={!feedbackText} onClick={onclick}>
      Send feedback
    </button>
  );
};
