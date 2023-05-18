

const Footer = () => {

    
    
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Products</span>
                <a className="link link-hover">Dolls</a>
                <a className="link link-hover">Robots</a>
                <a className="link link-hover">Sports toys</a>
                <a className="link link-hover">Action figure toys</a>
                <a className="link link-hover">Building and Construction Toys</a>
                <a className="link link-hover">Arts and Crafts Toys</a>
                <a className="link link-hover">Sand castle building toys</a>
            </div>
            <div>
                <span className="footer-title">About</span>
                <a className="link link-hover">Meet the Toys</a>
                <a className="link link-hover">Our Story</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Photo Gallery</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Press</a>
            </div>
            <div>
                <span className="footer-title">Help</span>
                <a className="link link-hover">FAQs</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Shipping Information</a>
                <a className="link link-hover">Returns & Exchanges</a>
                <a className="link link-hover">Accessibility Assistance</a>
            </div>
            <div>

                <div className="form-control md:w-86">
                    <span className="footer-title text-4xl text-center">Lets be penpals</span>
                    <p className=" text-center mb-5">Join our newsletter and receive 15% off your first order.</p>
                    <div className="">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 mb-3 " />
                        <button className="btn btn-primary w-full">Sign me up</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;