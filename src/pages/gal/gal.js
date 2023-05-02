import React from "react";
import Header from "../../Header/Header";
import './gal.css'
import Gal1 from '../../assets/1.png'
import Gal2 from '../../assets/2.png'
import Gal3 from '../../assets/3.png'
import Gal4 from '../../assets/4.png'
import Footer from "../../footer/footer";

function Gal(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                        <div className="container-fluid">
                            <ul>
                                <h1>Галерея</h1>
                                <h2>Главная   /  Галерея</h2>
                                <div className="raz">
                                    <div>
                                        <img className="img-fluid" src={Gal1} width={600} />
                                    </div>
                                    <div>
                                        <img className="img-fluid" src={Gal2} width={600}  />
                                    </div>
                                    <img className="img-fluid" src={Gal3} width={600} />
                                    <img className="img-fluid" src={Gal4} width={600} />
                                </div>
                            </ul>
                        </div>
                        <Footer/>
            </section>
        </div>
    ) 
}

export default Gal;