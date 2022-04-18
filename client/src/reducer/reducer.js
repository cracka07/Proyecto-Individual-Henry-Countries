import {
 DELETE,
  ORDEN_ALFABET,
  ORDEN_POBLACION,
  GET_ACTIVITY,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRIES_ID,
  GET_COUNTRIES_NAME,
  CREATE_ACTIVITY,
} from "../actions/actions";

const initialState = {
  countries: [],
  countriesDetail: {},
  continentFiltro: [],
  activityFiltro:[],
  activity: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        continentFiltro: action.payload,
        activityFiltro:action.payload
      };
    case GET_COUNTRIES_ID:
      return {
        ...state,
        countriesDetail: action.payload,
      };
    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case FILTER_ACTIVITY:
      if(action.payload==="all"){
        return{
          ...state,
          countries:state.activityFiltro.filter(fy=>fy.activities.length>0)
        }
      }else{
          return{
            ...state,
            countries:state.activityFiltro.filter(fil=>fil.activities.find(f=>f.name===action.payload))
          }
      } 
    case FILTER_CONTINENT:
      if (action.payload === "all") {
        return {
          ...state,
          countries: state.continentFiltro,
        };
      } else if (action.payload === "am") {
        return {
          ...state,
          countries: state.continentFiltro.filter(
            (el) => el.continents === "Americas"
          ),
        };
      } else if (action.payload === "eu") {
        return {
          ...state,
          countries: state.continentFiltro.filter(
            (el) => el.continents === "Europe"
          ),
        };
      } else if (action.payload === "as") {
        return {
          ...state,
          countries: state.continentFiltro.filter(
            (el) => el.continents === "Asia"
          ),
        };
      } else if (action.payload === "af") {
        return {
          ...state,
          countries: state.continentFiltro.filter(
            (el) => el.continents === "Africa"
          ),
        };
      } else if (action.payload === "oc") {
        return {
          ...state,
          countries: state.continentFiltro.filter(
            (el) => el.continents === "Oceania"
          ),
        };
      } else {
        return {
          ...state,
          countries: state.continentFiltro.filter(
            (el) => el.continents === "Antarctic"
          ),
        };
      } 
    case GET_ACTIVITY: 
      return {
        ...state,
        activity: action.payload,
      };
    case ORDEN_ALFABET:
      if (action.payload === "asc") {
        return {
          ...state,
          countries: state.countries.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          }),
        };
      } else {
        return {
          ...state,
          countries: state.countries.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          }),

        };
      }
      
    case ORDEN_POBLACION:
        if(action.payload==="asc"){
            return{
                ...state,
                countries:state.countries.sort((a,b)=>
                a.population-b.population
                )
            }
            
        }else{
            return{
                ...state,
                countries:state.countries.sort((a,b)=>
                b.population-a.population)
            }
        }
        
        case CREATE_ACTIVITY:
             return{
               ...state,  
             }
        case DELETE:
          return{
            ...state,
            countries:state.countries.filter(d=>d.id!==action.payload)
          }
    default:
      return state;
  }
}
