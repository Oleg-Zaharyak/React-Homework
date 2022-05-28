import React from "react";

const NumberList = (props) => {
  const arr = Array.from({ length: props.count }, (_, k) => k + 1); 
  const list = arr.map((numb,index) => (
    <li key = {index}>
      <input type="radio" name="radio" /> {numb}
    </li>
  ));
  return <ul>{list}</ul>;
};

const Feedback = () => {
  return (
    <div>
      <input type="text" placeholder="Write your feedback" />
      <button>Send feedback</button>
    </div>
  );
};

export const Question = (props) => {
  return (
    <div className="flexDiv">
      <h2>How would you rate our cours?</h2>
      <NumberList count={10} />
      <Feedback />
    </div>
  );
};
