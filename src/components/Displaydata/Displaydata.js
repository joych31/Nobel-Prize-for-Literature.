import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Displaydata.css'

const Displaydata = (props) => {
    // console.log(props);
    // distructuring
    const {image,name,country,area,year,earn} = props.detail;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
     <div className='displaydata'>

         {/* //display Data */}
          <img src={image} width='120px' height='110px' alt=""/> 
            <h3>Name: {name}</h3>
            <h4>Country: {country}</h4>
            <h4>Literary area: {area}</h4>
            <h4>Year: {year}</h4>
            <h4>Earn: ${earn}</h4>
            
            {/* event handaler */}
            <button 
            onClick={() => props.handleAddToCart(props.detail)}
            className='add_btn'
            
            >{element}Add to cart</button>

    </div>

    );
};

export default Displaydata;
