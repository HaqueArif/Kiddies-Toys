import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddaToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo_url = form.photo_url.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const detail_description = form.detail_description.value;

        const newToy = { photo_url, name, seller_name, seller_email, category, price, rating, available_quantity, detail_description };
        console.log(newToy);

        // Send data to the server site
        fetch('https://little-wonder-toys-server-haquearif143-gmailcom.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Toy has been added',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
        form.reset();

       
    }

    useEffect(()=>{
        document.title = 'KIDDIES | Add Toys'
      },[]);


    return (
        <div className="mt-20 mb-32">
            <h2 className="text-center text-3xl mb-5">Please fill out this form with information about your toys.</h2>
            <form onSubmit={handleAddToy}>
                <div className='max-w-5xl  shadow-md bg-base-100 rounded-2xl mx-auto pt-2 pb-10 px-2  '>
                    <div className=' rounded-2xl px-5 md:px-8 py-8'>
                        <div className="md:flex  justify-between gap-3">
                            <div className='flex md:w-full flex-col mb-3'>
                                <label htmlFor="photo_url">Photo URL</label>
                                <input type="text" name='photo_url' placeholder='Photo URL' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                            </div><div className='flex md:w-full  flex-col mb-3'>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' placeholder='Name' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                            </div>
                        </div>

                        <div className="md:flex  justify-between gap-3">
                            <div className='flex md:w-full flex-col mb-3'>
                                <label htmlFor="seller_name">Seller Name</label>
                                <input type="text" name='seller_name' placeholder='Seller Name' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' defaultValue={user?.displayName} disabled={user?.displayName ? true : false} required />
                            </div><div className='flex md:w-full  flex-col mb-3'>
                                <label htmlFor="seller_email">Seller email</label>
                                <input type="email" name='seller_email' placeholder='Seller email' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' defaultValue={user?.email} disabled={user?.email ? true : false} required />
                            </div>
                        </div>

                        <div className="md:flex  justify-between gap-3">
                            <div className='flex md:w-full flex-col mb-3'>
                                <label htmlFor="category">Sub Category</label>
                                <select name="category" className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required >

                                    <option value="Transformers">Transformers</option>
                                    <option value="Star Wars">Star Wars</option>
                                    <option value="Marvel">Marvel</option>
                                </select>
                            </div>
                            <div className='flex md:w-full  flex-col mb-3'>
                                <label htmlFor="price">Price</label>
                                <input type="text" name='price' placeholder='Price' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                            </div>
                        </div>

                        <div className="md:flex  justify-between gap-3">
                            <div className='flex md:w-full flex-col mb-3'>
                                <label htmlFor="rating">Rating</label>
                                <input type="text" name='rating' placeholder='Rating' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
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
                        <button className=' btn w-full bg-[#a5c927] hover:bg-[#ffc22c] border-none'>Add Toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddaToy;