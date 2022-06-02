import React from "react";
import style from "./Header.module.scss"

export const Header = (props) => {
    return <h1 className={style.h1}>Feedback project from United Software by {props.name}</h1>;
  };