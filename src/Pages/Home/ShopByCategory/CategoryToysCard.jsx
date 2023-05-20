import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CategoryToysCard = ({ toy }) => {

    const { user} = useContext(AuthContext);
    const { _id, photo_url, name, price, rating } = toy;


    const handleAlert = ()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details',
              })
        }
    }


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
                    <Link to={`/toyDetails/${_id}`}>
                        <button onClick={handleAlert} className="btn bg-[#a5c927] hover:bg-[#ffc22c] border-none ">View Details</button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default CategoryToysCard;