import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ViewToyDetails = () => {

    const toy = useLoaderData();
    const { photo_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description } = toy;

    useEffect(()=>{
        document.title = 'KIDDIES | Toy Details'
      },[]);
    
    return (
        <div className='px-5 py-20 xl:px-20 '>
            <h2 className="text-3xl md:text-5xl text-center font-semibold mb-10">Toy Details</h2>
            <div className="card lg:card-side bg-slate-100  shadow-lg">
                <div className='p-4'>
                    <figure><img className='lg:w-[600px] xl:w-[700px] rounded-xl' src={photo_url} alt="Album" /></figure>
                </div>
                <div className="card-body md:flex justify-center items-center">

                    <div>
                        <h2 className="card-title md:text-4xl mb-5">{name}</h2>
                        <p className='md:text-2xl'><span className='font-semibold'>Seller:</span> {seller_name}</p>
                        <p className='md:text-2xl mb-1'><span className='font-semibold'>Seller email:</span>  {seller_email}</p>
                        <p className='md:text-2xl mb-1'><span className='font-semibold'>Price:</span>  ${price}</p>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <p className='md:text-2xl mb-5'><span className='font-semibold'>Available quantity:</span>  {available_quantity}</p>
                        <p className='md:text-xl mb-5'><span className='font-semibold'>Detail description:</span> {detail_description}</p>

                    </div>
                    
                    <div className="card-actions w-full">
                        <Link to='/' className='w-full text-center bg-[#a5c927] px-5 py-5 rounded-xl text-white font-semibold hover:bg-[#ffc22c]'>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewToyDetails;