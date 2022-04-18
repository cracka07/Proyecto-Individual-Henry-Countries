import React from "react"
import "../../styles/LandingPage.css"
import {Link} from "react-router-dom"
import logo from "../../img/flag.png"
import About from "../about/About"


export default function LandingPage(){

    return(
        <div className="earth">
          <div className="logo_landing"> 
      <img src={logo} alt="not found" />
      </div>
      <h1 className="h_uno">
        <span>P</span>
        <span>a</span>
        <span>i</span>
        <span>s</span>
        <span>e</span>
        <span>s </span>
        <span>y</span>

        <span className="span_landing">b</span>
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>e</span>
        <span>r</span>
        <span>a</span>
        <span>s</span>
        <span className="span_landing">d</span>
        <span>e</span>
        <span> l</span>
        <span className="span_landing">m</span>
        <span>u</span>
        <span>n</span>
        <span>d</span>
        <span>o</span>
        </h1>

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
          <About/>
             </div>
    
     
     
    )
}