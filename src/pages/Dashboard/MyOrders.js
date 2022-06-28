import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders,setOrders] = useState([])
    const myOrders = orders.filter(order=>order.email===user.email);
useEffect(()=>{
    fetch(`http://localhost:5000/orders`)
    .then(res =>res.json())
    .then(data=>setOrders(data))
},[])

     const handleCancle =(ider)=>{
         const id = ider;
         const data = {id:id}
        
        const proceed = window.confirm('Are you sure?');
        
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(data),
              
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(service => service._id !== id);
                setOrders(remaining);
            })
        }
     }
    return (
        <div>
        <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>TotalPrice</th>
                            <th>paymennt</th>
                            <th>optimagation</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td>{a.price * a.quantity}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.paid}</span></p>
                                    </div>}
                                </td>             
         <td>{( !a.paid) &&<button onClick={()=>handleCancle(a._id)} className='btn btn-sm btn-error'>cancle</button>}</td>
                                </tr>)
                        }
                        </tbody>

                    </table>
                    </div>
        </div>
    );
};

export default MyOrders;