import React from "react"
import "../../styles/LandingPage.css"
import {Link} from "react-router-dom"
import logo from "../../img/flag.png"

export default function LandingPage(){

    return(
        <div className="earth">
          <div className="logo_landing"> 
      <img src={logo} alt="not found" />
      </div>
      <div>
      <img className="logo_segundo_landing" src={logo} alt="not found" />
      </div>
       
          <div className="box_hijo_landing"> 
            <Link to="/home">
            <button> 
            Ingresar
          </button>
          </Link>
          </div>
            <h1>Países y banderas del mundo</h1>
             </div>
    
     
     
    )
}