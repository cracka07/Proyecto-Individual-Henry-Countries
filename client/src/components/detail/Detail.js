import React,{useEffect} from 'react'
import "../../styles/Detail.css"
import {useDispatch,useSelector} from "react-redux"
import { getCountriesId } from '../../actions/actions'
import { useParams } from 'react-router-dom'
import Volver from '../volver/Volver'


function Detail() {
    const {id}=useParams()
  
    const dispatch=useDispatch()
    const pais=useSelector(state=>state.countriesDetail)

    useEffect(()=>{
        dispatch(getCountriesId(id))
    },[id,dispatch])

   


  return (
    <div className="box_detail">  
        <div className="box_hijo_detail">
           
            {
             pais &&
              <div>
                <h3>{pais.id}</h3> 
               
                <h3>{pais.name}</h3>
        
                </div>
            }
        </div>

        
        <div className="box_hijo_detail_img">
            {
              pais &&
              <div className="box_img">
            <img src={pais.flags} alt="img not found"/>
             </div>
           }
        </div>

 <table border="2px" className="box_detail_tabla">
       <tr>
          <th>Continente</th>
          <th>Capital</th>
          <th>Subregión</th>
          <th>Área</th>
          <th>Población</th>
      </tr>
      
        {
          pais &&
       <tr className="box_map_detail">
          <td>{pais.continents}</td>
          <td>{pais.capital}</td>
          <td>{pais.subregion ? pais.subregion : "Sin Datos"}</td>
          <td>{pais.area + " " + "km2"}  </td>
          <td> {pais.population}</td>
          </tr>   
       
      
}

        </table>
       
        <table border="2px" className="box_detail_segunda_tabla">
       <tr>
          <th className="th_detail_activities">Actividades</th>
        </tr>
        
          <tr className="tr_detail_activities">
            {
              
                  pais.activities?.map(el=>
                    <div>
                    <p className="p_detail_act"> {el.name}</p>
                    <p>Dificultad: {el.dificult}</p>
                    <p>Duración:{el.duration}</p>
                    <p>Temporada:{el.season}</p>
                    </div>
                    )

                    
            }
            
          </tr>
        </table>
         <Volver/>
        </div>       
  )         
}

export default Detail