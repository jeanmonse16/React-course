import React from "react";

import "./styles/Badgenew.css";
import logo from "../images/badge-header.svg";
import Badge from "../components/Badge";
import Badgeform from "../components/Badgeform";

class Badgenew extends React.Component{

    state= { 
        form:{
               firstName:"",
               LastName:"",
               email:"",
               jobPosition:"",
               twitter:"",
             } 
    };
   

    handleChange = e => {
        this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value
            },
        })
    }

    handleClick = e => {
        console.log(this.state.form)
        console.log("boton presionado")
    }

    render()
    {
       return (
        <React.Fragment>
         
         <div className="BadgeNew__hero">
             <img className="img-fluid" src={logo} alt="conflogo"></img>
         </div>
         
         <div className="container">
           <div className="row">
               <div className="col-6">
                     <Badge 
                     firstname={this.state.form.firstName} lastname={this.state.form.LastName} hashtag="platziconf" twitter={this.state.form.twitter} jobPosition={this.state.form.jobPosition}
                     />
               </div>
               <div className="col-6">
                     <Badgeform onChange={this.handleChange} formValues={this.state.form} onClick={this.handleClick} />
               </div>
           </div>
         </div>

        </React.Fragment>
       )
    }
}

export default Badgenew;