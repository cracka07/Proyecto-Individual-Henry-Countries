import React, { useState,useEffect } from "react";
import "../../styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, ordenAlfabet, ordenPoblacion } from "../../actions/actions";
import Country from "./Country";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../../img/planeta.jpg"
import Continent from "../filtros/Continent";
import Activity from "../filtros/Activity";
import Page from "../paginado/Page";




function Home() {
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.countries);
 
   
   
  let country=[]
  const [pop,setPop]=useState("")
  const [order,setOrder]=useState("")
  
  const [page,setPage]=useState(1)//pagina actual
  const [paisPage, setPaisPage]=useState(10)
  const indexLastPais=page * paisPage
  const indexFirstPais=indexLastPais - paisPage
 // const country=paises.slice(indexFirstPais,indexLastPais)
  if(page===1){
     country=paises.slice(indexFirstPais,indexLastPais-1)
  }else{
     country=paises.slice(indexFirstPais,indexLastPais)
  }

  const paginado=(numPage)=>{
      setPage(numPage)
  }

  


  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


 
  const handledSort=(e)=>{
    
      dispatch(ordenAlfabet(e.target.value))
      setOrder(e.target.value)
  
  }
const handledSortPop=(e)=>{
    dispatch(ordenPoblacion(e.target.value))
  setPop(e.target.value)
  }
  

 

  return (
    <div className="box_home">
      <div className="box_busqueda">
      <div className="button_volver"> 
       <Link to="/">
       <button>Atras</button>
     </Link>
 </div>
        <Search />

        <div className="box_home_btn">
          <Link to="/createActivities">
            <button>Crear Actividades</button>
          </Link>
        </div>
        <div className="box_planet">
        <img className="planet_home" src={logo} alt="earth"/>
        </div>

      </div>
      <div className="box_filter_order"> 
      <Continent />
      <Activity/>
     <div className="box_order_alfabet">
         <h5>orden alfabético</h5>
         <select className="order_alfabet" onChange={(e)=>handledSort(e)}>
         <option value="asc">Ascendiente</option>
         <option value="desc">Descendiente</option>
         </select>
    </div>

    <div className="box_order_population">
           <h5>habitantes</h5>
         <select className="order_population" onChange={(e)=>handledSortPop(e)}>
         <option value="asc">Ascendiente</option>
         <option value="desc">Descendiente</option>
         </select>
         </div>
    </div>
   
     <Page
        paisPage={paisPage}
        paises={paises.length}
        paginado={paginado}
      /> 
    
    
      <ul className="unordered_list_paises">
        
        {country.map((el) => (
          
          <div className="box_countries_map">
            <Country
              key={el.id}
              id={el.id}
              name={el.name}
              flag={el.flags}
              poblacion={el.population + " habitantes"}
              continent={el.continents}         
            />
           
          </div>
        ))}
      </ul>
     
    </div>
  );
}

export default Home;
