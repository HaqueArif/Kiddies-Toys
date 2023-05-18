import {useEffect, useState} from "react";
import AlltoysCard from "./AlltoysCard";

const AllToys = () => {

    const [toys, SetToys] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            SetToys(data)
        })
    }, [])
    
    return (
        <div>
            <h2 className="text-3xl md: text-5xl text-center font-semibold my-5">All Toys</h2>
            <p className="md:w-3/5 mx-auto text-center">Discover a world of toys across various categories, including outdoor play, arts and crafts, puzzles, dolls and action figures, educational toys, construction sets, and cuddly plush companions. Each category is designed to engage, inspire, and bring joy to children of all ages.</p>
            <h2>services{toys.length}</h2>
            <div>
                {
                    toys.map(toy=> <AlltoysCard
                    key={toy._id}
                    toy={toy}
                    ></AlltoysCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;