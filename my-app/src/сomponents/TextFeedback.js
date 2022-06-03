import React from "react";
import style from "./TextFeedback.module.scss";

export const TextFeedback = ({ output }) => {
  return output.map((elem) => (
    <div key = {elem.number + Date.now()+ elem.textFeed} className={style.feedbck_field}>
      <span className={style.feedback_number_text} >
        {elem.number}
      </span>
      <p  className={style.feedback_text}>
        {elem.textFeed}
      </p> 
    </div>
  ));
};
