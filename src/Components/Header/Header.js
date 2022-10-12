import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300 justify-between">
                <div className="mx-14">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Statistics</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <button className="w-max font-bold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-yellow-200 to-purple-300 py-1 mx-4">Programming-Trivia</button>
                </div>
                <div className="navbar-center hidden lg:flex mx-20">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Statistics</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;