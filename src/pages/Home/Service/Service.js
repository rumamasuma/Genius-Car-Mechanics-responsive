import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, img, price, time,description} = props.service;

    return (
        
        <div >
         <div className='service'>
         <img src={img} alt="" />
           <h3>{name}</h3>
           <h4>Price: $ {price}</h4>
           <h5>Time required : {time} hours</h5>
           <p className='p-5'>{description}</p>
         </div>

        </div>
    );
};

export default Service;