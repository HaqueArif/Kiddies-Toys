import subscribeLogo from '../../../assets/ohters/paper-plane.png'

const Subscribe = () => {
    return (
        <div className='mt-60 mx-2 lg:mx-20 mb-60'>
            <div >
            <h2 className="text-3xl md:text-5xl text-center text-[#a5c927] font-bold mb-20 ">Subscribe Us</h2>
                <div className="grid md: gap-10 lg:grid-cols-2 bg-base-100 shadow-lg p-10 md:p-20 rounded-2xl">
                    <div className='flex mx-auto items-center gap-5'>
                        <div className='flex items-center w-8 h-8 lg:w-24 lg:h-24 bg-[#a5c927] p-2 lg:p-6 rounded-full'>
                            <img src={subscribeLogo} alt="logo" />
                        </div>
                        <div className='tracking-widest md:text-2xl font-semibold'>
                            <p>Subscribe to our newsletter</p>
                            <p><span>& get</span> <span className=' text-[#a5c927]'>20% discount</span></p>
                        </div>
                    </div>

                    <div className='text-center lg:text-end'>
                        <input type="email" placeholder="Enter your email address" className='border border-gray-500 px-2 md:ps-5 md:pe-20 py-3 mr-3 rounded-3xl' />
                        <button className="btn rounded-3xl bg-[#a5c927] hover:bg-[#ffc22c] border-none mt-1">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;