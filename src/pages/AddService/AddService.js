import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services' , data)
        .then(res =>{
            // console.log(res);
            if(res.data.insertedId){
                alert('Added service successfully');
                reset();
            }
        })
    };




    return (
        <div className= "add-service">
            <h1>Please Add  a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
      <textarea {...register("description")} placeholder="Description" />
      <input type="number" {...register("price")} placeholder="Price" />
      <input type="number" {...register("time")}  placeholder="Time"/>
      <input {...register("img")}  placeholder="Img url"/>
      <input type="submit" />
       </form>
        </div>
    );
};

export default AddService;