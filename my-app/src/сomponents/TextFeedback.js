import React from "react";

export const TextFeedback = ({ output }) => {
  return output.map((elem) => (
    <p key={elem.textFeed}>
      {elem.number} - {elem.textFeed}
    </p>
  ));
};
