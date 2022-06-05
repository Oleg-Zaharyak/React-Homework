import React from "react";
import { Link } from "react-router-dom";
import style from "./MainMenu.module.scss"

export const MainMenu = ()=>{
    return (
        <div className={style.menu}>
            <ul className={style.list}>
                <li className={style.list_item}><Link className={style.link} to = "/">Головна</Link></li>
                <li className={style.list_item}><Link className={style.link} to = "/teacher">Викладачі</Link> </li>
                <li className={style.list_item}><Link className={style.link} to = "/about_course">Про курс</Link></li>
                <li className={style.list_item}><Link className={style.link} to = "/about_company">Про компанію</Link></li>
                <li className={style.list_item}><Link className={style.link} to = "/feedback">Відгуки</Link></li>
            </ul>
        </div>
    )
}