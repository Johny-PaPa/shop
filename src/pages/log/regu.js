import React, { useEffect } from "react";
import './is.css';
import { useNavigate } from "react-router-dom";

function Regu(){
    const navigate = useNavigate();
    const submitHandler = () => {
        localStorage.setItem("isAuth", true);
        navigate("/");
    };
        
    useEffect(() => {
        if (localStorage.getItem("isAuth")) {
            navigate("/");
        }
    }, []);
    return(
        <div className='container'>
                <div className='ror'>
                    <form onSubmit={submitHandler}>
                        <input className='log' required/>
                        <input className='log' type="password" required/>
                        <input className='log' type="password"required/>
                        <div className='pop'>
                        <button type='submit' className='iow'>Регистрация</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}
export default Regu;
// sdsa