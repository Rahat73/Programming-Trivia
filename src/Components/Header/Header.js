import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300 justify-between py-5 shadow-lg">
                <div className="mx-14">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink
                                to="/"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Home
                            </NavLink></li>
                            <li><NavLink
                                to="/"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Statistics
                            </NavLink></li>
                            <li><NavLink
                                to="/"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Blog
                            </NavLink></li>
                        </ul>
                    </div>
                    <button className="font-mono font-bold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-yellow-200 to-purple-300 py-1 mx-4">Programming-Trivia</button>
                </div>
                <div className="navbar-center hidden lg:flex mx-20">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink
                            to="/"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to="/"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            Statistics
                        </NavLink></li>
                        <li><NavLink
                            to="/"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            Blog
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;