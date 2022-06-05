import React, { useState } from "react";
import style from "./Feedback.module.scss";
import { NumberList } from "./NamberList";
import { TextFeedback } from "./TextFeedback";
import {ButtonFeedback} from "./ButtonFeedback";

export const Feedback = () => {
  const [name, setName] = useState("");
  const [checkedValue, setCheckedValue] = useState(10);
  const [feedbackText, setFeedbackText] = useState("");
  const [output, setOutput] = useState([]);
  
  const ratingChange = (event) => {
    const result = +event.currentTarget.value;
    setCheckedValue(result);
  };

  const onChange = (event) => {
    const result = event.target.value;
    setFeedbackText(result);
  };

  const onClick = () => {
     
    setOutput([...output, { number: checkedValue, textFeed: feedbackText,name: name }]);
    setCheckedValue(10);
    setFeedbackText("");
    setName(document.getElementById("Name").innerHTML);
    document.getElementById("Feedback").style.display = "none";
  };

  const onClickButton = () => {
    
    const disable = document.getElementById("Name").innerHTML
    if (disable !== ""){
        document.getElementById("Feedback").style.display = "block";
    }
    if(disable === ""){
        document.getElementById("push").style.display = "block";
        setTimeout(()=> document.getElementById("push").style.display = "none", 1500)
    }
    
  };
  return (
    <div className={style.block}>
      <div className={style.block_one} id="Feedback">
        <div className={style.container}>
          <h3 className={style.text}>Залиште відгук</h3>
          <NumberList
            count={10}
            ratingChange={ratingChange}
            checkedValue={checkedValue}
          />
          <input
            value={feedbackText}
            className={style.input}
            onChange={onChange}
          />
          <ButtonFeedback feedbackText={feedbackText} onclick={onClick} />
        </div>
      </div>
      <div>
         <TextFeedback output={output}  name = {name}/>
      </div>
      <div id = "push" className={style.push}>
        <p>Щоб залишити відгук, увійдіть на сайт</p>
      </div>
      <button  className={style.button} onClick={onClickButton}>
        Залишити відгук
      </button>
    </div>
  );
};
