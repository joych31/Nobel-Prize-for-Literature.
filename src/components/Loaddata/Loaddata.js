import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Displaydata from '../Displaydata/Displaydata';
import './Loaddata.css'


const Loaddata = () => {
 
    // state declare
    const [details, setDetails] = useState([]);
    const [cart, setCart] = useState([]);

    // API load from local data
   useEffect(()=>{
        fetch('./novelprice.JSON')
        .then (res =>res.json())
        .then(data => setDetails(data))
    },[])

    // creating a new array
    const handleAddToCart = (detail) =>{
        // console.log(detail);
        const newCart = [...cart, detail];
        setCart(newCart);
    }
    return (
        <div className='loaddata'>
            <div className='detail'>
                {
                details.map(detail=> <Displaydata
                    key ={detail.year} 
                    detail={detail}
                    handleAddToCart={handleAddToCart}
                     
                     ></Displaydata>) 
                }
            </div>

          <div className="cart-container">

          
            <Cart cart={cart}></Cart>

           </div>
        </div>
    );
};

export default Loaddata;