import React from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main"
import {LogIn} from "./logIn/LogIn"
// import {FeedbackBlock} from "./FeedbackBlock/FeedbackBlock"

export const MainComponent = ()=>{
    return (
        <div>
           {/* <FeedbackBlock/> */}
           <LogIn/>
           <Header/>
           <Main/>
           <Footer/> 
        </div>  
    )
}