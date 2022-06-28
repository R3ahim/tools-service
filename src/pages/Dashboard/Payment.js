import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4kx6SFBwBTEnoCZxxOF0ABmHlZ18L6YGO2RLzkxUVyfReUStWe8QEJr5nXt9AKHTy6SZdNEQcZB8qGAqwJ2LIo00SGJmnwiN');
// console.log(stripePromise);

const Payment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { id } = useParams();
    // console.log(id);
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {

        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>

    }
    console.log(order);  

    const handleformSumbit = data => {
        console.log(data)
        
        const infor = {
            paid:true,
            address:data.address,
            name:data.name,
            price:data.price,
            quantity:data.quantity,
            email:data.email,

        }
       
        console.log(infor);

        const url = ` http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infor)
        })
            .then(res => res.json())
            .then(result => {
                alert('your payment is sucess')
                console.log(result);
            })
    }

    return (
        <div>
            <h1>this is abdur rahim</h1>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.address}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{order.quantity}</span> at {order.slot}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* {<Elements >
                    </Elements> }  */}
                    <div class="modal-box ">
                        <form onSubmit={()=>handleformSumbit(order)}>

                            <input required type="number" style={{ width: '160' }}{...register("digit")} placeholder="Card Number" class="input  w-full " />
                            <input type="number" style={{ width: '140px' }} {...register("data")} placeholder="MM/YY/CC" class="input  w-full " />
                        <input className='btn btn-primary' type="submit"  value="Order now" />
                        </form>

                    </div>                </div>

            </div>
        </div>
    );
};

export default Payment;