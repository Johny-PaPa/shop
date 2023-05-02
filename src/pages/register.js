import React from "react";
import Header from '../Header/Header'
import "./login.css"
import Regu from "./log/regu";

function Register(){
    return(
        <>
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    < div className="container">
                        <ul className="sawe">
                            <h1 className="big">Личный кабинет</h1>
                            <h2 className="momo">Главная/Личный кабинет</h2>  
                        </ul>
                    </div>
            </section>
        </div>
        <div className="centr5">
            <Regu/>
        </div>
        </>
    ) 
}

export default Register;

