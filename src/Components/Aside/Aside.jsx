import React from "react";
import '../Styles/Aside.css';
import OrderList from "./OrderList.jsx";


export default function Aside (){
  return(
    <aside className="aside-container">
      <OrderList />
    </aside>
  )
}