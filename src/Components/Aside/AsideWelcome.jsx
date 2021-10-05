import React from "react";
import '../Styles/Aside.css'

export default function AsideWelcome (){
  return(
    <aside className="aside-container">
      <div className="aside-welcome-header">
        !Bienvenida!
        Para comenzar selecciona una mesa.
      </div>
    <div className="aside-welcome-logo">
      <img src="https://i.postimg.cc/139tFDqX/burger-queen-logo.png" alt="" />
    </div>
    </aside>
  )
}