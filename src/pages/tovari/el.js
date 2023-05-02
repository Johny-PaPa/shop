import React from "react";
import Header from '../../Header/Header'
import './tov.css'
import Footer from "../../footer/footer";
import { Link } from "react-router-dom";
import El2_1 from '../../assets/2.1.png'
import El2_2 from '../../assets/2.2.png'
import El2_3 from '../../assets/2.3.png'


function El(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    < div className="container-fluid">
                        <ul className="sawe">
                            <h1 className="big">Галерея</h1>
                            <h2 className="momo">Главная/Каталог/Электрогитара</h2>
                            <div className="cls">
                                <div className="centr">
                                    <Link to="/catalog/el/el_2.1"><img className="cat_ob" src={El2_1} /></Link>
                                    <h2 className="">FENDER MAPLE FINGERBOARD</h2>
                                </div>
                                <div className="centr">
                                    <Link to="/catalog/el/el_2.2"><img className="cat_ob" src={El2_2} /></Link>
                                    <h2 className="">FENDER ROSEWOOD FINGERBOARD</h2>
                                </div>
                                <div className="centr">
                                    <Link to="/catalog/el/el_2.3"><img className="cat_ob" src={El2_3} /></Link>
                                    <h2 className="">FENDER "50S TELECASTER FIESTA"</h2>
                                </div>
                            </div>
                            </ul>
                        </div>
                    <Footer/>
            </section>
        </div>
    ) 
}

export default El;