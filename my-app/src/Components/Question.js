import React, { useState } from "react";



export const Question = (props) => {
  
  const NumberList = (props) => {
    const value = props.count;
    const arr = Array.from({ length: props.count }, (_, k) =>
      <li key = {k+1}>
        <input type="radio" name="radio"  id = {k+1}  defaultChecked = {value === k + 1}/>
        <label htmlFor={k+1}>{k+1} </label> 
      </li>
    ); 
    return <ul>{arr}</ul>;
  };
  
 
  const [output, setOutput] = useState([{number: "", textFeed: ""}])
  const [triger, setTriger] = useState(true)

  const target = (event) =>{
    let targ = event.target.value;
    if (targ !== null){
     setTriger(false);
    }
    else{
     setTriger(true);
    }
  }
 

  const sendFeedback = ()=> {
      setTriger(true);
      let text = document.getElementById("input").value;
      let res = document.querySelector("[checked]").id;
      setOutput([...output,{ number: res, textFeed: text } ])
      }
      
  const Feedback = () => {
    return (
      <div>
        <input id = "input" type="text"  onChange={target}  placeholder="Write your feedback" />
        <button disabled = {triger} onClick={sendFeedback} >Send feedback</button>
      </div>
    );
  };

  const TextFeedback = ()=>{
    return output.map(elem=>(
      <h3 key = {elem.number} >{elem.number}  {elem.textFeed}</h3>)
    )
  }


  return (
    <div className="flexDiv">
      <h2>How would you rate our cours?</h2>
      <NumberList count={10}/>
      <Feedback />
      <TextFeedback/>
    </div>
  );  
};
