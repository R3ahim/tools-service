import { CardCvcElement } from '@stripe/react-stripe-js';
import React from 'react';

const Provide = () => {
    const infor =[
    {img:'https://reactheme.com/products/wordpress/finanix/wp-content/uploads/2022/04/service-bag.jpg',head:'Earn Money',descrip:'We help How to eanr money on this website '},
    {img:'https://reactheme.com/products/wordpress/finanix/wp-content/uploads/2022/04/service-book.jpg',head:'Earn Money',descrip:'We help How to eanr money on this website '},
    {img:'https://reactheme.com/products/wordpress/finanix/wp-content/uploads/2022/04/servicee-user.jpg',head:'Earn Money',descrip:'We help How to eanr money on this website '},

]
    return (
        <div className='flex gap-3'>
          {infor.map(info=>
        <div className={`card lg:card-side bg-white shadow-xl `}>
        <figure className='pl-5 pt-5'>
            <img src={info.img} alt="Album" />
        </figure>
        <div className="card-body text-black">
            <h2 className="card-title">{info.head}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
        </div>
    </div>
              
       
          )}
        </div>
    );
};

export default Provide;