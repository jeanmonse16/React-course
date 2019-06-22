import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Badgenew.css";
import logo from "../images/badge-header.svg";
import Badge from "../components/Badge";
import Badgeform from "../components/Badgeform";

class Badgenew extends React.Component{
    render()
    {
       return (
        <div>
            <Navbar/>
         <div className="BadgeNew__hero">
             <img className="img-fluid" src={logo} alt="conflogo"></img>
         </div>
         
         <div className="container">
           <div className="row">
               <div className="col-6">
                     <Badge firstname="Jeanpier" lastname="Monserrate" hashtag="platziconf" />
               </div>
               <div className="col-6">
                     <Badgeform/>
               </div>
           </div>
         </div>

        </div>
       )
    }
}

export default Badgenew;