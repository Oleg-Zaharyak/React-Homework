import  React  from "react";
import style from "./Footer.module.scss"

export const Footer = (props) => (<h2 className={style.foter_text}>© Made by {props.name}</h2>);