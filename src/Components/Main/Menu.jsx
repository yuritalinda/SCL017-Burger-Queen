import data from './menu-data.js'
import '../Styles/Menu.css'
import React, { useEffect }  from "react";
import { useState } from "react";
import {
  CardImg, CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';




export default function Menu (){

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const newState = setMenu(data.menu)
    return (newState) 
  }, [])
   
  const addPlate = ()=>{
    alert('Has agregado un plato al menu')
  }
;

  return(
    <main className="main-container" >
 
       <div className="menu-div">Desayuno</div>

        {menu.filter(menu => menu.tipo === "desayuno" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

       <div className="menu-div">Almuerzo / Cena</div>

        {menu.filter(menu => menu.tipo === "almuerzo" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
           
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

        <div className="menu-div">Extras</div>

        {menu.filter(menu => menu.tipo === "extra" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

        <div className="menu-div">Acompañamientos</div>

        {menu.filter(menu => menu.tipo === "acompañamientos" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
           
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

       <div className="menu-div">Bebidas</div>

        {menu.filter(menu => menu.tipo === "bebida" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

      


      

    </main>
  )
}