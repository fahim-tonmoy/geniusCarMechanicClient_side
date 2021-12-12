import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset, defaultValues } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://thawing-reaches-90123.herokuapp.com/services', data)
        .then( res => {
            if (res.data.insertedId) {
                alert('Added Successfully!');
                reset(defaultValues);
            }
        })
  };
    return (
        <div>
            <h2 className='my-3'>add service</h2>
            <form className='my-4 d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-4' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} style={{ width: '400px', height: '40px' }} /> 
                <br />
                <textarea className='my-4' placeholder='Description' {...register("description")} style={{ width: '400px', height: '100px' }} />
                <br />
                <input className='my-4' placeholder='Price' type="number" {...register("price")} style={{ width: '400px', height: '40px' }} />
                <br />
                <input className='my-4' placeholder='Image Url' {...register("img")} style={{ width: '400px', height: '40px' }} />
                <br />
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddService;