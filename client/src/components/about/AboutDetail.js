import React from 'react'
import "../../styles/AboutDetail.css"
import logo from "../../img/perfil.jpg"

function aboutDetail() {
  return (
   

      <div className="box_about_detail"> 
   
    <div className="box_about_detail_img">
            <img className="about_detail_img" height="100px" src={logo} alt="not found"/>
    </div>    
            <div className="box_desc"> 
            <p className="animate__animated animate__shakeY">Desarrollador Web Full Stack</p>
            </div>
        <p className="parrafo_desc">
         Bienvenido/a Countries App, gracias por ver este proyecto individual. 
         Soy un Full Stack Developer, cuya formación la conseguí en Henry.
         Respecto al proyecto realizado en dicha academia se hizo uso de varias tecnologías tantos del lado Frontend (React,Redux,JavaScript,Html), 
         como del Backend (express) y base de datos (Sequelize-Postgresql).
         En forma resumida, ésta app nos trae las banderas y paises del globo terráqueo por medio de filtrados y ordenamientos.
        </p>
        
        </div>

  )
  
}

export default aboutDetail