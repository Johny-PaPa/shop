import React from "react";
import Header from '../../Header/Header'
import './tov.css'
import Footer from "../../footer/footer";
import { Link } from "react-router-dom";
import Ak1_1 from '../../assets/1.1.png'
import Ak1_2 from '../../assets/1.2.png'
import Ak1_3 from '../../assets/1.3.png'
import Ak1_4 from '../../assets/1.4.png'

function Ak(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    < div className="container-fluid">
                        <ul className="sawe">
                            <h1 className="big">Галерея</h1>
                            <h2 className="momo">Главная/Каталог/Акустическая гитара</h2>
                            <div className="cls">
                                <div className="">
                                    <Link to="/catalog/ak/ak_1.1"><img className="cat_ob" src={Ak1_1} /></Link>
                                    <h2 className="centr">FENDER CD-60 BLACK</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/ak/ak_1.2"><img className="cat_ob" src={Ak1_2} /></Link>
                                    <h2 className="centr">FENDER CC-60S SUNBURST</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/"><img className="cat_ob" src={Ak1_3} /></Link>
                                    <h2 className="centr">FENDER CD-60 SUNBURST</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/"><img className="cat_ob" src={Ak1_4} /></Link>
                                    <h2 className="centr">FENDER CD-60S MAHOGANY</h2>
                                </div>
                                {/* <div>
                                    <Link to="/catalog/class"><img className="cat_ob" src={Ak1_4} /></Link>
                                    <h2 className="centr">FENDER CD-60S MAHOGANY</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/class"><img className="cat_ob" src={Ak1_4} /></Link>
                                    <h2 className="centr">FENDER CD-60S MAHOGANY</h2>
                                </div> */}
                            </div>
                            </ul>
                        </div>
                    <Footer/>
            </section>
        </div>
    ) 
}

export default Ak;