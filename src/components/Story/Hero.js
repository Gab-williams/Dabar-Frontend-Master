import React from "react";
// import content from "../../images/content-single.jpg";
import { FaSquareFacebook, FaXTwitter  } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp, FaTelegram  } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Hero(props) {
   const {writer, category, datexz, whole, mainImg, preSummary, readtime} = props
   const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: whole.heading,
          text: preSummary,
          url: window.location.href,
        });
      } else {
        throw new Error('Web Share API not supported.');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
      // Handle error or fallback to other sharing options
    }
  };
   
  return (
    <div className="w-full flex flex-col items-center justify-center">
    <section className="w-full text-lg sm:w-full sm:text-lg md:w-2/3 md:text-2xl lg:w-3/4 lg:text-4xl p-4 capitalize font-bold m-auto mt-20">
      {Object.keys(whole) ? whole.heading : <Skeleton height={30} width={300} />}
      <p class="font-medium text-gray-600 pt-3 md:text-lg">
        {preSummary || <Skeleton count={3} />}
      </p>
    </section>

    <section className="w-full sm:w-full md:w-3/4 lg:w-3/4  p-4 ">
      <div className="w-full">
        <section className="w-full sm:w-full md:w-11/12 lg:w-auto float-left flex flex-row items-center space-x-2 mt-6">
          {/* Category Button */}
          <button className="flex justify-center xs:justify-start xs:w-auto xs:inline-flex items-center border border-gray-100 bg-gray-100 leading-none rounded-full font-light hover:bg-orange-200 px-3.5 py-2.5">
            {Object.keys(category).length > 0 ? (
              category.category
            ) : (
              <Skeleton height={20} width={80} />
            )}
          </button>

          {/* Author */}
          <a className="text-xs font-regular sm:text-md lg:text-lg sm:w-24 lg:w-auto">
            by {writer.name || <Skeleton width={50} />}
          </a>

          {/* Separator */}
          <a className="text-xs font-regular sm:text-md lg:text-lg">-</a>

          {/* Read Time */}
          <a className="text-xs font-regular sm:text-md lg:text-lg sm:w-24 lg:w-auto">
           {readtime}
          </a>

          {/* Separator */}
          <a className="text-xs font-regular sm:text-md lg:text-lg">-</a>

          {/* Date */}
          <a className="text-xs font-regular sm:text-md lg:text-lg sm:w-24 lg:w-auto">
            {datexz || <Skeleton width={80} />}
          </a>

            {/* Social Icons */}
      <a
        className="text-xs font-regular flex items-center space-x-2 cursor-pointer"
        onClick={handleShare}
      >
        <FaSquareFacebook className="text-lg" />
        <FaXTwitter className="text-lg" />
        <FaInstagram className="text-lg" />
        <FaWhatsapp className="text-lg" />
        <FaTelegram className="text-lg" />
      </a>
        </section>
      </div>
    </section>

    <article className="w-11/12 border-b border-b-gray-10 mx-auto mb-6 max-w-full h-auto sm:w-11/12 sm:h-64  md:w-10/12 md:h-96 lg:w-3/4 lg: lg:h-auto mt-14">
      {mainImg ? (
        <img src={mainImg} className="w-full h-full" alt="Main Image" />
      ) : (
        <Skeleton width={80} height={300} />
      )}
    </article>
  </div>
);
}
