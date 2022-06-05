import React from "react";
import style from "./Header.module.scss";
import logo from './../../../color_logo.svg';

export const Header = () =>{


    const LogIn = ()=> {
        const butt = document.getElementById("butt")
        const elem = document.getElementById("Name");
         if (butt.innerHTML === 'Log In'){
             document.getElementById("block2").style.display = "block";
         }
         if (butt.innerHTML === "Log out"){
            butt.innerHTML = "Log In";
            elem.innerHTML = ""
        }

    }
    return (
        <div className={style.main_container}>
            <img src={logo} className={style.logo} alt="logo" />
            <h1 className={style.head_text}>United Software Academy</h1>
            <div className={style.head_left_block}>
                <p id = "Name" className={style.name}></p>
                <button id = "butt" className={style.button} onClick={LogIn}>Log In</button>
            </div>
            
        </div>
    )
}