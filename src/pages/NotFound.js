import React from "react";
import './404.css'
import Header from "../Header/Header";

function NotFound(){
    return(
        <div className='wrapper'>
            <section className='section-header'>      
                    <Header />
            </section>
            <section className='section-notfound'>
                <div className='container'>
                    <div className="Bruh">
                        <p className="Bruh2">404</p>      
                    </div>
                </div>
            </section>
        </div>
    )
}


export default NotFound;