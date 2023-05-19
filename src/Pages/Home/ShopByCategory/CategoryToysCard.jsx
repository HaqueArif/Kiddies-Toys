import React from 'react';
import { Link } from 'react-router-dom';

const CategoryToysCard = ({toy}) => {

    const { _id, photo_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description, category } = toy;
    
    return (
    
            <div className="card card-compact mx-auto bg-base-100 shadow-xl">
                <div className='p-5 rounded-xl shadow'>
                <figure><img src={photo_url} alt="toys" className='rounded-xl' /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                    <Link to= {`/toyDetails/${_id}`}>
                    <button className="btn bg-[#a5c927] hover:bg-[#ffc22c] border-none ">View Details</button>
                </Link>
                        
                    </div>
                </div>
            </div>
    
    );
};

export default CategoryToysCard;