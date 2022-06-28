import React from 'react';

const ReviewDetail = ({service}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={service.img} style={{width:'350px',height:'300px'}} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{service.name}</h2>
    <h2 class="card-title">{service.name}</h2>
    <h2 class="card-title">{service.email}</h2>
    <p>{service.comment}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ReviewDetail;