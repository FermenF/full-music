import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
                </a>
                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#" className="text-1xl font-bold block py-2 pl-3 pr-4 text-white rounded bg-blue-500">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-1xl font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-500 hover:text-white">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-1xl font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-500 hover:text-white">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="text-1xl font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-500 hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;