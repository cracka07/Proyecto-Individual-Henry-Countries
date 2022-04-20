import React,{useState,useEffect} from 'react'
import "../../styles/Form.css"
import {useDispatch,useSelector} from "react-redux"
import Volver from '../volver/Volver'
import { createActivity, delet, getCountries } from '../../actions/actions'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

export function valida(input){
    let  tempo=document.getElementById("temp")
    let  pais=document.getElementById("count")
    let errors={}
 if(!/^[a-zA-Z]/.test(input.name)){
     errors.name="Ingrese nombre válido";

 }
if(tempo.value=="0"){
    errors.season="Seleccione una estación del año"
   
}
if(pais.value=="0"){
    errors.countryId="Seleccione un país"
  
}

 if(!/^(([1-5]))$/.test(input.dificult) ){
     errors.dificult="Ingrese número del 1 al 5";
 }
if(!/^(([1-6])$)/.test(input.duration)){
    errors.duration="Ingrese una hora entre 1 a 6 "
}
   
 return errors;

 }


function Form(props) {

    const history = useHistory();
    const dispatch=useDispatch()
    let countries=useSelector(state=>state.countries.sort((a,b)=>
         {   if(a.name>b.name){
                return 1
            }
            if(b.name>a.name){
                return -1
            }
            return 0}
    ))

    const [errors, setErrors]=useState({})
    const [input,setInput]=useState({
        name:"",
        dificult:"",
        duration:"",
        season:"",
        countryId:[]
    })


useEffect(()=>{
  dispatch(getCountries())
},[dispatch])
    
    const handleChange=(e)=>{
        setErrors(valida({...input,[e.target.name]:e.target.value}))

        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleCountry=(e)=>{
         setErrors(valida({...input,[e.target.name]:e.target.value}))

        setInput({
            ...input,
            countryId:[...input.countryId,e.target.value]
            
        })
    
    }
    const handleSeason=(e)=>{
        setErrors(valida({...input,[e.target.name]:e.target.value}))
    
         setInput({ 
             ...input,
             season:e.target.value
         })
        }

   const handleSubmit=(e)=>{
       e.preventDefault()
   
       if(!input.name ){
        setErrors(valida({...input,[e.target.name]:e.target.value}))

        Swal.fire("Campo/s inválido/s")
       }
       else  if(!Object.keys(errors).length)
      
        {  
            
            dispatch(createActivity(input));
           
            Swal.fire("Actividad creada");
            
         setInput({ 
            name:"",
            dificult:"",
            duration:"",
            season:"",
            countryId:[]
             })
          
         
            }
            
       else {
    Swal.fire("Campo/s inválido/s")
      }
     
     
   
   }     
   const handleClick=(id)=>{
  
    console.log(id)
   setInput({ 
    countryId:input.countryId.filter(f=>f !== id)
   })
     
    
    
    
    
}
  return (
      <div className="box_crear_form">
          <div className="crear_to_home">
          <Volver/>
          
          </div>
          <div className="box_form_principal">
    <fieldset > 
                    
        <legend>Crear Actividad</legend>
    <form   onSubmit={(e)=>handleSubmit(e)}>
   
        <div className="box_box"> 
           <div className="box_label">
          <label>Nombre</label>

          <input className={input.name && "danger"} type="text" name="name" placeholder="Nombre" value={input.name} onChange={(e)=>handleChange(e)}/>
            </div>
          
               <div className="box_valida_form">         
                   {
              errors.name && <p className="danger">{errors.name}</p>
                   }
                   
             </div>
             </div>
            
           
          <div className="box_box">
           <div className="box_label">
               <label>Dificultad</label>
            
               <input className={input.dificult && "danger"}  type="text" name="dificult" placeholder="dificultad" value={input.dificult} onChange={(e)=>handleChange(e)}/>
               </div>

               <div className="box_valida_form"> 
                 {
              errors.dificult && <p className="danger">{errors.dificult}</p>
                 }
          </div>
          </div>

           
          
          <div className="box_box"> 
           <div className="box_label">
               <label>Duración</label>
            
               <input className={input.duration && "danger"} type="text" name="duration" placeholder="duracion" value={input.duration} onChange={(e)=>handleChange(e)}/>
              </div > 

              <div className="box_valida_form"> 
               {
              errors.duration && <p className="danger">{errors.duration}</p>
          }
          </div>
          </div>
  
         <div className="box_box">
           <div className="box_label"> 
               <label className="label_season_form">Temporada</label>
            
               <select id="temp" className="select_season_form" name="season" value={input.season}  onChange={(e)=>handleSeason(e)}>
                <option value="0">Seleccionar...</option> 
               <option value="otoño">otoño</option>
               <option value="invierno">invierno</option>
               <option value="primavera">primavera</option>
               <option value="verano">verano</option>
               </select>
               </div> 
           { 
             <div className="box_valida_form"> 
               {
                   
              errors.season && <p className="danger">{errors.season}</p>
                }
          </div> 
          }

         
          </div>
          <div className="box_box">
              <div className="box_label">
                  <label className="label_country_form">Seleccione país</label>
                 <div>
                  <select id="count"   className="select_country_form" onChange={(e)=>handleCountry(e)}>               
                    <option value="0">Seleccionar...</option>
                  {
                       countries?.map(e=>( 
                    <option  value={e.id} >{e.name}</option>
                         ))
                 }
                   
                  </select>
                
                
                </div>
              </div>
              { 
             <div className="box_valida_form"> 
               {
                   
              errors.countryId && <p className="danger">{errors.countryId}</p>
                 }
                </div> 
                    }
          </div> 
            
           <div className="box_form_btn">
               <button  className="crear">Crear</button>
           </div> 
           <div  className="box_form_estado_country">  
    {
       input.countryId.map(el=>
             <div key={el.id}  className="box_map_form">
              <div className="box_btn_form_estado"> 
               <button  onClick={()=>handleClick(el)} className="btn_form_estado">
              x
              
             </button>  
             </div>
              <p>{el } </p> 
            
               </div> 
               
                
          )
          
      }   
        
  </div>  
    </form>
    
    </fieldset>
  
    </div>
      
    </div>
  )
}

export default Form