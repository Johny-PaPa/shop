import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import clock from '../assets/24-hours.png'
import Grouped from './splitbutton2'
// import cart from '../assets/shopping-cart1.png'
import {FaShoppingCart} from 'react-icons/fa'
import Order from "../CatalogOfTovar/Order";
import Cabinets from "../assets/1200px-Cabbage_in_a_stack.jpg";

export default function Header(props){
    let [cartOpen,setCartOpen] = useState(false)
    return (
        <header className="header"> 
            <div className="container">
                <nav>
                    <ul>
                        <div className="reg">
                            <Grouped/>
                        </div>
                        <Link to="/Howbuy">Как купить?</Link>
                        <Link to="/help">Помощь</Link>
                        <Link to="/catalog">Каталог</Link>
                        {/* <Link to="/cart" className=""><img className="nav-logo" src={cart} /></Link> */}
                        <FaShoppingCart onClick={() =>setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>  
                            
                            {cartOpen && (
                                <div className="shop-cart">
                                    {props.orders.map(el => (
                                        <Order key={el.id} item={el}/>
                                    ))}

                                </div>
                            )}
                            <div className="otstup2">                        
                                <Link to="/" className="otstup3">Археолог</Link>
                                <img className="nav-logo" src={clock} />
                            </div>
                        <Link to="/Cabinet">
                            <img className="nav-logog" src={Cabinets} />
                        </Link>

                        
                    </ul> 
                </nav>
            </div>
        </header>
    )
}

