import React, {useEffect} from 'react';
import './is.css'
import { Link, useNavigate } from 'react-router-dom';

function Logu(){
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
                        <div className='pop'>
                        <button type='submit' className='iow'>Войти</button>
                        </div>
                        <div className='centr'>
                            <Link to='/register'><h2>Регистрация</h2></Link>
                        </div>
                    </form> 
                </div>
        </div>
    )
}
export default Logu;