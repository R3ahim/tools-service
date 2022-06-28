import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchesDetail from '../../hooks/usePurchesDetail'
import Loading from '../Shared/Loading';
const Purchase = () => {
  const [user] = useAuthState(auth);
  console.log(user);

    const id = useParams();
    const ider = id.id;
  
  const [pursesService]=usePurchesDetail(ider)




  const navigate = useNavigate();
  const handleNavigate=(id)=>{
    navigate('/orders/' + id)
  }


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    const url = ` http://localhost:5000/orders`;
    console.log(data.name,url);
    fetch(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    } )
};


  



    return (
        
          <div class="hero min-h-screen bg-base-200">
            <h1>alsdjflsj</h1>
  <div class="hero-content flex-col lg:flex-row">
    <img src={pursesService.img} class=" rounded-lg shadow-2xl w-1/2" />
    <div>

            <div >
        
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <div  className=' w-2/3  gap-9'>

           
                <input className=' input borderm br w-full  input-bordered input-accen ' required value={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                <input className='input w-full input-bordered input-accen'  required placeholder='Price' value={pursesService.price} type="number" {...register("price")} />
                <input className='input w-full input-bordered input-accen' required placeholder='quantity' type="number" {...register("quantity")} />
                <input className='input w-full input-bordered input-accen' required placeholder='Your Address' type="text" {...register("address")} />
                <input className='input w-full input-bordered input-accen' required value={user.email} type="text" {...register("email")} />
                <input className='btn btn-primary' type="submit" value="Order now" />
               
                </div>
            </form>
            
    </div>
        </div>
</div>
        </div>
    );
};

export default Purchase;