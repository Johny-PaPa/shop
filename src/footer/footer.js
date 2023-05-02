import React, { useState } from "react";
import './footer.css'
import { Link } from "react-router-dom";
import insta from '../assets/instagram.png'
import whats from '../assets/whatsapp.png'

function Footer (){
    return(
        <footer className="footer"> 
                    <div className="container">
                        <div className="sqe">
                        <div class="f1">
                            <p>Контакты: +7 918 346 57 47</p>
                        </div>
                        <Link to="/" className="soc"><img className="nav-surs" src={insta} /></Link>
                        <Link to="/" className="soc"><img className="nav-surs" src={whats} /></Link>
                        <div class="f2">
                            <p class="ts">Адрес: г.Барнаул Ул.Колотушкина, д.11</p>
                            <p>Режим работы: Круглосуточно</p>
                        </div>
                        </div>
                    </div>
        </footer>
    )
}
export default Footer;
