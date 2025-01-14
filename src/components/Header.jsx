import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Cart from './Cart';
function Header() {
    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => {
        setCartOpen(true);
    };

    const closeCart = () => {
        setCartOpen(false);
    };
    return (
        <>
            <div className="bg-white shadow-sm sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
                    <div className="flex items-center justify-between md:justify-start">
                        {/* Menu Trigger */}
                        <button type="button" className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
                            <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {/* ./ Menu Trigger */}

                        <a href="#" className="font-bold text-gray-700 text-2xl">Rahul Food delivery App</a>

                        <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
                            <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">Electronics</a>
                            <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">Fashion</a>
                            <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">Tools</a>
                            <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">Books</a>
                            <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">More</a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative hidden md:block">
                                <input
                                    type="search"
                                    className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                                    placeholder="Search"
                                />
                                <svg
                                    className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <a
                                href="#"
                                className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
                                onClick={openCart} // Open cart on click
                            >
                                <svg
                                    className="h-6 w-6 leading-none text-gray-300 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="pl-1 text-gray-500 text-md">0</span>
                            </a>

                            <button type="button" className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center">
                                <img src="https://avatars.dicebear.com/api/bottts/2.svg" alt="bottts" width="28" height="28" className="rounded-lg mx-auto" />
                            </button>
                        </div>
                    </div>

                    {/* Search Mobile */}
                    <div className="relative md:hidden">
                        <input
                            type="search"
                            className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                            placeholder="Search"
                        />
                        <svg
                            className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    {/* ./ Search Mobile */}
                </div>

            </div>
            <Breadcrumbs />
            <Cart isOpen={cartOpen} closeCart={closeCart} />
        </>

    );
};



const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Link to="/" className="hover:underline hover:text-gray-600">Home</Link>
                {pathnames.map((value, index) => {
                    const isLast = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <React.Fragment key={to}>
                            <span>
                                <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            {isLast ? (
                                <span className="text-gray-600">{value}</span>
                            ) : (
                                <Link to={to} className="hover:underline hover:text-gray-600">{value}</Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Header