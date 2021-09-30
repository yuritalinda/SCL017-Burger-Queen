import data from './menu-data.js'
import '../Styles/Menu.css'
import React  from "react";
import { useState } from "react";
import {
  CardImg, CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';




export default function Menu (){

  const [menu, setMenu] = useState([]);
  const dataFile = data.menu;
  


  const getData = ()=>{
   
    setMenu(dataFile);

  }

  const addPlate = ()=>{
    alert('Has agregado un plato')
  }


;

  return(
    <main className="main-container" >
       <button type="text" onClick={ getData }> Boton</button> 
       <div className="menu-div">Desayuno</div>

        {menu.filter(menu => menu.tipo === "desayuno" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            <CardImg className="card-img" src={dato.imagen}></CardImg>
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

       <div className="menu-div">Almuerzo / Cena</div>

        {menu.filter(menu => menu.tipo === "almuerzo" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            <CardImg className="card-img" src={dato.imagen}></CardImg>
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

        <div className="menu-div">Extras</div>

        {menu.filter(menu => menu.tipo === "extra" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            <CardImg className="card-img" src={dato.imagen}></CardImg>
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

        <div className="menu-div">Acompañamientos</div>

        {menu.filter(menu => menu.tipo === "acompañamientos" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            <CardImg className="card-img" src={dato.imagen}></CardImg>
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

       <div className="menu-div">Bebidas</div>

        {menu.filter(menu => menu.tipo === "bebida" ).map((dato) => (

            <CardBody onClick={ addPlate } className="card-body" key={dato.id}>
            <CardImg className="card-img" src={dato.imagen}></CardImg>
            <CardTitle className="card-plate">{dato.producto}</CardTitle>
            <CardSubtitle className="card-price">$. {dato.precio}</CardSubtitle>
            </CardBody>


            ))}

      


      

    </main>
  )
}