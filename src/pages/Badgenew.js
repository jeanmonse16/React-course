import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Badgenew.css";
import logo from "../images/badge-header.svg";
import Badge from "../components/Badge";

class Badgenew extends React.Component{
    render()
    {
       return (
        <div>
            <Navbar/>
         <div className="BadgeNew__hero">
             <img className="img-fluid" src={logo} alt="conflogo"></img>
         </div>
         
         <div clasName="container">
           <div className="row">
               <div className="col">
                     <Badge firstname="Jeanpier" lastname="Monserrate" hashtag="platziconf" />
               </div>
           </div>
         </div>

        </div>
       )
    }
}

export default Badgenew;