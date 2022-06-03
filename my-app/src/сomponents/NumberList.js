import React from "react";
import style from "./NumberList.module.scss";

export const NumberList = ({ count, ratingChange, checkedValue }) => (
  <ul className={style.list}>
    {Array.from({ length: count }, (a, k) => (
      <li key={k} className={style.list_item}>
        <input
          className={style.item_radio}
          type="radio"
          name="radio"
          id={k}
          value={k + 1}
          onChange={ratingChange}
          checked={checkedValue === k + 1}
        />
        <label className={style.item_radio_text} htmlFor={k}> {k + 1} </label>
      </li>
    ))}
  </ul>
);
