import React from "react";

import {Link} from "react-router-dom"

import "./styles/BadgesList.css";

import favicon from "../images/favicon.png";
import Gravatar from"./Gravatar";

function useSearchBadges(badges){
      const [ query, setQuery] = React.useState("")

      const [filteredBadges, setfilteredBadges] = React.useState(badges)

      React.useMemo( () => {
        const result = badges.filter(badge => {
          return ` ${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })

        return setfilteredBadges(result)
        }, [badges, query]);

        return {query, setQuery, filteredBadges}
}

function Badgeslist (props)
{
      const badges = props.badges
      const {query, setQuery, filteredBadges} = useSearchBadges(badges)

       if(filteredBadges.length === 0){
           return (
               <div>
                   <div className="form-group">
                     <label><h3>Filter Badges</h3></label>
                     <input type="text" className="form-control" 
                           value={query}
                           onChange={ e => {
                           setQuery(e.target.value)
                            }}
                     />
                  </div>
                   <h3>
                       No badges were found
                   </h3>
                   <Link to="badges/new" className="btn btn-primary">Create new badge</Link>
               </div>
           )
       }

       return (
        <div className="BadgesList">
          <div className="form-group">
             <label><h3>Filter Badges</h3></label>
             <input type="text" className="form-control" 
             value={query}
             onChange={ e => {
                 setQuery(e.target.value)
             }}
             />
          </div>
          <ul className="list-unstyled">
                {filteredBadges.map(
                    (badge) => {
                        return (
                        <li  key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`} >
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

export  default Badgeslist;