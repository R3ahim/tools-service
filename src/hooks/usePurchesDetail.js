
import { useEffect, useState } from "react";

const usePurchesDetail =id=>{
    const [pursesService, setPursesService] =useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/service/${id}`;
   
        fetch(url)
        .then(res=> res.json())
        .then(data => setPursesService(data));

    }, [id]);
    return [pursesService]
}
export default usePurchesDetail;