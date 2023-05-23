import { useEffect, useState } from "react";
import './ShopByCategory.css'
import CategoryToysCard from "./CategoryToysCard";


const ShopByCategory = () => {

    const [toys, SetToys] = useState([]);
    const [filteredToys, setFilteredToys] = useState([]);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
        fetch('https://little-wonder-toys-server-haquearif143-gmailcom.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetToys(data);
                setFilteredToys(data);
            })
    }, [])


    const handleFilter = (selectedFilter) => {

        setFilter(selectedFilter);
        if (selectedFilter === 'all') {
            setFilteredToys(toys);
        } else {
            const filteredToys = toys.filter(toy => toy.category === selectedFilter);
            setFilteredToys(filteredToys);
        }
    }



    return (
        <div className="mt-60 my-40 px-2 md:px-20">
            <div className="py-20 md:py-40 shadow-sm bg-base-100 rounded-2xl">
                <h2 className="text-3xl md:text-5xl text-center font-semibold mb-20 ">Shop by Category</h2>

                <div className='flex flex-wrap md:flex-row gap-3 justify-center mb-10'>
                    <button
                        className={`btn-custom  ${filter === 'all' ? 'bg-[#a5c927] text-white' : 'bg-slate-50 text-gray-700'}`}
                        onClick={() => handleFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`btn-custom ${filter === 'Transformers' ? 'bg-[#a5c927] text-white' : 'bg-slate-50 text-gray-700'}`}
                        onClick={() => handleFilter('Transformers')}
                    >
                        Transformers
                    </button>
                    <button
                        className={`btn-custom ${filter === 'Star Wars' ? 'bg-[#a5c927] text-white' : 'bg-slate-50 text-gray-700'}`}
                        onClick={() => handleFilter('Star Wars')}
                    >
                        Star Wars
                    </button>
                    <button
                        className={`btn-custom ${filter === 'Marvel' ? 'bg-[#a5c927] text-white' : 'bg-slate-50 text-gray-700'}`}
                        onClick={() => handleFilter('Marvel')}
                    >
                        Marvel
                    </button>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 px-2 md:px-0 md:mx-3 lg:mx-20">
                    {
                        filteredToys.map((toy) => (
                            <CategoryToysCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryToysCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;