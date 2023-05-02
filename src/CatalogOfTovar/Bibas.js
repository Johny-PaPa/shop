import React from "react";
import Order from "./Order";


 export default function Bibas(props) {
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el}/>
            ))}
        </div>
    ) 
 }
