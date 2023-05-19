import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Gallery></Gallery>
          <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;