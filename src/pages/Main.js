import React, {useEffect} from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import { Link, useNavigate } from "react-router-dom";
import '../Advert/Main/Main.css'
import Footer from "../footer/footer";
import Sobr from "./sobr";
import El from '../assets/el.png'
import Pol from '../assets/pol.png'
import Ak from '../assets/ak.png'
import Class from '../assets/class.png'
import El2_1 from '../assets/2.1.png'
import El2_2 from '../assets/2.2.png'
import Ak1_1 from '../assets/1.1.png'
import Ak1_2 from '../assets/1.2.png'

function Main(){
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('isAuth')) {
            navigate("/login");
        }
    }, []);
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header/>
                    <Reklama/>
                    {/* <div className="container2">
                        <div className="CardTov">
                            <MultiActionAreaCard/>
                        </div>
                    </div> */}
                    <div className="container">
                    <h1 className="big">Популярные категории</h1>
                    <div className="cls">
                                <div>
                                    <Link to="/catalog/el"><img className="cat_ob" src={El} /></Link>
                                    <h2 className="centr">Электрогитара</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/pol"><img className="cat_ob" src={Pol} /></Link>
                                    <h2 className="centr">Полуакустическая гитара</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/ak"><img className="cat_ob" src={Ak} /></Link>
                                    <h2 className="centr">Акустическая гитара</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/class"><img className="cat_ob" src={Class} /></Link>
                                    <h2 className="centr">Классическая гитара</h2>
                                </div>
                            </div>
                            </div>
                            <div className="container">
                                <h1 className="big">Лидеры продаж</h1>
                                < div className="container-fluid">
                                    <ul className="sawe">
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
                                                <Link to="/catalog/ak/ak_1.1"><img className="cat_ob" src={Ak1_1} /></Link>
                                                <h2 className="">FENDER CD-60 BLACK</h2>
                                            </div>
                                            <div className="centr">
                                                <Link to="/catalog/ak/ak_1.2"><img className="cat_ob" src={Ak1_2} /></Link>
                                                <h2 className="">FENDER CC-60S SUNBURST</h2>
                                            </div>
                                        </div>
                                        </ul>
                                    </div>
                            </div>
                    <Sobr/>
                    <Footer/>
            </section>
        </div>
    ) 
}

export default Main;

