import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


// fake data
// const services= [
//     {name : 'Replace Tire' , price: 2000, time: 2, img:'https://i.ibb.co/12cQT8g/1.jpg' },
//     {name : 'Matchine Change' , price: 2000, time: 2, img:'https://i.ibb.co/fp63MG8/2.jpg' },
//     {name : 'Pouring Oil' , price: 2000, time: 2, img: 'https://i.ibb.co/7jxQGF8/3.jpg'},
//     {name : 'Change Cable' , price: 2000, time: 2, img:'https://i.ibb.co/pWY61v6/4.jpg' },
//     {name : 'Starting Machine' , price: 2000, time: 2, img:'https://i.ibb.co/gWjLfSX/5.jpg' },
//     {name : 'Clean Tools' , price: 2000, time: 2, img:'https://i.ibb.co/mcKc4FH/6.jpg' }
   
// ]

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
    <div>
        <h2  className ="text-primary mt-5">Our Services</h2>
            <div className="service-container m-4">
              
              {
                   services.map(service => <Service  key ={service.id}
                    service={service}
                   ></Service>)
              }
            </div>
    </div>
    );
};

export default Services;