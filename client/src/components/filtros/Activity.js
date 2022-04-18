import React,{useEffect} from 'react'
import "../../styles/Activity.css"
import {useDispatch,useSelector} from "react-redux"
import {filterActivity,  getActivity} from "../../actions/actions"


function Activity() {
    const dispatch=useDispatch()
    const activities=useSelector(state=>state.activity)
   
    useEffect(()=>{
      dispatch(getActivity())
    },[dispatch])
    

  const handleChange=(e)=>{
    dispatch(filterActivity(e.target.value))
      }
  

      
  
  return (
    <div>
      <div className="box_filter_activity">
      <h5>Tipo de actividad</h5>
         <select className="filter_activity" onChange={e=>handleChange(e)} >
          <option value="all">Todos</option>
          {
            activities?.map(e=>( 
            <option  value={e.name}>{e.name}</option>
            ))}
         </select>
         </div>
    </div>
  )
}

export default Activity


