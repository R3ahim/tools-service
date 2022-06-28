import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsService = ({service}) => {
  // console.log(service._id);
  const navigate= useNavigate()
  const handleNavigateBtn=(id)=>{

    navigate(`service/${id} `)

  }
  console.log(service.img);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={service.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{service.name}</h2>
    <h2 class="card-title">{service.price}</h2>
    <h2 class="card-title">{service.quantity}</h2>
    <p>{service.name}</p>
    <div class="card-actions justify-end">
      <button onClick={()=>handleNavigateBtn(service._id)} class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ToolsService;