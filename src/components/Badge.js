import React from "react";
import "./styles/Badge.css";
import Conflogo from "../images/descarga.svg";

class Badge extends React.Component{
  render() {
     return <div className="Badge">
       <div className="Badge__header">
           <img src={Conflogo} alt="logo principal"></img>
       </div>

       <div className="Badge__section-name">
           <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"></img>
           <h1>{this.props.firstname} <br></br>{this.props.lastname}</h1>
       </div>
       
       <div className="Badge__section-info ">
         <h5>  Soy desarrollador frontend, pero también me sé manejar dentro del backend </h5>
       </div>
       
       <div className="Badge__footer">
          #{this.props.hashtag}
       </div>
       
       </div>
     }
}

export default Badge;
