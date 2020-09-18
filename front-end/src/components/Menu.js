import React from 'react';
import Logo from '../assets/images/ptit-icon.png';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

function Menu() {
    return(
        <nav className="navbar navbar-expand-sm navbar-light p-3 text-center"
        style={
            {boxSizing: "border-box", fontSize: 14, fontWeight: 600, backgroundColor: "#eee"}
            }>
            <NavLink to="/home">
                <img src={Logo} alt="" style={{width: 50}}/>
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item ml-2">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className="nav-link" to="/course-regis">Course-regis</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className="nav-link" to="/timetable">Timetable</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="dropdown ml-2">
                        <NavLink className="nav-link dropdown-toggle" to="" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        </NavLink>
                        <div className="dropdown-menu"
                        aria-labelledby="dropdownId"
                        style={{left: -100}}
                        >
                            <NavLink className="dropdown-item" to="/edit-info">Edit info</NavLink>
                            <NavLink className="dropdown-item" to="/login">Log out</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;