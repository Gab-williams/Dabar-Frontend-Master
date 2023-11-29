import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../ig_pic/woman_with_atm.png";
import imgone from "../../ig_pic/blackguy.png";
import imgtwo from "../../ig_pic/blackcar.png";
import imgthree from "../../ig_pic/yellowcar.png";
import imgfour from "../../ig_pic/phone.png";
import imgfive from "../../ig_pic/food.png";
import imgsix from "../../ig_pic/protest.png";
import imgeight from "../../ig_pic/Video.png";
import imgseven from "../../ig_pic/robot.png";
import "../../App.css";

export default function Body() {
  const arr = [
    { image: img, title: 'Image 1' },
    { image: imgone, title: 'Image 2' },
    { image: imgtwo, title: 'Image 3' },
    { image: imgthree, title: 'Image 4' },
    { image: imgfour, title: 'Image 5' },
    { image: imgfive, title: 'Image 6' },
    { image: imgsix, title: 'Image 7' },
    { image: imgseven, title: 'Image 8' },
    { image: imgeight, title: 'Image 9' },
    { image: imgsix, title: 'Image 10' },
    { image: imgseven, title: 'Image 11' },
    { image: imgeight, title: 'Image 12' },
    { image: imgsix, title: 'Image 13' },
    { image: imgseven, title: 'Image 14' },
    { image: imgeight, title: 'Image 15' },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='w-full'>
      <section className='w-10/12  text-lg sm:w-10/12 sm:text-base md:w-10/12 md:text-lg lg:w-1/3  lg:text-4xl m-auto capitalize font-semibold text-center mb-12 mt-12'>
        the Dabar instagram
      </section>

      <section className='w-11/12 m-auto'>
        <div className='w-full grid grid-cols-3 sm:grid sm:grid-cols-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 place-content-center  gap-1 mt-5'>
          {arr.map((item, index) => (
            <Link
              key={index}
              to={`/item/${index}`} // Adjust the path as needed
              className={`w-auto sm:w-32 md:w-40 lg:w-auto ${hoveredItem === index ? 'hovered' : ''}`}
            >
              <div
                className='image-container'
                onMouseEnter={() => handleItemHover(index)}
                onMouseLeave={handleItemLeave}
              >
                <img
                  src={item.image}
                  className='w-full h-auto sm:h-32 md:h-52 lg:h-auto'
                  alt={item.title}
                />
                {hoveredItem === index && (
                  <div className='tooltip'>
                    <p>Learn More</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
