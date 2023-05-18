import { useEffect, useState } from "react";
import AlltoysCard from "./AlltoysCard";

const AllToys = () => {

    const [toys, SetToys] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetToys(data)
            })
    }, [])

    const handleShowAll = () => {
        setShowAll(true);
    };

    const visibleToys = showAll ? toys : toys.slice(0, 20);

    useEffect(() => {
        if (toys.length >= 20) {
          setShowAll(true);
        }
      }, [toys]);


    return (
        <div>
            <h2 className="text-3xl md:text-5xl text-center font-semibold my-5">All Toys</h2>
            <p className="md:w-3/5 mx-auto text-center">Discover a world of toys across various categories, including outdoor play, arts and crafts, puzzles, dolls and action figures, educational toys, construction sets, and cuddly plush companions. Each category is designed to engage, inspire, and bring joy to children of all ages.</p>
            <h2>services{toys.length}</h2>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
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
                        {
                            visibleToys.map(toy => <AlltoysCard
                                key={toy.name}
                                toy={toy}

                            ></AlltoysCard>)
                        }

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