import React, { useRef, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Skeleton from 'react-loading-skeleton';

export default function Slider(props) {
  const { sunmoon, topstories, client, handleClick, Skeleton, SkeletonTheme } = props;

  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [category, setCategory] = useState('');
  const [alldata, setallData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        topstories.map(async (item) => {
          let data = await client.getEntry(item.fields.storyId.fields.subCategoriesId.sys.id);
          let answer = data.fields.name;

          return {
            heading: item.fields.storyId.fields.heading,
            summary: item.fields.storyId.fields.summary,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            subcategories: answer,
            id: item.sys.id,
          };
        })
      );

      setallData(newData);
    };

    fetchData();
  }, [topstories]);

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
  }, [currentSlide, carouselRef]);

  return (
    <div className="w-full flex items-center justify-center">
      {/* large screen */}
      <article className={!sunmoon ? 'hidden sm:hidden md:hidden lg:w-full lg:mt-1 lg:p-6 lg:block' : 'hidden sm:hidden md:hidden lg:w-full lg:mt-1 lg:p-6 lg:block'}>
        <Carousel
          ref={carouselRef}
          onSlideChange={(currentSlide) => setCurrentSlide(currentSlide)}
          showArrows={false}
          pagination={false}
          itemsToShow={3}
          itemsToScroll={1}
          spaceBetween={10}
          className="w-full "
        >
          {alldata.length > 0
            ? alldata?.map((item, index) => (
                <div className="w-[97%]  h-10 h-screen rounded-md grid place-content-center text-2xl text-black relative" key={index} onClick={() => handleClick(item.id)}>
                  <img src={item.thumbnail} className="w-full h-screen object-cover" />
                  <article className="w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 ">
                    <div className="w-full mt-6 ml-4">
                      <button className="w-50  text-xs float-left rounded-sm font-medium capitalize text-orange-500">{item.subcategories}</button>
                    </div>

                    <div className="w-full flex flex-col ml-4 absolute bottom-8 drop-shadow-2xl">
                      <article className="w-4/5 sm:w-4/5 md:w-2/3 lg:w-2/5 flex flex-row items-center space-x-1 text-white">
                        <a className="text-xs font-medium">2 min</a>
                        <a className="text-xs font-medium">-</a>
                        <a className="text-xs font-medium">27 Dec 2023</a>
                      </article>
                      <section className="w-4/5 text-lg  text-white font-semibold capitalize" onClick={() => handleClick(item.id)}>
                        {item.heading}
                      </section>
                    </div>
                  </article>
                </div>
              ))
            :
            <SkeletonTheme  color="#5e6c77" highlightColor="#a9b7c1">
            <p>
            <Skeleton width={1000} count={5} duration={2}  />
            </p>
           </SkeletonTheme>
            }
        </Carousel>
      </article>
      {/* large screen  */}

      {/* Small screen */}
      <article
        className={
          !sunmoon
            ? 'w-full mt-10 border-b border-black p-6  sm:w-full sm:mt-10 sm:border-b sm:border-gray  sm:p-6  md:w-full md:h-[29rem] md:mt-10 md:border-b md:border-gray md:p-6 lg:hidden'
            : 'w-full mt-10 border-b border-white p-6  sm:w-11/12 sm:mt-10  sm:border-g sm:border-white sm:p-6 md:w-11/12 md:h-[29rem] md:mt-10 md:border-b md:border-white md:p-6 lg:hidden'
        }
      >
        <Carousel showArrows={false} pagination={false} itemsToShow={1.5} itemsToScroll={1} spaceBetween={10} className="w-full ">
          {alldata.length > 0
            ? alldata?.map((item, index) => (
                <div key={index} className="w-[97%]  h-full  rounded-md grid place-content-center text-2xl text-black relative">
                  <img src={item.thumbnail} className="w-full h-96 object-cover" />
                  <article className="w-full h-full absolute bg-cover bg-black bg-opacity-10 right-0 left-0 bottom-0 top-0 ">
                    <div className="w-full mt-6 ml-4">
                      <button className="w-20  text-xs float-left rounded-sm font-medium capitalize bg-[#FD9005] text-white">{item.subcategories}</button>
                    </div>

                    <div className="w-full flex flex-col ml-4 absolute bottom-8">
                      <article className="w-4/5 flex flex-row items-center space-x-1 text-white">
                        <a className="text-xs font-medium">2 min</a>
                        <a className="text-xs font-medium">-</a>
                        <a className="text-xs font-medium">27 Dec 2023</a>
                      </article>
                      <section className="w-4/5 text-sm text-white font-semibold capitalize">{item.heading}</section>
                    </div>
                  </article>
                </div>
              ))
            :
            <SkeletonTheme  color="#5e6c77" highlightColor="#a9b7c1">
            <p className="w-[97%]">
            <Skeleton width={400} count={5} duration={2}  />
            </p>
           </SkeletonTheme>
            }
        </Carousel>
      </article>
    </div>
  );
}
