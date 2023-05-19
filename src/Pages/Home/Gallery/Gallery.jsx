import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";


const Gallery = () => {

    const [galleryItems, setGalleryItems] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
        .then(res=> res.json())
        .then(data=>{
            setGalleryItems(data)
        })
    },[])
    
    
    return (
        <div className="my-40">
           <h2 className="text-3xl md:text-5xl text-center font-semibold mb-5 ">Our Gallery</h2>
           <p className="px-2 md:w-3/5 mx-auto text-center">Step into our captivating gallery section, a magical realm brimming with wonders for children and adults alike. Discover a kaleidoscope of colors as you wander through shelves adorned with cuddly plush companions, intricate puzzles, and vibrant board games. Marvel at the array of action figures and dolls that transport you to realms of make-believe. </p>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-20 md:gap-5 px-2 md:px-10 lg:px-20">
                {
                    galleryItems.map(item => <GalleryCard
                    key={item._id}
                    item={item}
                    ></GalleryCard>)
                }
           </div>
        </div>
    );
};

export default Gallery;