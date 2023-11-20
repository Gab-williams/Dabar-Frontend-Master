import React, { useRef, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import photo from '../../small pic/food.png';
import animal from '../../small pic/animal.png';
import car from '../../small pic/car.png';
import Sport from '../../small pic/football field.png';
import music from '../../small pic/music.png';
import tech from '../../small pic/technology.png';
import Abstract from '../../small pic/absract.png';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const Ash = () => {
  const ashtags = [
    { img: photo, ash: '#Food' },
    { img: animal, ash: '#Animal' },
    { img: car, ash: '#Car' },
    { img: Sport, ash: '#Sport' },
    { img: music, ash: '#music' },
    { img: tech, ash: '#Technology' },
    { img: Abstract, ash: '#Abstract' },
    { img: Sport, ash: '#Sport' },
    { img: music, ash: '#music' },
    { img: Sport, ash: '#Sport' },
    { img: animal, ash: '#Animal' },
    
  ];

  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeft = () => {
    carouselRef.current.slidePrev();
  };

  const handleRight = () => {
    carouselRef.current.slideNext();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const totalSlides = carouselRef.current.props.children.length;
        const nextSlide = (currentSlide + 1) % totalSlides;

        carouselRef.current.goTo(nextSlide);
        setCurrentSlide(nextSlide);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <div className='w-full flex flex-col items-center justify-center mt-6'>
      <section className='w-full max-w-screen-lg mx-auto px-4 py-12'>
        <article className='relative'>
          <Carousel
            onSlideChange={(currentSlide) => setCurrentSlide(currentSlide)}
            showArrows={false}
            pagination={false}
            itemsToShow={5}
            ref={carouselRef}
          >
            {ashtags.map((item, index) => (
              <div key={index} className='w-full h-10 mx-2 rounded-md relative'>
                <img src={item.img} alt={item.ash} className='w-full h-full rounded-md' />
                <article className='absolute w-full top-0 left-0 bottom-0 right-0 grid place-content-center text-xs sm:text-sm md:text-base capitalize text-white font-medium bg-white bg-cover bg-opacity-10'>
                  {item.ash}
                </article>
              </div>
            ))}
          </Carousel>
          <section className='w-full absolute top-0 left-0 right-0 bottom-0 grid place-content-center'>
            <div className='w-full'>
              <button
                className='bg-gray-100 px-4 py-4 rounded-l-md absolute left-0 -top-1.5'
                onClick={handleLeft}
              >
                <MdOutlineKeyboardArrowLeft className='text-black text-lg' />
              </button>
              <button
                className='bg-gray-100 px-4 py-4 rounded-r-md absolute right-0 -top-1.5'
                onClick={handleRight}
              >
                <MdOutlineKeyboardArrowRight className='text-black text-lg' />
              </button>
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Ash;
