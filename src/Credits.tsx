import * as React from "react";
import "./main.css";
import Statement from "./Statement";
import Button from "./Button";
import { BoxElementImg } from "./About";
import sb from "./Pictures/icons/sb.jpg";

class CreditRow extends React.Component<{keyVal:string, href:string, text:string},{}> {
    render(){
        return <div key = {this.props.keyVal} className="row justify-content-center mt-1">
                    <div className="col text-center">
                        <a target="_blank" rel="noopener noreferrer" className="footer-tabs px-3" href={this.props.href}>{this.props.text}</a>
                    </div>
                </div>
    }

}

export default class Credits extends React.Component{
    state={
        attribution1:[
            "CPU icon created by Witdhawaty",
            "https://www.flaticon.com/authors/witdhawaty"
        ],
        attribution2:[
            "Microcontroller and Database icons created by Eucalyp",
            "https://www.flaticon.com/authors/eucalyp"
        ],
        attribution3:[
            "Device icon created by xnimrodx",
            "https://www.flaticon.com/authors/xnimrodx"
        ],
        attribution4:[
            "Terminal icon created by Royyan Wijaya",
            "https://www.flaticon.com/authors/royyan-wijaya"
        ],
        attribution5:[
            "Avatar icon created by Freepik",
            "https://www.flaticon.com/authors/freepik"
        ]
    }
    render(){
        return <div className="container mt-5">
                    <Statement heading="Icons" text="Die auf dieser Webseite verwendeten Icons stammen von Flaticon.com."></Statement>
                    <div className="d-flex justify-content-center">
                        <Button href="https://www.flaticon.com/" text="Besuchen"></Button>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-sm-4">
                            <h5 className="text-center">Einzelnachweise</h5>
                            <hr className="mx-auto w-75" />
                        </div>
                    </div>
                    <CreditRow keyVal="attribution1" text={this.state.attribution1[0]} href={this.state.attribution1[1]}></CreditRow>
                    <CreditRow keyVal="attribution2" text={this.state.attribution2[0]} href={this.state.attribution2[1]}></CreditRow>
                    <CreditRow keyVal="attribution3" text={this.state.attribution3[0]} href={this.state.attribution3[1]}></CreditRow>
                    <CreditRow keyVal="attribution4" text={this.state.attribution4[0]} href={this.state.attribution4[1]}></CreditRow>
                    <CreditRow keyVal="attribution5" text={this.state.attribution5[0]} href={this.state.attribution5[1]}></CreditRow>
                    <Statement heading="Creator" text="Diese Webseite wurde von Sabine Britner erstellt. Wir bedanken uns an dieser Stelle herzlich für ihr Engagement."></Statement>
                    <div className="row justify-content-center mt-1">
                        <BoxElementImg name="Sabine Britner" text="Sabine ist Programmiererin aus Leidenschaft. Diese Website ist ihr erstes Projekt in React." imgSrc={sb} mail="bine.britner@gmail.com" keyVal="creator"></BoxElementImg>
                    </div>
                </div>
    }
    
}