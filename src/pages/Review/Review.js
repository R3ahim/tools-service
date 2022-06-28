import React from 'react';
import { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [reviews,setReveiw] = useState([]);
    // console.log(review);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReveiw(data))
    })
    // console.log(reviews);

    return (
        <div className='my-28'>           
        <div className='text-center'>
       <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
       <h2 className='text-4xl'>Services We Provide</h2>
   </div>
   <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
       {
           reviews.map(service=><ReviewDetail
           key={service._id}
           service={service}
           ></ReviewDetail>)
       }
   </div>
   </div>
    );
};

export default Review;