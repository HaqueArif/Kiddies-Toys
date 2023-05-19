import logo from '../../../../public/logo.png'
import medias from '../../../assets/Media/Group 9969.png'
import doller from '../../../assets/icons/doller.png'
import location from '../../../assets/icons/location.png'
import phone from '../../../assets/icons/phone.png'
import email from '../../../assets/icons/email.png'

const Footer = () => {

    // (including website logo, name, copyright, some contact information, social media links, address, etc.)

    return (
        <footer className='ps-10 pb-5 pt-16 mt-20 bg-[#a5c927]  text-base-content'>
            <div className="footer">
                <div className="text-white font-semibold">
                    <img className='w-40 mb-10' src={logo} alt="logo" />
                    <p className='md:w-60'>Welcome to our magical toy wonderland, where dreams come to life and laughter fills the air. Step into a world of endless fun and imagination with our extraordinary collection of toys designed to ignite the spark of joy in every child's heart. From timeless classics to the latest innovative wonders, we offer a wide range of captivating playthings for kids of all ages.</p>
                </div>

                <div className="text-white font-semibold mt-16">
                    <span className="text-2xl font-bold mb-2">Help</span>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Shipping Information</a>
                    <a className="link link-hover">Returns & Exchanges</a>
                    <a className="link link-hover">Accessibility Assistance</a>
                </div>
                <div className="text-white font-semibold mt-16">
                    <span className="text-2xl font-bold mb-2">Contact Us</span>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 rounded-full bg-slate-50 p-2' src={email} alt="" /> <a className="link link-hover">Via Email</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 rounded-full bg-slate-50 p-2' src={phone} alt="" /> <a className="link link-hover">Tel: 999 333 999</a>
                    </div>
                </div>
                <div className="text-white font-semibold mt-16">

                    <div className="form-control md:w-86">
                        <span className="footer-title text-4xl text-center">Lets be penpals</span>
                        <p className=" text-center mb-5">Join our newsletter and receive 15% off your first order.</p>
                        <div>
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 mb-3 " />
                            <button className="btn bg-white border-none text-[#a5c927] font-bold text-lg w-full">Sign me up</button>
                        </div>
                        <div className='mt-5 flex flex-col items-center '>
                            <p className='text-white text-xl mb-2'>Follow Us:</p> <img className='w-40' src={medias} alt="Social Media" />
                        </div>
                    </div>
                </div>
            </div>

            <p className='mt-6 text-center text-white font-bold'>Address: Moulvibazar-3200, Sylhet, Bangladesh.</p>
            <p className=' text-center text-slate-100'>&copy; 2023 Kiddies Toy Store- BD. All Rights Reserved. | <a href="privacy.html">Privacy Policy</a></p>
        </footer>
    );
};

export default Footer;