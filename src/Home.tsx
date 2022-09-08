import * as React from "react";
import logo from "./Pictures/Logo_ktk.svg";
import Statement from "./Statement";
import "./main.css";



export default class Home extends React.Component{
    render(){
        return <div className="container">
                    <Statement heading="Willkommen bei KTK-Experts" text="Wir sind eine Unternehmung aus mehreren Elektroingenieuren und Softwareentwicklern, die b2b als Dienstleister fungieren."></Statement>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <img src={logo} className=" img-fluid rounded mx-auto d-block" alt="Logo"></img>
                    </div>
                </div>
                    <Statement heading="Diese Seite befindet sich noch im Aufbau" text="Haben Sie Fragen? Schicken Sie uns eine Email."></Statement>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <a href="mailto:info@ktk-experts.com">info@ktk-experts.com</a>
                        </div>
                    </div>
                </div>
    }
}