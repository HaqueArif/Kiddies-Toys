// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import './Hero.css';
// import slider1 from '../../../assets/slider/s1.jpg'
// import slider2 from '../../../assets/slider/s2.jpg'
// import slider3 from '../../../assets/slider/s3.jpg'

// const Hero = () => {
//     return (
//         // <div className='bg flex justify-center items-center'>
//         //     {/* <div className='w-3/5 bg-base-100 px-12 py-20 bg-opacity-80 rounded-xl space-y-10 text-center'>
//         //         <h1 className=' text-7xl'>Welcome To Our Toy Shop!</h1>
//         //         <p className='text-xl font-semibold'>Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages. </p>
//         //     </div> */}
//         // </div>

        
//         <Swiper

//             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             navigation
//             pagination={true}
//             // autoplay={{ delay: 3000 }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//         >
//             {/* <SwiperSlide><img src={slider1} alt="slider" className='w-full h-100vh'/></SwiperSlide> */}
//             <SwiperSlide>
//                 <div className="slide-container">
//                     <img src={slider2} alt="slider" className="w-full h-100vh" />
//                     <div className="text-container">
//                         <h1 className="slide-heading">Welcome To Our Toy Shop!</h1>
//                         <p className="slide-description">
//                             Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages.
//                         </p>
//                     </div>
//                 </div>
//             </SwiperSlide>
//             <SwiperSlide>
//                 <div className="slide-container">
//                     <img src={slider3} alt="slider" className="w-full h-100vh" />
//                     <div className="text-container">
//                         <h1 className="slide-heading">Welcome To Our Toy Shop!</h1>
//                         <p className="slide-description">
//                             Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages.
//                         </p>
//                     </div>
//                 </div>
//             </SwiperSlide>


//         </Swiper>
//     );
// };

// export default Hero;