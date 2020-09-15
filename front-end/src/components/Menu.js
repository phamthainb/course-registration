import React from 'react';
import Logo from '../assets/images/ptit-icon.png';

function Menu() {
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-3"
        style={{boxSizing: "border-box"}}>
            <a href="#">
                <img src={Logo} alt="" style={{width: 50}}/>
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active ml-2">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="#">Course-regis</a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="#">Timetable</a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="dropdown ml-2">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu"
                        aria-labelledby="dropdownId"
                        style={{left: "-100px"}}
                        >
                            <a className="dropdown-item" href="#">Edit info</a>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;