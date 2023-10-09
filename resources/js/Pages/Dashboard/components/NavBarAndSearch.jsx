import React from "react";

const NavBarAndSearch = () =>{
    return(
        <div className="text-white w-full bg-gray-950 mb-2 py-6 px-7 rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    LOGO
                    <h1 className="ml-1 font-bold text-sm">FULL MUSIC</h1>
                </div>
                <div className="md:hidden">
                    <button className="" data-popover-target="popover-user-profile">
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div data-popover id="popover-user-profile" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
                        <div className="p-3">
                            <div className="flex items-center justify-between mb-2">
                                <a href="#">
                                    <img className="w-10 h-10 rounded-full" src="" alt="Jese Leos" />
                                </a>
                                <div>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5">Follow</button>
                                </div>
                            </div>
                            <p className="text-base font-semibold leading-none text-gray-900">
                                <a href="#">Jese Leos</a>
                            </p>
                            <p className="mb-3 text-sm font-normal">
                                <a href="#" className="hover:underline">@jeseleos</a>
                            </p>
                            <p className="mb-4 text-sm">Open-source contributor. Building <a href="#" className="text-blue-600 hover:underline">flowbite.com</a>.</p>
                            <ul className="flex text-sm">
                                <li className="mr-2">
                                    <a href="#" className="hover:underline">
                                        <span className="font-semibold text-gray-900">799</span>
                                        <span>Following</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        <span className="font-semibold text-gray-900">3,758</span>
                                        <span>Followers</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <a className="flex content-center items-center cursor-pointer">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                    </svg>
                    <strong className="ml-5 text-sm">Home</strong>
                </a>
            </div>
            <div className="mt-4">
                <a className="flex content-center items-center cursor-pointer">
                    <svg className="w-6 h-6text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <strong className="ml-5 text-sm">Search</strong>
                </a>
            </div>
        </div>
    );
}

export default NavBarAndSearch;
