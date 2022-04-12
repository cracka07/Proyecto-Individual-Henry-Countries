import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { filterContinent } from '../../actions/actions'
import "../../styles/Continent.css"

function Continent() {
   
  const dispatch=useDispatch()


    const handleChange=(e)=>{
        dispatch(filterContinent(e.target.value))
    }

  return (
    <div>
      <div className="box_filter_continent">
      <h5>Continente</h5>
         <select className="filter_continent" onChange={(e)=>handleChange(e)}>
           <option value="all">Todos</option>
           <option value="am">América</option>
           <option value="eu">Europa</option>
           <option value="as">Asia</option>
           <option value="af">África</option>
           <option value="oc">Oceanía</option>
           <option value="an">Antártida</option>
         </select>
         </div>
    </div>
  )
}

export default Continent