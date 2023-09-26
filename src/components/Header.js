import { useState } from "react";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext/AuthContext";
import Login from "./Login";




const Header = () => {
    const [active, setActive] = useState("Home");

    const { user, logout } = useAuth();
    const history = useNavigate();

    const navItems = [
        {
            link: "/",
            name: "Home",
        },


        {
            link: "/userprofile",
            name: "Profile",
        },
        // {
        //     link: "/register",
        //     name: "Register",
        // },
        // {
        //     link: "/login",
        //     name: "Login",
        // },




    ];




    return (


        <div className="  navbar bg-slate-900 md:px-24 py-6 items-end"  >

            <div className="navbar-start  ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#07072b] border border-secondary rounded-box w-52 py-10"
                    >
                        {navItems.map((navItem, index) => {
                            const { link, name } = navItem;
                            return (
                                <li className="hover:text-secondary mx-auto" key={index}>
                                    <Link
                                        to={link}
                                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === name ? "text-white font-bold" : "text-dimWhite"
                                            } ${index === navItem.length - 1 ? "mr-0" : "mr-10"}`}
                                        onClick={() => setActive(name)}
                                    >
                                        <span className="text-2xl font-bold">{name}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        <div>
                            {user ? (
                                <div>
                                    <span className="mr-2">Hello, {user.username}!</span>
                                    <button onClick={logout} className="text-blue-300 hover:text-blue-500 font-poppins font-normal cursor-pointer text-[16px]">
                                        Logout
                                    </button>
                                </div>
                            ) : <Login />}
                        </div>
                    </ul>


                </div>
                <Link to="/" className="cursor-pointer text text-xl flex items-end">
                    Wesoftin
                </Link>



            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu  rounded-none menu-horizontal px-1 items-center">
                    {navItems.map((navItem, index) => {
                        const { link, name } = navItem;
                        return (
                            <li className="hover: -blue-500">
                                <Link
                                    to={link}
                                    className={`  ${active === name ? " rounded-none font-bold text-white" : "text-dimWhite"
                                        } ${index === navItem.length - 1 ? "" : ""}`}
                                    onClick={() => setActive(name)}
                                >
                                    {name}
                                </Link>


                            </li>
                        );
                    })}
                    <div>
                        {user ? (
                            <div>
                                <span className="mr-2">Hello, {user.username}!</span>
                                <button onClick={logout} className="text-blue-300 lg:mx-4 hover:text-blue-500  font-poppins font-normal cursor-pointer text-[16px]">
                                    Logout
                                </button>
                            </div>
                        ) :

                            <li className="hover:text-blue-500">
                                <Link
                                    to='/register'
                                    className='  rounded-none font-bold text-white"  "text-dimWhite
                                       '

                                >
                                    Register
                                </Link>




                            </li>

                        }
                    </div>

                </ul>
            </div>
        </div>

    );
};

export default Header;


