import * as React from "react";
import "./main.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component{

    state={
        titles: {
            impressum: ["IMPRESSUM","/Impressum"],
            datenschutz: ["DATENSCHUTZ","/Datenschutz"],
            credit: ["CREDIT","/Credit"]
          }
        }

    render(){
        return <footer className="fixed-bottom bg-light">
                    <div className="row mb-3 d-none d-md-flex">
                        <div className="col-md-7">
                            <p className="px-3 pt-2 mb-0">Created in 2022.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="row justify-content-evenly">
                                <div className="col-md-3 pt-2">
                                    <Link className="footer-tabs px-3" to="/Impressum">Impressum</Link>
                                </div>
                                <div className="col-md-3 pt-2">
                                    <Link className="footer-tabs px-3" to="/Datenschutz">Datenschutz</Link>
                                </div>
                                <div className="col-md-3 pt-2">
                                    <Link className="footer-tabs px-3" to="/Credits">Credits</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-flush d-md-none" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed bg-light border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Created in 2022.
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body px-0 bg-light pt-2"> 
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-light"><Link className="footer-tabs" to="/Impressum">Impressum</Link></li>
                                    <li className="list-group-item bg-light"><Link className="footer-tabs" to="/Datenschutz">Datenschutz</Link></li>
                                    <li className="list-group-item bg-light"><Link className="footer-tabs" to="/Credits">Credits</Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </footer>
    }

}