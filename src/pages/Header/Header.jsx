import React from 'react'
import {Link} from 'react-router-dom';
import tuza from '../../assets/logo.jpg'
function Header() {
    return (
        <div className="header1 w-screen">
           <nav className="fixed flex w-full bg-white p-0 top-0 items-center animated z-20">
             < div className="py-1 mx-8"> 
             <img src={tuza} alt="tuza logo" width="130px" height="130px" /> </div>
             <ul className="hidden sm:flex text-xl-2 flex-1 py-4 mt-1 justify-end items-center gap-12 text-black text-center">
                 <Link to="Layout" className="cursor-pointer">Our Story</Link>
                 <Link to="HowItWork" className="cursor-pointer">How it Works!</Link>
                 <Link to="Login" className="cursor-pointer ">Login</Link>
                <button type="button" className=" bg-black py-2 px-5 text-white rounded-md px-7 text-xl-2"><Link to="/" >Home</Link></button>
             </ul>
             
           </nav>
           
        </div>
    )
}

export default Header
