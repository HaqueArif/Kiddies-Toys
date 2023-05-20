import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/myToys?seller_email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])

    return (
        <div className='mx-5 lg:mx-40 md:mx-20'>
            <h2 className="text-3xl md:text-5xl text-center font-semibold mt-10">My Toys</h2>
            <h2>New Products{myToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Photo / Name</th>
                            <th>Seller</th>
                            <th>Sub Category / Ratings</th>
                            <th>Available Quantity / Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {myToys.map((toy) => (
                            <MyToysCard key={toy._id} toy={toy}></MyToysCard>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;