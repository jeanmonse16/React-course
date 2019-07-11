import React from "react";

import {Link} from "react-router-dom"

import "./styles/BadgesList.css";

import favicon from "../images/favicon.png";
import Gravatar from"./Gravatar";


class Badgeslist extends React.Component
{
    render()
    {  
       if(this.props.badges.length === 0){
           return (
               <div>
                   <h3>
                       No badges were found
                   </h3>
                   <Link to="badges/new" className="btn btn-primary">Create new badge</Link>
               </div>
           )
       }

       return (
        <div className="BadgesList">
          <ul className="list-unstyled">
                {this.props.badges.map(
                    (badge) => {
                        return (
                        <li  key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`} >
                              <div className="BadgesListItem">

                                  <Gravatar 
                                  className="BadgesListItem__avatar" email={badge.email} >
                                  </Gravatar>
                                <div>
                                       <h4> {badge.firstName} {badge.lastName}</h4> 
                                       <p className="twitter__blue_font">
                                          <img src={favicon} alt="favicon" />
                                           @{badge.twitter}
                                       </p>
                                       <p> 
                                          {badge.jobTitle}
                                       </p>
                                </div>

                              </div>
                            </Link>
                            
                        </li>
                             )
                     }
                )}
            </ul>

        </div>   
        
       )
    }
}

export  default Badgeslist;