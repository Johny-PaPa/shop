import React from "react";
import Header from '../Header/Header'
import "./login.css"
import Logu from "./log/logu";

function Login(){
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
            <Logu/>
        </div>
        </>
    ) 
}

export default Login;

