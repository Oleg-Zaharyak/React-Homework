import React from "react";

export const NumberList = ({ count, ratingChange, checkedValue }) => (
  <ul>
    {Array.from({ length: count }, (a, k) => (
      <li key={k}>
        <input
          type="radio"
          name="radio"
          id={k}
          value={k + 1}
          onChange={ratingChange}
          checked={checkedValue === k + 1}
        />
        <label htmlFor={k}> {k + 1} </label>
      </li>
    ))}
  </ul>
);
