import React from "react";
import '../Advert/Main/Main.css'
import Reklama2 from "../Header/reklama2";
import MyComponent from "../Header/telephone";

function Sobr(){
    return(

                    <div className="forge">
                        <Reklama2/>
                        <div className="kol"> 
                            <div className="wit">
                                <MyComponent/>
                            </div> 
                            <div className="butt">
                                <button className="sq"><p className="whitet">Получить скидку</p></button> 
                            </div> 
                        </div>
                    </div>
        ) 
    }
    
    export default Sobr;