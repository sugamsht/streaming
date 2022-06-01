import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

function Header(props) {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">

                        <Link to="/" className="flex items-center py-4 px-2">
                            {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                            <span className="font-semibold text-gray-500 text-lg">StreamGar</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Browse</Link>
                        <Link to="/streams/new" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Create Stream</Link>
                        <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-3 ">
                        {/* <Link to="" className="p-4 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link> */}
                        <GoogleAuth />
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => {
                            const menu = document.querySelector(".mobile-menu");
                            menu.classList.toggle("hidden");
                        }}
                        >
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden mobile-menu">
                <ul className="">
                    <li><Link to="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Browse</Link></li>
                    <li><Link to="/streams/new" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Create Stream</Link></li>
                    <li><Link to="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
