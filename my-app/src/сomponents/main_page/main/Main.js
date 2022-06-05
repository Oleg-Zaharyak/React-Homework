import React from "react";
import style from "./Main.module.scss"
import {MainMenu} from "./main_menu/MainMenu"
import {MainField} from "./main_field/MainField"
import {MainTeacher} from "./main_field/MainTeacher"
import {MainCourse} from "./main_field/MainCourse"
import {MainCompany} from "./main_field/MainCompany"
import {Feedback} from "./main_field/Feedback/Feedback"
import { Route, Routes } from "react-router-dom";

export const Main = ()=>{
    return (<div className={style.main_container}>
        <MainMenu/>
        <Routes>
            <Route path="/" element = {<MainField/>}/>
            <Route path="/teacher" element = {<MainTeacher/>}/>
            <Route path="/about_course" element = {<MainCourse/>}/>
            <Route path="/about_company" element = {<MainCompany/>}/>
            <Route path="/feedback" element = {<Feedback/>}/>
        </Routes>
        
    </div>)
}