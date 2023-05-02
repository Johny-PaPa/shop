import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import gitar from '../assets/gitar-head.jpg'
import Grouped from './splitbutton2'
// import cart from '../assets/shopping-cart1.png'
import {FaShoppingCart} from 'react-icons/fa'
import Order from "../CatalogOfTovar/Order";
import { BathtubTwoTone } from "@mui/icons-material";
// import { Button } from "react-bootstrap";
import insta from '../assets/instagram.png'
import whats from '../assets/whatsapp.png'

export default function Header(props){
    let [cartOpen,setCartOpen] = useState(false)
    return (
        <header className="header"> 
            <div className="">
                <nav>
                    <ul>
                        {/* <div className="reg">
                            <Grouped/>
                        </div> */}
                        {/* <Link to="/Howbuy">Как купить?</Link> */}
                        <div className="bora">
                            <div className="otstup2">        
                                    <Link to="/"><img className="nav-logo" src={gitar} /></Link>
                                </div>
                            <div className="boka"> 
                                <Link to="/catalog"><button className="buttonkat"><p className="whitet">Каталог</p></button></Link>
                                <p className="topaw">«Рок-звезды приходят и уходят. Музыканты играют до самой смерти»</p>
                            </div>
                        </div>
                        <div className="oe">
                            <div className="ba">
                                <Link to="/*">Доставка</Link>
                                <Link to="/*">Контакты</Link>
                                <Link to="/gal">Галерея</Link>
                                {/* <Link to="/cart" className=""><img className="nav-logo" src={cart} /></Link> */}
                               <Link to ="/cart"><div className="iop"><FaShoppingCart/> </div>  </Link>
                                    
                                    {cartOpen && (
                                        <div className="shop-cart">
                                            {props.orders.map(el => (
                                                <Order key={el.id} item={el}/>
                                            ))}

                                        </div>
                                    )}
                            </div>
                            <div className="bas">
                                <Link to="/login"><p className="bold">Личный кабинет</p></Link>
                                <Link to="/"><img className="nav-surs" src={insta} /></Link>
                                <Link to="/"><img className="nav-surs" src={whats} /></Link>
                                <div>
                                    <p className="smal">
                                        Режим работы
                                    </p>
                                    <p className="bold">
                                        Круглосуточно
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ul> 
                </nav>
            </div>
        </header>
    )
}

