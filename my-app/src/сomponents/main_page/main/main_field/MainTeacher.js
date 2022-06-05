import React from "react";
import style from "./MainTeacher.module.scss"
import foto1 from "./../../../../foto/Yura.png"
import foto2 from "./../../../../foto/Andriy.png"
import foto3 from "./../../../../foto/Oleksandr1.jpg"
import foto4 from "./../../../../foto/Oleksandr2.png"

export const MainTeacher = () =>{
    return(
    <div className={style.main_block}>
        <h3 className={style.main_text}>Викладачі</h3>
        <div className={style.teacher_block}>
            <img className={style.photo} src = {foto1} alt = "Yura"></img>
            <div className={style.box}>
                <h3 className={style.box_name}>Юра</h3>
                <p className={style.box_text}>Незрозумілий хлопчина, який чомусь відвідує усі наші лекції, перевіряє наші домашки, а своїх не скидає. Він напевно дуже любить з кимось спілкуватись, бо він постійно говорить, щоб ми до нього писали, щось запитували.</p>
            </div>
        </div>
        <div className={style.teacher_block}>
            <img className={style.photo} src = {foto2} alt = "Andriy"></img>
            <div className={style.box}>
                <h3 className={style.box_name}>Андрій</h3>
                <p className={style.box_text}>Йому випала історична роль зачинателя нової програмістської "еліти", або простими словами, як Андрій вирішив набрати групку людей і зародити в них зерно програмістської науки. </p>
            </div>
        </div>
        <div className={style.teacher_block}>
            <img className={style.photo} src = {foto3} alt = "Andriy"></img>
            <div className={style.box}>
                <h3 className={style.box_name}>Олександр</h3>
                <p className={style.box_text}>Олександр перший. Він же джаваскріптовий поводир, він же ся скала, він же наш "Kata"вальник, він же як колишня, ніби кинула нас, але все ще деколи пише, що хоче почати все спочатку. </p>
            </div>
        </div>
        <div className={style.teacher_block}>
            <img className={style.photo} src = {foto4} alt = "Andriy"></img>
            <div className={style.box}>
                <h3 className={style.box_name}>Олександр</h3>
                <p className={style.box_text}>Олександр другий. Цей Олександр ще не розблокований. Щоб відрити цього персонажа, потрібно пройти ще декілька React рівнів.</p>
            </div>
        </div>
    </div>)
}