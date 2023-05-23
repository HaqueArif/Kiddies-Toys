import { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import OurStories from "../OurStories/OurStories";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {

  useEffect(()=>{
    document.title = 'KIDDIES | Home'
  },[]);
  
    return (
        <div className="bg-slate-50">
          <Hero></Hero>
          <Gallery></Gallery>
          <OurStories></OurStories>
          <ShopByCategory></ShopByCategory>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;