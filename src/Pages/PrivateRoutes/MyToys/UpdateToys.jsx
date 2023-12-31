import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import loadingGif from '../../../assets/ohters/loading.gif'

const UpdateToys = () => {
    const { loading } = useContext(AuthContext);
    const toy = useLoaderData();
    const { _id, photo_url, name, seller_name, seller_email, category, rating} = toy;

    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
        <img src={loadingGif} alt="" />
    </div>
    }
    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const available_quantity = form.available_quantity.value;
        const detail_description = form.detail_description.value;

        const updatedToy = { price, available_quantity, detail_description };
        console.log(updatedToy);

        // Send data to the server site
        fetch(`https://little-wonder-toys-server-haquearif143-gmailcom.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy has been Updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        form.reset();
        
    }


    return (
        <div className='mt-10'>
            <form onSubmit={handleUpdateToy}>
                <div className='max-w-5xl shadow-md bg-base-100 rounded-2xl mx-auto pt-2 pb-10 px-2  '>
                    <div className=' rounded-2xl px-5 md:px-8 py-8'>
                        <div className='opacity-60'>
                            <div className="md:flex  justify-between gap-3">
                                <div className='flex md:w-full flex-col mb-3'>
                                    <label htmlFor="photo_url">Photo URL</label>
                                    <input type="text" defaultValue={photo_url} className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' disabled required />
                                </div><div className='flex md:w-full  flex-col mb-3'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" defaultValue={name} className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' disabled required />
                                </div>
                            </div>

                            <div className="md:flex  justify-between gap-3">
                                <div className='flex md:w-full flex-col mb-3'>
                                    <label htmlFor="seller_name">Seller Name</label>
                                    <input type="text" className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' defaultValue={seller_name} disabled required />
                                </div><div className='flex md:w-full  flex-col mb-3'>
                                    <label htmlFor="seller_email">Seller email</label>
                                    <input type="email" className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' defaultValue={seller_email} disabled required />
                                </div>
                            </div>

                            <div className="md:flex  justify-between gap-3">
                                <div className='flex md:w-full flex-col mb-3'>
                                    <label htmlFor="category">Sub Category</label>
                                    <select name="category" defaultValue={category} className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' disabled required >
                                        <option value="Transformers">Transformers</option>
                                        <option value="Star Wars">Star Wars</option>
                                        <option value="Marvel">Marvel</option>
                                    </select>
                                </div>
                                <div className='flex md:w-full flex-col mb-3'>
                                    <label htmlFor="rating">Rating</label>
                                    <input type="text" defaultValue={rating} className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' disabled required />
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-5 mb-10'>
                            <p className='text-3xl mb-3 font-semibold'>Update Toy</p>
                            <span className='text-secondary '>You can update only</span>
                            <span className='text-warning font-bold'> Price</span>,
                            <span className='text-warning font-bold'> Available Quantity</span>,
                            <span className='text-warning font-bold'> Detail Description</span>
                        </div>
                        <div className="md:flex  justify-between gap-3">
                            <div className='flex md:w-full  flex-col mb-3'>
                                <label htmlFor="price">Price</label>
                                <input type="text" name='price' placeholder='Price' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                            </div><div className='flex md:w-full  flex-col mb-3'>
                                <label htmlFor="available_quantity">Available quantity</label>
                                <input type="text" name='available_quantity' placeholder='Available quantity' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                            </div>
                        </div>

                        <div className="md:flex  justify-between gap-3">
                            <div className='flex md:w-full flex-col mb-3'>
                                <label htmlFor="detail_description">Detail Description</label>
                                <input type="text" name='detail_description' placeholder='Detail Description' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 px-6'>
                        <button className=' btn w-full bg-[#a5c927] hover:bg-[#ffc22c] border-none'>Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;