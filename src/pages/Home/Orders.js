import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchesDetail from '../../hooks/usePurchesDetail';

const Orders = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    const id = useParams();
    const ider = id.id;
  
  const [pursesService]=usePurchesDetail(ider)
    const onSubmit =data=>{
        console.log(data);
    }
    return(
        <div className='border border-red-500'>

            <h1 className='text-6xl center'>thyis is orders</h1>
            <div className='mx-auto w-50'>
        <h3 className='text-center mb-3'>please add you product</h3>
        
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <div  className='w-1/2 mx-auto gap-9'>

           
                <input className=' input borderm br w-full  input-bordered input-accen ' required value={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                <input className='input w-full input-bordered input-accen'  required placeholder='Price' value={pursesService.price} type="number" {...register("price")} />
                <input className='input w-full input-bordered input-accen' required placeholder='quantity' type="number" {...register("quantity")} />
                <input className='input w-full input-bordered input-accen' required placeholder='Your addressL' type="text" {...register("img")} />
                <input className='input w-full input-bordered input-accen' required value={user.email} type="text" {...register("email")} />
                <input className='btn btn-primary' type="submit" value="Add Service" />
               
                </div>
            </form>
            
    </div>
        </div>
    )
};

export default Orders;