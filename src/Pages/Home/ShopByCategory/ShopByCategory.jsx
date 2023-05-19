import { useEffect, useState } from "react";
import './ShopByCategory.css'
import CategoryToysCard from "./CategoryToysCard";


const ShopByCategory = () => {

    const [toys, SetToys] = useState([]);
    const [filteredToys, setFilteredToys] = useState([]);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
        fetch('http://localhost:5000/allToys')
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
        <div>
            <h2 className="text-3xl md:text-5xl text-center font-semibold mb-5 ">Shop by Category</h2>

            <div className='flex flex-wrap md:flex-row gap-3 justify-center mb-20'>
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
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 px-2 md:px-0 md:mx-3 lg:mx-20">
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
    );
};

export default ShopByCategory;