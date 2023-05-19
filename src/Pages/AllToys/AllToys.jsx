import { useEffect, useState } from "react";
import AlltoysCard from "./AlltoysCard";

const AllToys = () => {

    const [toys, SetToys] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredToys, setFilteredToys] = useState(toys);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetToys(data);
                setFilteredToys(data);
            })
    }, [])


    const handleSearch = () => {
        const filtered = toys.filter((toy) =>
            toy.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setFilteredToys(filtered);
    };


    const handleShowAll = () => {
        setShowAll(true);
    };

    // const visibleToys = showAll ? toys : toys.slice(0, 20);

    const visibleToys = searchQuery !== "" ? filteredToys : toys.slice(0, 20);

    useEffect(() => {
        if (toys.length >= 20) {
            setShowAll(true);
        }
    }, [toys]);


    return (
        <div className="mx-40">
            <h2 className="text-3xl md:text-5xl text-center font-semibold my-5">All Toys</h2>
            <p className="md:w-3/5 mx-auto text-center">Discover a world of toys across various categories, including outdoor play, arts and crafts, puzzles, dolls and action figures, educational toys, construction sets, and cuddly plush companions. Each category is designed to engage, inspire, and bring joy to children of all ages.</p>
            <h2>services{toys.length}</h2>

            <div className="mb-3 flex justify-center px-2">
                <input type="text" placeholder="Search for a toy..." className="border border-gray-300 rounded ps-2 md:py-2 md:px-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch} className="ml-2 bg-[#a5c927] hover:bg-[#ffc22c] text-white font-bold px-2 md:py-2 md:px-4 rounded"
                >Search</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {visibleToys.map((toy) => (
                            <AlltoysCard key={toy._id} toy={toy}></AlltoysCard>
                        ))}

                    </tbody>
                </table>
            </div>

            <div className='mt-5 text-center'>
                {toys.length >= 20 && !showAll && (
                    <button onClick={handleShowAll} className='btn border-none shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-xl hover:scale-110'>Show All</button>
                )}
            </div>
        </div>
    );
};

export default AllToys;