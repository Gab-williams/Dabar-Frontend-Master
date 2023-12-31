import React, { useState, useEffect } from 'react';
import { IoIosHome } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function MobileNav() {
  const [isMobileOpen, setisMobileOpen] = useState(false);

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
        className={`${
          isMobileOpen
            ? 'w-11/12 m-auto rounded-md px-2 bg-white fixed bottom-0 left-0 right-0 z-40'
            : 'hidden'
        } sm:w-11/12 sm:m-auto sm:rounded-md sm:px-2 sm:bg-white sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:z-40 md:w-11/12 md:m-auto md:rounded-md md:px-2 md:bg-white md:fixed md:bottom-0 md:left-0 md:right-0 md:z-40 lg:hidden lg:z-0`}
      >
        <div className="w-full">
          <span
            className="w-1/12 grid place-content-center float-right font-semibold text-lg cursor-pointer text-black"
            onClick={() => setisMobileOpen(false)}
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
          !isMobileOpen
            ? 'w-full text-lg text-black fixed z-30 flex items-center bottom-0'
            : 'z-0 hidden'
        } sm:w-full sm:text-lg sm:flex sm:items-center sm:justify-center sm:text-black sm:fixed sm:z-30 sm:bottom-0 md:w-full md:text-lg md:flex md:items-center md:justify-center md:text-black md:fixed md:z-30 md:bottom-0 lg:hidden`}
      >
        <section className="w-11/12 bg-white py-2 px-2 flex flex-row items-center">
          <div className="w-1/4">
            <button className="bg-[#FD9005] rounded-md h-full w-full flex flex-row items-center px-2 py-2">
              <IoIosHome className="text-white" />
              <span className="text-xs capitalize text-white">home</span>
            </button>
          </div>
          <section className="w-3/4">
            <article className="w-full">
              <div className="w-11/12 flex flex-row items-center justify-between float-right">
                <button className="w-24 h-full" onClick={() => setisMobileOpen(true)}>
                  <AiOutlineMenuUnfold onClick={() => setisMobileOpen(true)} className="text-black text-lg" />
                </button>
                <button className="w-24 h-full">
                  <FaRegUser className="text-black text-lg" />
                </button>
                <button className="w-24 h-full">
                  <MdKeyboardDoubleArrowUp className="text-black text-lg" />
                </button>
              </div>
            </article>
          </section>
        </section>
      </div>
    </article>
  );
}
