import React from 'react'
import "../../styles/Country.css"
import {Link} from "react-router-dom"


function Country({id,name,flag,continent,poblacion}) {
  return (
    
    <div className="box_country" key={id}>
      <Link to={`/detail/${id}`}>
      <div className="box_img_country">
      
        <img className="country_img" src={flag} alt="flag not found" width="250rem" height="150rem" />
        </div>
        <div>
        <div className="box_titles_country"> 
        <h6>{name}</h6>
        </div>
        <div className="box_pop">
          <p>{poblacion}</p>
          </div>
          <div className="titles_country">
        <h5>{continent}</h5>
        </div> 
        </div>
        
        </Link>
    </div>
  )
}

export default Country