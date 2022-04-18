import React from 'react'
import "../../styles/AboutDetail.css"
import logo from "../../img/perfil.jpg"

function aboutDetail() {
  return (
   

      <div className="box_about_detail"> 
       
            <img height="100px" src={logo} alt="not found"/>
            <div className="box_desc"> 
            <p className="animate__animated animate__shakeY">Desarrollador Web Full Stack</p>
            </div>
        <p className="parrafo_desc">
         Bienvenido/a gracias por ver este proyecto individual. 
         Él mismo fue realizado en la academia Henry llevando como título Country.
         En dicho proyecto se hizo uso de varias tecnologías tantos del lado Front-end (React,Redux,JavaScript,Html), 
         como del Back-end (express) y base de datos (Sequelize-Postgresql).
        </p>
        </div>

  )
  
}

export default aboutDetail