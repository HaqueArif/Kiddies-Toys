import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GalleryCard = ({ item }) => {

    const { img } = item;
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        // <div className="shadow-2xl bg-[#a5c927] p-1 rounded-xl">
        //     <img src={img} alt="" className="rounded-xl shadow mb-3"/>
        // </div>
        <div className="shadow-2xl bg-[#a5c927] p-1 rounded-xl" data-aos="fade-up">
            <img src={img} alt="" className="rounded-xl shadow mb-3" />
        </div>
    );
};

export default GalleryCard;