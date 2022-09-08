import * as React from "react";
import "./main.css";


export default class Statement extends React.Component<{heading:string,text:string},{}>{

    render(){
        return <div className="container mt-3 mt-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h3 className="text-center pt-4">{this.props.heading}</h3>
                            <hr/>
                            <p className="text-center"> {this.props.text} </p>
                        </div>
                    </div>
                </div>
    }
}
