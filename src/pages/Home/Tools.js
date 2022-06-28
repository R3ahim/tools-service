import React, { useEffect, useState } from 'react';
import ToolsService from './ToolsService';

const Tools = () => {
    const [services,setService]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    console.log(services);
    return (
        <div className='my-28'>           
             <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map(service=><ToolsService
                service={service}
                ></ToolsService>)
                
            }
        </div>
        </div>
    );
};

export default Tools;