import banner from '../../../../public/stories.jpg'
import playIcon from '../../../assets/ohters/play-button.png'

const OurStories = () => {
    return (
        <div className='mx-2 md:mx-20 my-10'>
            <div className='shadow-sm py-20 bg-base-100 rounded-2xl'>
                <h2 className="text-3xl md:text-5xl text-center font-semibold">Our Stories</h2>
                <p className='mb-20 px-2 md:w-3/5 mx-auto text-center'> Our story began with a simple yet powerful vision: to create a magical space where children could explore, play, and embark on countless adventures. With a team of passionate toy enthusiasts, we carefully curate a wide range of toys that inspire creativity, promote learning, and bring joy to children of all ages.</p>
                <div className='relative md:w-5/6 mx-auto'>
                    <img src={banner} alt="banner" />
                    <div className='absolute top-0 h-full w-full flex justify-center items-center bg-gradient-to-r to-[#3c63f088] from-[#1ed75fe1]'>
                        <div className='text-center text-white'>
                            <h4 className='text-sm md:text-lg'>About The Store</h4>
                            <h2 className='text-lg md:text-3xl font-bold md:mb-5'>Watch Our Story</h2>
                           
                                <img src={playIcon} alt=""  className='mx-auto w-10 md:w-20 hover:animate-pulse'/>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStories;