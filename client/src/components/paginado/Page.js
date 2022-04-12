import React from 'react'
import "../../styles/Page.css"


function Page(props) {
const { paisPage, paises, paginado}=props
const numPage=[] 

       for(let i=1; i<=Math.ceil(paises/paisPage); i++){
           numPage.push(i) 
       }

  return (
    <nav className="box_list_number">
        <ul className="list_unordered_page">
             {
                 numPage &&
                 numPage.map(num=>
                    
                    <li className="li_page" key={num}>
                        <button onClick={()=>paginado(num)}>{num}</button>
                    </li>
                 
                    )
             }
        </ul>
    </nav>
  )
}

export default Page