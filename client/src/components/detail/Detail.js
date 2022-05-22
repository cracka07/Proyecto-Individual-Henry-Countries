import React,{useEffect} from 'react'
import "../../styles/Detail.css"
import {useDispatch,useSelector} from "react-redux"
import { getCountriesId } from '../../actions/actions'
import {  useParams } from 'react-router-dom'
import Volver from '../volver/Volver'
import logo from "../../img/school_education_globe_world_countries.png"

function Detail() {
    const {id}=useParams()
  
    const dispatch=useDispatch()
    const pais=useSelector(state=>state.countriesDetail)

    useEffect(()=>{
        dispatch(getCountriesId(id))
    },[id,dispatch])

   
   
    

  return (
    <div className="box_main_principal">  
   
         
      
           {
   pais &&
   <div className="box_titulos" >
        <h1 className="animate__animated animate__backInDown">{pais.name}</h1> 
      <h3 className="animate__animated animate__backInDown">{pais.id}</h3> 

     </div>
           }
            
             
            {
              pais &&
              
              <div className="box_img">
            <img src={pais.flags} alt="img not found"/>
          
             </div>
             
           }
       <div className="volver_a">  <Volver/> </div>

      {
        pais &&
        <div className="box_main_detail">
        <div className="box_detail_map">
        <p className="parr_name">Continente</p>
        <p className="parr_detail">{pais.continents}</p>
        </div>
        <div className="box_detail_map">
        <p className="parr_name">Capital</p>
        <p className="parr_detail_uno">{pais.capital}</p>
        </div>
        <div className="box_detail_map">
        <p className="parr_name">Subregión</p>
        <p className="parr_detail_uno">{pais.subregion ? pais.subregion : "Sin Datos"}</p>
        </div>
        <div className="box_detail_map">
        <p className="parr_name">Área</p>
        <p className="parr_detail_uno">{pais.area +" km2"}  </p>
        </div>
        <div className="box_detail_map">
        <p className="parr_name">Población</p>
        <p className="parr_detail"> {pais.population}</p>
        </div>
        <div className="box_detail_map">
        <p className="parr_name">Actividades</p>
        <img className="img_detail_mg" width="40px" height="30px"src={logo} alt="not found"/>
          </div>
        </div>
      }
      <div className="box_act">
              {
                pais.activities?.map(el=>
                 
                   
                   <ul className="box_act_uno">
                   <div className="box_name_act">{el.name.toUpperCase()}</div>
                   <li className="parr_act">Dificultad: <div className="det-span">{" " + el.dificult}</div></li> 
                   <li className="parr_act">Duración:<div className="det-span-i">{" " + el.duration}</div></li>
                   <li className="parr_act">Temporada: <div className="det-span-ii">{" " + el.season}</div></li> 
                   </ul>
                  
                  )
              }
              
          </div>
          
        </div>  
           
  )       
}

export default Detail