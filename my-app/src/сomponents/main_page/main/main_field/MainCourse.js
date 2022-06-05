import React from "react";
import style from "./MainCourse.module.scss";

export const MainCourse = () => {
  return (
    <div className={style.block_list}>
      <h3>На курсах ви навчитесь</h3>
      <ul className={style.list}>
          <li className={style.list_item}>HTML і CSS</li>
          <li className={style.list_item}>Scss і Sass</li>
          <li className={style.list_item}>Git</li>
          <li className={style.list_item}>JavaScript</li>
          <li className={style.list_item}>React</li>
      </ul>
    </div>
  );
};
 