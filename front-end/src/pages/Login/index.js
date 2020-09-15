import React from 'react';
import Logo from '../../assets/images/ptit-logo.jpg';
import './style.css';

function Login(){

    const onLogin = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="login-page">
            <form className="login-form">

                <div className="logo mb-3">
                    <img src={Logo}/>
                </div>

                <div className="form-group">
                    <input
                    placeholder="Username"
                    type="text"/>
                </div>

                <div className="form-group">
                    <input
                    placeholder="Password"
                    type="password"/>
                </div>
                <button
                type="submit"
                className="login-button form-control btn btn-danger"
                onClick={onLogin}
                >Login
                </button>

            </form>
            
        </div>
    )
}

export default Login;