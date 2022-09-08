import * as React from "react";
import "./main.css";

export default class Button extends React.Component<{text:string, href:string},{}>{

    render(){
        return <a className="btn btn-dark" href={this.props.href}> {this.props.text}</a>
    }
}