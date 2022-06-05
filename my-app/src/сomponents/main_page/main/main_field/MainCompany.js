import React from "react";
import style from "./MainCompany.module.scss"
import foto from "./../../../../foto/united.jpg"

export const MainCompany = () =>{
    return (
    <div className={style.foto_block}>
        <img className={style.foto} src = {foto} alt = "company foto"></img>
    </div>)
}