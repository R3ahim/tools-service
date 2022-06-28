import React from 'react';
import tools from '../img/tools.png'

const Instraction = () => {
    return (
        <div>
         <div class="hero bg-green-500">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={tools} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-white">Dont't Wait </h1>
      <h1 class="text-5xl font-bold text-yellow-500">Dont Confuse</h1>
      <p class="py-6 text-white">Dont wait and don't confuse which product for buy and any one choose from this product and enjoy and work hard for success.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Instraction;