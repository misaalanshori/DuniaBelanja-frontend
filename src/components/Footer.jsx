import DBLogoWhite from '/icons/logowhite.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white py-16 gap-12">
            <img className="w-48" src={DBLogoWhite}></img>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col">
                    <h4 className="font-semibold">PAGE</h4>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/faqs">FAQs</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-semibold">HELP</h4>
                    <Link to="/privacypolicy">Privacy & Policy</Link>
                    <Link to="/termsofuse">Reviews</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-semibold">Contact</h4>
                    <a href="tel:+621234567">+62 1234567</a>
                    <a href="mailto:Dono@gmail.com">Dono@gmail.com</a>
                    Dutch    
                </div>
            </div>  
        </div>
    )
}