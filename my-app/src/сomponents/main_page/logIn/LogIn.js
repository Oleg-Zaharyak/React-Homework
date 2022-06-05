import React, { useState } from "react";
import style from "./LogIn.module.scss"

export const LogIn = () =>{
    const [text, setText] = useState("");
  
    const onChange = (event) => {
      const result = event.target.value;
      setText(result);
    };
    const elem = document.getElementById("Name");
    const butt = document.getElementById("butt")
    const onClick = () => {
      elem.innerHTML =  text;
      setText("");
      butt.innerHTML = "Log out"
      document.getElementById("block2").style.display = "none";

    };

    return (
    <div className= {style.block} id = "block2" >
        <div className={style.container}>
            <h3 className={style.text}>Введіть ім'я</h3>
            <input value={text} type= "text" className = {style.input} onChange = {onChange}/>
            <button className={style.button} onClick = {onClick}>Send</button>
        </div>
    </div>)
}