import { useState } from 'react';

import loginimg from '../assets/images/loginimg.jpg'
import { NavLink } from 'react-router-dom'

import { MdMailOutline,MdLock } from 'react-icons/md'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Loginpage() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberState, setRememberState] = useState(false);
    return (
        <div className="relative top-6 bg-white rounded-b-3xl max-md:overflow-hidden w-full h-screen flex flex-col md:flex-row justify-stretch content-stretch">
            <div className="flex flex-col gap-4 w-full text-dbblue py-12 sm:py-24 px-12 sm:px-24">
                <h1 className='text-4xl md:text-5xl font-semibold' >Login To<br/>Dunia Belanja</h1>
                <p>Thank you for get back to Dunia Belanja. let's access our best recommendation for you</p>
                <div className='flex flex-col gap-4' >
                    <div className='font-semibold border-b-2' >
                        <div className='relative top-0.5 flex flex-row gap-8 max-sm:justify-center'>
                            <NavLink to="/register" className="px-4">Register</NavLink>
                            <NavLink to="/login" className="border-b-2 border-dbblue px-4">Login</NavLink>
                        </div>
                        
                    </div>
                    <div className='flex flex-row align-middle w-full border rounded-xl border-dbblue p-2 gap-2' >
                        <MdMailOutline size="32"/>
                        <input className='w-full text-black outline-none' type="text" placeholder="Masukkan Email Anda"></input>
                    </div>
                    <div className='flex flex-row align-middle w-full border rounded-xl border-dbblue p-2 gap-2'>
                        <MdLock size="32"/>
                        <input className='w-full text-black outline-none' type="password" placeholder="Masukkan Password Anda"></input>
                        {showPassword ? 
                          <IoEyeOutline className='cursor-pointer' size="32" onClick={() => setShowPassword(!showPassword)}/>
                        : <IoEyeOffOutline className='cursor-pointer' size="32" onClick={() => setShowPassword(!showPassword)}/>}
                    </div>
                    <div className='flex flex-col items-center sm:flex-row max-sm:gap-1 justify-evenly'>
                        <div onClick={() => {setRememberState(!rememberState)}} className='sm:w-full flex flex-row align-middle gap-1 cursor-pointer'>
                            <input checked={rememberState} type="checkbox"/><span>Remember me</span>
                        </div>
                        <div className='w-full text-center sm:text-right'>
                            <a>Forget Password?</a>
                        </div>
                        
                    </div>
                    <button className='rounded-md text-white bg-dbblue py-2' >LOGIN</button>
                </div>

            </div>
            <img src={loginimg} className=" md:relative md:-top-6 w-full md:h-[103vh] md:rounded-br-3xl max-md:overflow-hidden md:w-5/12 object-cover object-left"></img>
            
        </div>
    )
}
