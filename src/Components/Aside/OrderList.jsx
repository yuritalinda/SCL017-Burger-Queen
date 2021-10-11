import React from 'react';
import { Form } from 'reactstrap';
import '../Styles/OrderList.css';

export default function OrderList() {
  return (

  <Form action="" className="form-container">
  

      <div className="form-header">

        <div id="label-stye">
          <label for="user-name">Cliente: </label>
          <input type="text" name="user-name" value="" placeholder="Mary Yuri" />
        </div>
        <div id="label-stye">
          <label for="table-number">Mesa: </label>
          <input type="text" name="table-number" value="" placeholder="#num" />
        </div>

      </div>  
      <div className="form-main">

        <div>
          <label for="plate">Plato </label>
          <input type="text" name="plate" value="" placeholder="Sandwich con jamon y queso"/>
        </div>
        <div>
          <label for="cant">Cant. </label>
          <input type="text" name="cant" value="" placeholder="1"/>
        </div>
        <div>
          <label for="price">Precio </label>
          <input type="text" name="price" value="" placeholder="$. 10"/>
        </div>

      </div> 

      <h1>
        <i className="far fa-credit-card"></i> Subtotal
      </h1>

      <div className="subtotal">
        <label for="subtotal-price">$.  </label>
        <input type="text" name="subtotal-price"/>
      </div>
      
      <div className="btns">
        <button className="reset-btn">Reiniciar el pedido</button>
        <button className="send-btn">Enviar a la cocina</button>
      </div>

    </Form>
    

  )
}
