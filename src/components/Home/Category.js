import React, { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';

export default function Category({ sunmoon, handleCate }) {
  const arrx = [
    {
      category: 'Opinions',
      title:'Opinions & Editorials'
    },
    {
      category: 'Multimedia',
      title:"Multimedia & Events",
    },
    {
      category: 'Innovation',
      title:'Productivity & Innovation',
    },
    {
      category: 'Technology',
      title:"Technology Trends",
    },
    {
      category: 'Workplace',
      title:"Workplace & Culture"
    },
    {
      category: 'Marketing',
      title:"Marketing & Finance"
    },
    {
      category: 'Business',
      title:'Business Insights'
    },
  ];

//   Opinions & Editorials
// Multimedia & Events
// Productivity & Innovation
// Workplace & Culture
// Marketing & Finance
// Technology Trends
// Business Insights

  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your other code...

  return (
    <div className={
      sunmoon
        ? "w-full flex flex-col items-center text-white"
        : "w-full flex flex-col items-center"
    }
  >
    <section className='w-full flex flex-row items-center justify-center sm:w-full sm:flex sm:flex-row sm:items-center sm:justify-center md:hidden lg:hidden'>
      <section className='w-full m-auto px-2 mt-4'>
        <article className='w-full flex flex-row items-center justify-center  relative'>
          <Carousel
            onSlideChange={(currentSlide) => setCurrentSlide(currentSlide)}
            showArrows={false}
            className='p-1'
            pagination={false}
            itemsToShow={3.7}
            ref={carouselRef}
          >
            {arrx.map((item, index) => {
              return (
                <div
                  className={`rounded-md h-6 relative grid place-content-center text-lg w-60 px-2 py-3
                  sm:text-xs sm:w-60 sm:px-2 sm:py-3
                  md:text-sm md:w-10/12
                  lg:text-base lg:w-10/12 capitalize font-medium ${
                    sunmoon ? 'text-white text-xs' : 'text-black text-xs'
                  }`}
                  key={index}
                  onClick={()=>handleCate(item.title)}
                >
                  {item.title}
                </div>
              );
            })}
          </Carousel>
        </article>
      </section>
    </section>
    </div>
  );
}
