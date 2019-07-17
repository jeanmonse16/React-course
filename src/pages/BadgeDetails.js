import React from "react"

import {Link} from "react-router-dom"

import "./styles/BadgeDetails.css";
import platziconf from "../images/platziconf-logo.svg";

import Badge from "../components/Badge"

function BadgeDetails (props){

    const badge = props.badge
 
    return (
        <div>
            <div className="BadgeDetails__hero">

               <div className="container">
                 <div className="row">
                   <div className="col-6">
                      <img src={platziconf} alt="logo de la conferencia" />
                   </div>
                   <div className="col-6 BadgeDetails__hero-attendant-name">
                      <h1>
                          {badge.firstName} {badge.lastName}
                      </h1>
                   </div>
                 </div>
               </div>

            </div>
            <div className="container">
                <div className="row">
                   <div className="col">
                       <Badge 
                       firstName={badge.firstName}
                       lastName={badge.lastName}
                       email={badge.email}
                       jobTitle={badge.jobTitle}
                       twitter={badge.twitter}
                       />
                   </div>
                   <div className="col">
                      <div>
                      <h2>
                          Actions
                      </h2>
                      </div>
                      <div>
                      <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link>
                      </div>
                      <div>
                      <button className="btn btn-danger">Delete</button>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    )

 }

 export default BadgeDetails;
