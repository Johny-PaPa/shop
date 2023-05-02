import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import "./cart.css"
import MyComponent from "../Header/telephone";


function Cart(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
            </section>
            <div className="container">
                <div className="otdel">
                    <div className="uih">
                        <div className="ccc">
                            <h1 className="uuu">Здесь пока ничего нет! Купите что-нибудь!</h1>
                        </div>
                    </div>
                    <div className="uihh">
                        <div className="ccc">
                            <h1 className="qqq">Детали заказа</h1>
  
                            <h2 className="qqq">Колличество</h2>
                            <h2 className="qqq">Сумма</h2>
                            <div className="iuj">
                            {/* <MyComponent/> */}
                            <input className="hg"></input>
                            <div className="uh"><button className="hj">Заказать</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Cart;