import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [filter, setFilter] = useState('Default');

    const url = `https://little-wonder-toys-server-haquearif143-gmailcom.vercel.app/myToys?seller_email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])


    const handleFilter = (selectedFilter) => {
        setFilter(selectedFilter);

        if (selectedFilter === 'Default') {
            setMyToys(myToys);
        }
        else if (selectedFilter === 'low') {
            const sortedToys = [...myToys].sort((a, b) => a.price - b.price);
            setMyToys(sortedToys);
        }
        else if (selectedFilter === 'high') {
            const sortedToys = [...myToys].sort((a, b) => b.price - a.price);
            setMyToys(sortedToys);
        }
    };

    useEffect(()=>{
        document.title = 'KIDDIES | My Toys'
      },[]);

    return (
        <div className='mx-5 lg:mx-40 md:mx-20 mb-96'>
            <h2 className="text-3xl md:text-5xl text-center font-semibold mt-5 mb-16">My Toys</h2>

            <div className='flex justify-end mb-2'>
                <select className='px-4 py-2 text-gray-700 bg-slate-50 font-bold border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' value={filter} onChange={e => handleFilter(e.target.value)}>
                    <option value='Default'>Default</option>
                    <option value='low'>{`Price > Low to High`}</option>
                    <option value='high'>{`Price > High to Low`}</option>
                </select>
            </div>
            <div className="overflow-x-auto w-full shadow-md">
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
                            <MyToysCard key={toy._id} toy={toy} myToys={myToys} setMyToys={setMyToys}></MyToysCard>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;