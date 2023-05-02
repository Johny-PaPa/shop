import React from "react";
import './reklama.css'
import rek from '../Advert/rek/rek.png'

function Reklama(){
    return(
        <div className="reclama">
            <img className="rek" src={rek} />
        </div>
    )
}


export default Reklama;