import React from 'react'
import {Link} from "react-router-dom"
import "../../styles/Volver.css"

function Volver() {
  return (
 
    <div className="button_volver"> 
       <Link to="/home">
       <button>Principal</button>
     </Link>
 </div>
  )
}

export default Volver