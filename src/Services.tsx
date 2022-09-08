import * as React from "react";
import "./main.css";
import Statement from "./Statement";
import TextBox from "./TextBox";
import hardware_icon from "./Pictures/icons/cpu.svg";
import microcontroller_icon from "./Pictures/icons/microcontroller.svg";
import terminal_icon from "./Pictures/icons/terminal.png";
import database_icon from "./Pictures/icons/relational.png";
import device_icon from "./Pictures/icons/devices.png";

class BoxElement extends React.Component<{title:string, icon:string, w:string, h:string, techs:string, expl:string, keyVal: string, bg?:string},{}>{
    state={
        isHovered: false
    };

    handleMouseOver = () => {
        this.setState({isHovered: true});
    };

    handleMouseOut = () => {
        this.setState({isHovered: false});
    }

    createTab = () =>{
        const tab:any =[];
        if(!this.state.isHovered){
            tab.push(<div key={this.props.keyVal} className="col-h col-lg-3 mt-lg-3 mb-3 mb-lg-0 border border-dark" onMouseEnter={this.handleMouseOver} onClick={this.handleMouseOver}>
                        <div className="d-flex h-100 justify-content-center">
                            <div className="align-self-center">
                                <img className="rounded mx-auto d-block mt-3" src={this.props.icon} alt="icon" width={this.props.w} height={this.props.h}/>
                                <hr className="mx-auto w-75"/>
                                <h5 className="text-center mt-3 mb-3">{this.props.title}</h5>
                            </div>
                        </div>
                    </div>
                    );
        }else{
            tab.push(<div key={this.props.keyVal + "-dark"} className={this.props.bg + " col-h col-lg-3 mt-lg-3 mb-3 mb-lg-0 border border-dark bg-dark text-white"} onMouseLeave={this.handleMouseOut} onClick={this.handleMouseOut}>
                        <div className="d-flex h-100 justify-content-center">
                            <div className=" px-2 align-self-center position-absolute">
                                <p className="text-center mt-3 mb-3">{this.props.techs}</p>
                                <hr className="mx-auto w-75"/>
                                <p className="text-center mt-3 mb-3">{this.props.expl}</p>
                            </div>
                        </div>
                    </div>);
        }
        return tab;
    }


    render(){
        return this.createTab(); 
    }
}

export default class Services extends React.Component<{},{}>{
    state={
        hardware:[
            "Hardware-Entwicklung",
            "KiCad, Eagle",
            "Prototypenfertigung innerhalb weniger Monate."
        ],
        softwareMC:[
            "Software für Microcontroller",
            "AtmelStudio, AVR, STM, PlatformIO, Arduino, C, C++, ...",
            "Durch dynamische Entwicklungmethoden erreichen wir das gewünschte Produkt."
        ],
        softwareEL:[
            "Software für Embedded Linux Systeme",
            "Yocto-Linux, C, C++, Touch-Screen Application ...",
            "Maschinennahe Programmierung schafft schnelle Systeme."
        ],
        webDev:[
            "Web Development",
            "Javascript, Typescript, CSS, Webapps, ...",
            "Moderne Technologien führen zu anwenderfreundlichen Produkten."
        ],
        LinuxBackends:[
            "Linux Backends",
            "REST APIs, Express, MySQL, SQLite, MongoDB, ...",
            "Hohe Geschwindigkeit wird durch aktuelle Technologien erreicht."
        ]
    }
    render(){
        return <div className="container-fluid px-0 mt-3 mt-lg-5">
                <Statement heading="Unsere Leistungen" text="Als Team verschiedener Fachleute können wir Ihnen ein breites Spektrum an Leistungen bieten."></Statement>
                <div className="row justify-content-evenly px-3 px-lg-0 mt-1 mt-lg-5 mx-3">
                    <BoxElement bg="bg-cpu" title={this.state.hardware[0]} icon = {hardware_icon} w="75" h="75" techs={this.state.hardware[1]} expl={this.state.hardware[2]} keyVal="service#1"></BoxElement>
                    <BoxElement bg="bg-board" title={this.state.softwareMC[0]} icon = {microcontroller_icon} w="75" h="75" techs={this.state.softwareMC[1]} expl={this.state.softwareMC[2]} keyVal="service#2"></BoxElement>
                    <BoxElement bg="bg-terminal" title={this.state.softwareEL[0]} icon = {terminal_icon} w="70" h="70" techs={this.state.softwareEL[1]} expl={this.state.softwareEL[2]} keyVal="service#3"></BoxElement>
                </div>
                <div className="row justify-content-evenly px-3 px-lg-0 mt-0 mt-lg-3 mx-3">
                    <BoxElement bg="bg-code" title={this.state.webDev[0]} icon = {device_icon} w="75" h="75" techs={this.state.webDev[1]} expl={this.state.webDev[2]} keyVal="service#4"></BoxElement>
                    <BoxElement bg="bg-er" title={this.state.LinuxBackends[0]} icon = {database_icon} w="75" h="75" techs={this.state.LinuxBackends[1]} expl={this.state.LinuxBackends[2]} keyVal="service#5"></BoxElement>
                </div>
                <TextBox keyVal="interested" title="Haben wir Ihr Interesse geweckt?" text="Gerne können wir Sie bei einem persönlichen Gespräch ganz unverbindlich beraten. Schreiben Sie uns eine Email, falls Sie noch Fragen haben oder um einen Termin zu vereinbaren:" mail="info@ktk-experts.com" bgColor="bg-gray"></TextBox>
                </div>
    }
}