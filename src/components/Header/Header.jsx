import React, { useState } from 'react';
import Logo from "../../assets/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-28 xl:px-56 py-4 items-center text-white">
            <div className=" flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                <img className="object-cover h-10" src={Logo} alt="Logo" />
                <button
                    className=" md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>
            <nav className={`${isOpen ? "block" : "hidden"}  md:flex md:justify-end items-center w-full md:w-auto`}>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <li className="nav-items"><button>Home</button></li>
                    <li className="nav-items"><button>About</button></li>
                    <li className="nav-items"><button>Become Agent</button></li>
                    <li className="nav-items"><button>Login</button></li>
                    <li className="nav-items"><button>Signup</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
