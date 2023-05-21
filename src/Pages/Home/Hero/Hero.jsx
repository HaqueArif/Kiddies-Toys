
import slider3 from '../../../assets/slider/s1.jpg'
import slider1 from '../../../assets/slider/s2.jpg'
import slider2 from '../../../assets/slider/s3.jpg'


const Hero = () => {


    return (



        <div className="carousel w-full h-screen md:h-fit">
            <div id="slide1" className="carousel-item relative w-full active">
                <img src={slider1} className='w-full' />
                <div className='absolute top-0 flex h-full justify-center items-center bg-gradient-to-r from-[#3c63f088] to-[#1ed75fe1]'>
                    <div className='px-2 md:px-20' >
                        <div className="text-white text-center  font-bold  mb-20 ">
                            <h2 className='text-3xl md:text-6xl'>Welcome TO</h2><h2 className='text-6xl  md:text-9xl text-[#fad370]'>KIDDIES</h2>
                        </div>
                        <p className="text-white text-center text-sm xl:px-36 md:text-xl md:mt-5">
                            Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages.
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <div className='hidden md:inline-block'>
                        <a href="#slide3" className="btn btn-circle">❮</a>
                    </div>
                    <div className='hidden md:inline-block'>
                        <a href="#slide2" className="btn btn-circle ">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full ">
                <img src={slider2} className='w-full' />
                <div className='absolute top-0 flex h-full justify-center items-center bg-gradient-to-r from-[#3c63f088] to-[#1ed75fe1]'>
                    <div className='px-2 md:px-20' >
                        <div className="text-white text-center  font-bold  mb-20 ">
                            <h2 className='text-3xl md:text-6xl'>Welcome TO</h2><h2 className='text-6xl  md:text-9xl text-[#fad370]'>KIDDIES</h2>
                        </div>
                        <p className="text-white text-center text-sm xl:px-36 md:text-xl md:mt-5">
                            Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages.
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <div className='hidden md:inline-block'>
                        <a href="#slide1" className="btn btn-circle">❮</a>
                    </div>
                    <div className='hidden md:inline-block'>
                        <a href="#slide3" className="btn btn-circle ">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className='w-full' />
                <div className='absolute top-0 flex h-full justify-center items-center bg-gradient-to-r from-[#3c63f088] to-[#1ed75fe1]'>
                    <div className='px-2 md:px-20' >
                        <div className="text-white text-center  font-bold  mb-20 ">
                            <h2 className='text-3xl md:text-6xl'>Welcome TO</h2><h2 className='text-6xl  md:text-9xl text-[#fad370]'>KIDDIES</h2>
                        </div>
                        <p className="text-white text-center text-sm xl:px-36 md:text-xl md:mt-5">
                            Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages.
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <div className='hidden md:inline-block'>
                        <a href="#slide2" className="btn btn-circle">❮</a>
                    </div>
                    <div className='hidden md:inline-block'>
                        <a href="#slide1" className="btn btn-circle ">❯</a>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Hero;