import React from "react";

import {Link} from "react-router-dom";

import "./styles/Home.css";

import astronauts from "../images/astronauts.svg";
import platziconf from "../images/platziconf-logo.svg";

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
               <div className="container">
                 <div className="row">
                     
                     <div className="col-6">
                        <img 
                          alt="conf-logo" src={platziconf}
                        /> 
                        <h1 className="Home__badge">
                            Badge Management <br/> System
                        </h1>
                        <Link to="/badges" className="btn btn-primary">
                          Start!
                        </Link>
                     </div>
                     <div className="col-6">
                        <img 
                        alt="astronauts" src={astronauts}
                        />
                     </div>

                    
                 </div>
                
               </div>
            </div>
        )
    }
}

export default Home;