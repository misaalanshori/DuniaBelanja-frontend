import DBLogo from '/icons/logo.svg';
import { NavLink, Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div className="flex flex-col top-0 sticky z-50 justify-center items-center bg-[#1e1e1e] text-[#cdcdcd]">
            <Link className='sm:hidden p-4 h-20' to="/"><img className="h-full" src={DBLogo} alt="Dunia Belanja"></img></Link>
            <div className="w-full flex flex-row justify-evenly sm:text-xl items-stretch ">
                <NavLink className="navlink w-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50" to="/404">ABOUT US</NavLink>
                <NavLink className="navlink w-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50" to="/404">PRODUCT</NavLink>
                <Link className='hidden sm:block p-4 w-full h-20' to="/"><img className="w-full h-full" src={DBLogo} alt="Dunia Belanja"></img></Link>
                <NavLink className="navlink w-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50" to="/register">REGISTER</NavLink>
                <NavLink className="navlink w-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50" to="/login">LOGIN</NavLink>
            </div>
        </div>
    )
}