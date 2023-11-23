import React, { useState, useEffect } from 'react';
import { RiContactsFill } from "react-icons/ri";
import { RiHome6Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

export default function MobileNav() {
  const [isMobileOpen, setisMobileOpen] = useState(false);
   const [isMenu, setIsMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setisMobileOpen(scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <article className="w-full">
      <section
      // change the width from w-11/12 to w-[97%]
        className={`${
          isMenu
            ? 'w-[97%] m-auto rounded-md px-2 bg-white fixed bottom-0 left-0 right-0 z-40 h-screen'
            : 'hidden'
        } sm:w-11/12 sm:m-auto sm:rounded-md sm:px-2 sm:bg-white sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:z-40 md:w-11/12 md:m-auto md:rounded-md md:px-2 md:bg-white md:fixed md:bottom-0 md:left-0 md:right-0 md:z-40 lg:hidden lg:z-0`}
      >
        <div className="w-full">
          <span
            className="w-1/12 grid place-content-center float-right font-semibold text-lg cursor-pointer text-black"
            onClick={() => setIsMenu(false)}
          >
            x
          </span>
        </div>
        <ul className="w-full grid grid-cols-2 place-content-center">
          <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
            <Link to="/story">story</Link>
          </li>
          <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
            <Link to="/about us">about us</Link>
          </li>
          <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
            <Link to="/team">team</Link>
          </li>
          <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
            <Link to="/video-category">video category</Link>
          </li>
          <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
            <Link to="/contact us">contact us</Link>
          </li>
        </ul>
      </section>

      <div
        className={`${
          isMenu?'z-0 hidden':!isMobileOpen
            ? 'w-full text-lg text-black fixed z-30 flex items-center bottom-0'
            :'z-0 hidden'
        } sm:w-full sm:text-lg sm:flex sm:items-center sm:justify-center sm:text-black sm:fixed sm:z-30 sm:bottom-0 md:w-full md:text-lg md:flex md:items-center md:justify-center md:text-black md:fixed md:z-30 md:bottom-0 lg:hidden`}
      >
        {/* change this on your code w-11/12 to w-full py-3 */}
        <section className="w-full bg-black py-3 px-2 flex flex-row items-center">
           {/* change this on your code w-11/12 to w-full py-3 */}
          <div className="w-1/4">
            <button className="h-full w-full flex flex-row items-center px-2 py-2">
              <RiHome6Fill className="text-white mr-2" />
              <span className="text-xs capitalize text-white">home</span>
            </button>
          </div>
          
              <div className="w-11/12 flex flex-row items-center justify-between float-right">
                <button className="w-24 m-2 h-full w-full flex flex-row items-center px-2 py-2" onClick={() => setIsMenu(true)}>
                  <TbCategoryFilled onClick={() => setIsMenu(true)} className="text-white mr-2" />
                  <span className="text-xs capitalize text-white">Category</span>
                </button>
                <button className="m-2 h-full w-full flex flex-row items-center px-2 py-2">
              <FaSearch className="text-white mr-2" />
              <span className="text-xs capitalize text-white">Search</span>
            </button>
                <button className="w-24 m-2 h-full w-full flex flex-row items-center px-2 py-2">
                  <RiContactsFill className="text-white mr-2" />
                  <span className="text-xs capitalize text-white">Contact</span>
                </button>
              </div>
           
        </section>
      </div>
    </article>
  );
}
