import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id, name, img, price, time,description} = props.service;

    return (
        
        <div >
         <div className='service pb-3'>
         <img src={img} alt="" />
           <h3>{name}</h3>
           <h4>Price: $ {price}</h4>
           <h5>Time required : {time} hours</h5>
           <p className='p-3'>{description}</p>
           <Link to = {`/booking/${id}`}>
           <button  className='btn-primary rounded'>Book for {name.toLowerCase()}</button>
           </Link>
         </div>

        </div>
    );
};

export default Service;