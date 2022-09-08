import * as React from "react";
import Statement from "./Statement";
import TextBox from "./TextBox";
import user from "./Pictures/icons/avatar.png";
import "./main.css";

class BoxElementImg extends React.Component<{keyVal:string, imgSrc:string, name:string, text:string, mail:string},{}> {
  render(){
    return <div key={this.props.keyVal} className="col-lg-4 mt-lg-3 mb-5 mb-lg-3">
              <div key={"row1-"+this.props.keyVal} className="row justify-content-center">
                <div className="col-md-6 col-lg-12">
                  <img src={this.props.imgSrc} className="circle mx-auto d-block border border-dark w-75" alt="portrait"/>
                </div>
              </div>
              <div key={"row2-"+this.props.keyVal} className="row mt-3">
                <div className="col text-center">
                  <h5>{this.props.name}</h5>
                  <hr className="mx-auto w-75"/>
                  <p className="mb-0 fs-sm">{this.props.text}</p>
                </div>
              </div>
              <div key={"row3-"+this.props.keyVal} className="row mt-1">
                <div className="col text-center">
                  <hr className="mx-auto w-75"/>
                  <a className="fs-sm" href={"mailto:"+this.props.mail}>{this.props.mail}</a>
                </div>
              </div>
          </div>
  }
}


class About extends React.Component {
  
    state = {
      teufel:[
        "Silvan Teufel",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "s.teufel@ktk-experts.com"
      ],
      khan:[
        "Shahbaz Khan",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "s.khan@ktk-experts.com"
      ],
      kurdi:[
        "Maher Kurdi",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "m.kurdi@ktk-experts.com"
      ]
    };


  render() {

    return (<div className="container-fluid px-0">
              <TextBox keyVal="motivation" title="Unsere Motivation" bgColor="" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"></TextBox>
              <TextBox keyVal="goal" title="Unser Ziel" bgColor="bg-gray" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"></TextBox>
              <div key="team-portraits" className="container mt-3 mt-lg-5">
                <Statement heading="Das Team" text="Lernen Sie die Köpfe hinter KTK Experts kennen."></Statement>
                <div className="row justify-content-evenly px-3 px-lg-0 mt-3">
                      <BoxElementImg name={this.state.khan[0]} text={this.state.khan[1]} imgSrc={user} mail={this.state.khan[2]} keyVal="portrait#1"></BoxElementImg>
                      <BoxElementImg name={this.state.teufel[0]} text={this.state.teufel[1]} imgSrc={user} mail={this.state.teufel[2]}  keyVal="portrait#2"></BoxElementImg>
                      <BoxElementImg name={this.state.kurdi[0]} text={this.state.kurdi[1]} imgSrc={user} mail={this.state.kurdi[2]} keyVal="portrait#3"></BoxElementImg>
                  </div>
              </div>
            </div>
    );
  }
}

export{About,BoxElementImg}