import React from 'react'
import {Link} from "react-router-dom"
import "../../styles/About.css"

function About() {
  return (
    <div className="box_about"> 
            <Link to="/about">
        <button> 
            Sobre mí
          </button>
          </Link>
          </div>
  )
}

export default About