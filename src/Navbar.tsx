import * as React from "react";
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from "./Pictures/Logo_s.png";
import "./main.css";

export default class Navbar extends React.Component{

    state={
        titles: {
            home:["HOME",""],
            services: ["SERVICES","/Services"],
            aboutus: ["ABOUT US","/About"]
          }
        }

    render(){
        return <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div className="container-fluid poppins-font">
                        <Link id="logo" className="navbar-brand" to="/">
                            <img src={logo} alt="logo" width="50" height="49"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {Object.values(this.state.titles).map((value,index) => {
                                return (
                                    <ul key={"navtab#"+index} className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <NavLink 
                                                className={({ isActive }) =>
                                                    [
                                                    "nav-link text-dark",
                                                    isActive ? "fw-bold" : null,
                                                    ]
                                                    .filter(Boolean)
                                                    .join(" ")
                                                }  
                                                to={value[1]}>
                                                    {value[0]}
                                            </NavLink>
                                        </li>
                                    </ul>
                                );
                            })}
                        </div>  
                    </div>
                </nav>
    }

}