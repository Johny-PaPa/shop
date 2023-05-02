import React from "react";
import Header from '../../../Header/Header'
import '../tov.css'
import Ak1_1 from '../../../assets/1.1.png'
import Footer from "../../../footer/footer";
import { Link } from "react-router-dom";

function Ak_1_1(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    < div className="container">
                        <ul className="sawe">
                            <h1 className="big">FENDER CD-60 BLACK</h1>
                            <h2 className="momo">Главная/Каталог/Акустическая гитара/FENDER CD-60 BLACK</h2>
                            <div className="cls">
                                <div className="rars">
                                    <img className="cat_ob_con" src={Ak1_1} />
                                    <div className="arww">
                                        <h1 className="centr1">24 100 Р</h1>
                                        <button className="sasw"><p className="wito">В корзину</p></button>
                                        <div className="qd"></div>
                                        <div className="opi">
                                            <h2>Состав:</h2>
                                            <h3>Накладка - Палисандр</h3>
                                            <h3>Дека - Клен</h3>
                                            <h3>Звукосниматель - Firebird Alnico</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        </div>
                    <Footer/>
            </section>
        </div>
    ) 
}

export default Ak_1_1;