import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <a className='mr-2' href='/'>Home</a>
        <a className='mr-2' href='/about'>About</a>
        <a className='mr-2' href='/skills'>Skills</a>
        <a className='mr-2' href='/projects'>Projects</a>
        <a className='mr-2' href='/Contact'>Contact</a>
    </>
    return (
        <div className=" bg-base-100 shadow-sm ">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h3 className="text-3xl font-bold">TARIQUL</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button type='' className='btn btn-accent'>Hire Me<FaDownload /></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;