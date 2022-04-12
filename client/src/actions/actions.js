import axios from "axios"
export const GET_COUNTRIES="GET_COUNTRIES"
export const GET_COUNTRIES_ID="GET_COUNTRIES_ID"
export const GET_COUNTRIES_NAME="GET_COUNTRIES_NAME"
export const FILTER_CONTINENT="FILTER_CONTINENT"
export const GET_ACTIVITY="GET_ACTIVITY"
export const ORDEN_ALFABET="ORDEN_ALFABET"
export const ORDEN_POBLACION="ORDEN_POBLACION"
export const CREATE_ACTIVITY="CREATE_ACTIVITY"
export const FILTER_ACTIVITY="FILTER_ACTIVITY"




export function getCountries(){
  return async function(dispatch){
    try{
         const pedido=await axios.get("http://localhost:3001/countries")
         return dispatch({
           type:GET_COUNTRIES,
           payload:pedido.data
         })
         
    }catch(e){
      console.log(e)
    }
  }
}


export function getCountriesId(id){
  return async function(dispatch){
    try{
        const pedido=await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch(
          {
            type:GET_COUNTRIES_ID,
            payload:pedido.data
          }
        )
    }catch(e){
      console.log(e)
    }
  }

}
export function getCountriesName(name){
  return async function(dispatch){
    try{
        const pedido=await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch(
          {
            type:GET_COUNTRIES_NAME, 
            payload:pedido.data
          }
        )
      }catch(e){
      console.log(e)
    }
  }

}
export function filterContinent(value){
  return{
    type:FILTER_CONTINENT,
    payload:value   
  }
}
export function filterActivity(value){
  return{
    type:FILTER_ACTIVITY,
     payload:value  
  }
  
}
export function ordenAlfabet(value){
  return{
    type:ORDEN_ALFABET,
    payload:value
  }
}
export function ordenPoblacion(value){
  return {
    type:ORDEN_POBLACION,
    payload:value
  }

}
export function createActivity(value){
  return async function(){
    try{
      const pedido=await axios.post("http://localhost:3001/activity/",value)
      return {type:CREATE_ACTIVITY,
              payload:pedido.data}
    }catch(e){
      console.log(e)
    }
  }
}
export function getActivity(){
  return async function(dispatch){
    try{
      const pedido=await axios.get("http://localhost:3001/activity")
      return dispatch({
        type:GET_ACTIVITY,
       payload:pedido.data
      }) 
    }catch(e){
      console.log(e)
    }
  } 
}
