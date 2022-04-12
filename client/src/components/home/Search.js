import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { getCountriesName } from '../../actions/actions'
import "../../styles/Search.css"

export function valida(input){
  let errors={};
  if(/^[0-9]/.test(input.name)){
      errors.name="Ingrese un nombre de país válido"
      
  }
  return errors
}

function Search() {

  const dispatch=useDispatch()
 
 const [error,setError]=useState({})
 const [input, setInput]=useState({
   name:""
 })
 const handleChange=(e)=>{
   setInput(e.target.value)
   dispatch(getCountriesName(input))
   let obj=valida({name:e.target.value})
   setError(obj)

 }



  return (
    <div>
       <div className="box_hijo_home">
             
             <input  onChange={(e)=>handleChange(e)} type="text" name="name" value={input.name} placeholder="Ingrese valor"/>
            <div className="box_valida_search">
              {
                error.name && <div className="peligro">{error.name}</div>
              } 
              </div>      
        </div>

    </div>
  )
}

export default Search