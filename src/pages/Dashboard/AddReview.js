import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const imageStorageKey='4295ac4d47b569312bea67b440cdbdbb';
const [user] = useAuthState(auth)
  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(result =>{
        if(result.success){
            const img = result.data.url;
            const reviews = {
                name: data.name,
                email: data.email,
                comment: data.comment,
                rathing: data.rathing,
                img: img
            }
            // send to your database 
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(reviews)
            })
            .then(res =>res.json())
            .then(inserted =>{
                if(inserted.insertedId){
                  alert('true and succes')
                    reset();
                }
                else{
                            alert('hello flase')
                   }
            })

        }
        
    })}
    return (
 
 <div>
 <input type="checkbox" id="booking-modal" className="modal-toggle" />
            
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-secondary">Booking for: fe</h3>
                    <form onSubmit={handleSubmit(onSubmit)}className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text"  className="input input-bordered w-full max-w-xs" placeholder='you name' {...register("name")} />
                        <select name="slot" className="select select-bordered w-full max-w-xs" {...register("rathing")}>
                         
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                        <input type="text" disabled value={user.email}   className="input input-bordered w-full max-w-xs"  {...register("email")}/>
                        <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" {...register("comment")} />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
            </div>
 </div>

    );
};

export default AddReview;