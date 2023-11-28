import React from "react";
// import content from "../../images/content-single.jpg";
import { FaSquareFacebook, FaXTwitter  } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp, FaTelegram  } from "react-icons/fa";
export default function Hero(props) {
   const {writer, category, datexz, whole, mainImg, preSummary} = props
   
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full text-lg sm:w-full sm:text-lg md:w-2/3 md:text-2xl lg:w-3/4 lg:text-4xl p-4 capitalize font-bold m-auto mt-20">
          {Object.keys(whole)?whole.heading:""}
        <p class="font-medium text-black-300 pt-3 md:text-lg">
          {preSummary}
        </p>
      </section>

      <section className="w-full sm:w-full md:w-3/4 lg:w-3/4  p-4 ">
        <div className="w-full">
          <section className="w-full sm:w-full md:w-11/12 lg:w-auto float-left flex flex-row items-center space-x-2 mt-6">
            {/* Category Button */}
            <button className="h-full py-1 p-4 text-orange-500 text-xs capitalize text-center bg-gray-200 w-30 sm:text-sm">
              {Object.keys(category).length > 0? category.category:""}
            </button>

            {/* Author */}
            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
              by {writer.name}
            </a>

            {/* Separator */}
            <a className="text-xs font-regular sm:text-md lg:text-md">-</a>

            {/* Read Time */}
            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
              2 minute read
            </a>

            {/* Separator */}
            <a className="text-xs font-regular sm:text-md lg:text-md">-</a>

            {/* Date */}
            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
              {/* July 14, 2022 */}
              {datexz}
            </a>

            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
              {/* July 14, 2022 */}
              <FaSquareFacebook className="text-lg"/>
            </a>
            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
            <FaXTwitter className="text-lg"/>
            </a>
            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
            <FaInstagram className="text-lg"/>
            </a>

            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
            <FaWhatsapp className="text-lg"/>
            </a>

            <a className="text-xs font-regular sm:text-md lg:text-md sm:w-24 lg:w-auto">
            <FaTelegram className="text-lg"/>
            </a>
          </section>
        </div>
      </section>

      <article className="w-11/12 border-b border-b-gray-10 mx-auto mb-6 max-w-full h-auto sm:w-11/12 sm:h-64  md:w-10/12 md:h-96 lg:w-3/4 lg: lg:h-auto mt-14">
        <img src={mainImg} className="w-full h-full" />
      </article>
    </div>
  );
}
