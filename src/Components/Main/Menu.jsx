import '../Styles/menu.css'
import React  from "react";
import { useState } from "react";
import {
  CardImg, CardBody,
  CardTitle,
  Button,
  CardSubtitle
} from 'reactstrap';
import axios from "axios";


export default function Menu (){

  const [menu, setMenu] = useState([]);


  const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response=>{
     
      setMenu(response.data) //".data" en este caso es una propiedad de AXIOS, no tienen nada que ver con el arreglo de datos.
      
      
    })
    .catch(error=>{
      console.log(error);
    });

  }

  const addPlate = ()=>{
    alert('Has agregado un plato')
  }


;

  return(
    <main className="main-container" >
       <Button block className="menu-div" onClick={ getData }>Desayuno</Button> 
      
      {menu.map((dato) => (
        <CardBody 
        onClick={ addPlate }
        className="card-body"  
        key={dato.id}
        >
        <CardImg className="card-img" src={dato.thumbnailUrl}></CardImg>
        <CardTitle className="card-plate">Titulo del plato</CardTitle>
        <CardSubtitle className="card-price">$ 3.50</CardSubtitle>
        </CardBody>
      ))}

    </main>
  )
}