import React from 'react';
import offer from '../img/offer.png'
import halfOffer from '../img/50.png'
import { Link } from 'react-router-dom';

const HotOffer = () => {
    return (
        <div class="hero  bg-red-400" style={{height:'400px'}}>
  <div class="hero-content flex-col lg:flex-row">
      <img className='w-1/2' src={halfOffer} alt="" />
    <img src={offer}class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Manuefagtguring Haksaw michen</h1>
      <h1 class="text-5xl font-bold">400$</h1>
      <p class="py-6">Now its all color variant availeable on our company.</p>
      <Link to={'/service/628c983b091fb4dc3f7bbadc'} class="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default HotOffer;