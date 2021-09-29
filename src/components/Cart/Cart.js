import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart}= props;

    let total = 0;
    for (const detail of cart){
        total = total + detail.earn;
    }
       
    
    
    // const name = cart.map(name=>name.name);
    // console.log("kkkadajhdajjao",name);
    // const area = cart.map(area=>area.area);

    return (
//cart details and total
      <div>
            <div className="show-data">
           <h2>Guest List: {props.cart.length}</h2>
            <h2>Total Cost:${total}</h2>
         </div>
          <div className="cart_data">

          {
              cart.map(name=> <h4>{name.name}</h4>)
          }
       
          </div>
      </div>
    );
};

export default Cart;