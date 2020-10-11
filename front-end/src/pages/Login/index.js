import { apiInterceptors } from 'common/axiosService';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/ptit-logo.jpg';
import './style.css';

function Login(){

    const history = useHistory();

    const [account, setAccount] = useState({
        username: '',
        password: ''
    })

    const onChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setAccount({
            ...account,
            [name]: value
        })
    }

    const onLogin = (e)=>{
        e.preventDefault();
        // history.push('/home');
        apiInterceptors('post', 'api/user/authenticate', 
        {
            "username":"admin",
            "password":"admin"
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div className="login-page">
            <form className="login-form">

                <div className="logo mb-3">
                    <img src={Logo} alt=""/>
                </div>

                <div className="form-group">
                    <input
                    onChange={onChange}
                    placeholder="Username"
                    name="username"
                    type="text"/>
                </div>

                <div className="form-group">
                    <input
                    onChange={onChange}
                    placeholder="Password"
                    name="password"
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