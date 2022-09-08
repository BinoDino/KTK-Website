import * as React from "react";
import Statement from "./Statement";

export default class TextBox extends React.Component<{keyVal:string, title:string, text:string, bgColor:string, mail?:string},{}> {
    render(){
        return <div key={this.props.keyVal} className={this.props.bgColor + " mx-0 pb-1"}>
                    <Statement heading={this.props.title} text=""></Statement>
                    <p className="px-5">{this.props.text} <a href={"mailto:"+this.props.mail}>{this.props.mail}</a></p>
                </div>
    }
}