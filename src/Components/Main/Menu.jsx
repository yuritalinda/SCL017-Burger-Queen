import React from "react";
import { useState } from "react";
import { Button,Card, CardTitle, CardText } from 'reactstrap';
import axios from "axios";


export default function Menu (){

 
  const [users,setUsers]=useState([]);

  const getUsers=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
   .then(response=>{
     console.log(response.data);
     setUsers(response.data)
   })
   .catch(error=>{
     console.log(error);
   });

  }

 

  return(
    <header>
      <Button color="success" onClick={getUsers}>boton</Button>
     {
       users.map((user)=>(
        <Card key={user.id}>
          <CardTitle>{user.name}</CardTitle>
          <CardText>{user.email}</CardText>
        </Card>
       ))
     }
    </header>
  )
}