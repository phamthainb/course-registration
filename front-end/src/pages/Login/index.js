import { api } from "common/axiosService";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/ptit-logo.jpg";
import "./style.css";
import * as constants from "../../pages/categories/constants";
import { errNotify } from "common/toast";

function Login() {
  const history = useHistory();

  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [isSaveUser, setIsSaveUser] = useState(false);
  const onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setAccount({
      ...account,
      [name]: value,
    });
  };
s
  const onLogin = (e) => {
    e.preventDefault();
    api("POST", constants.AUTHENTICATE, {
      username: account.username,
      password: account.password,
    })
      .then((res) => {
        if (res) {
          if (res.data) {
            let jwt = res.data.jwt;
            isSaveUser
              ? localStorage.setItem("jwt", jwt)
              : sessionStorage.setItem("jwt", jwt);
            history.push("/home");
          }
        }
      })
      .catch((err) => {
        errNotify("Invalid user !");
      });
  };

  const onSaveUser = () => {
    setIsSaveUser(true);
  };

  return (
    <div className="login-page">
      <form className="login-form">
        <div className="logo mb-3">
          <img src={Logo} alt="" />
        </div>

        <div className="form-group">
          <input
            onChange={onChange}
            placeholder="Username"
            name="username"
            type="text"
          />
        </div>

        <div className="form-group">
          <input
            onChange={onChange}
            placeholder="Password"
            name="password"
            type="password"
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            className="mr-3"
            id="remember"
            onChange={onSaveUser}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button
          type="submit"
          className="login-button form-control btn btn-danger"
          onClick={onLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
