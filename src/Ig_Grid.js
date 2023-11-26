import React, { useEffect, useState } from 'react';
import Header from './components/main/Header';
import Body from './components/Ig_Grid/Body';
import MobileNav from './components/Home/MobileNav';
import Footer from './components/main/Foooter';

export default function Ig_Grid() {
  const [sunmoon, setSunMoon] = useState(false);
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3); // Number of items to initially display

  // Mock data, replace this with your actual data fetching logic
  const fetchData = () => {
    // Mock data fetching, replace this with your actual data fetching logic
    const data = [
      // Your data items go here
    ];
    setItems(data);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const handleSun = (e) => {
    if (!sunmoon) {
      e.preventDefault();
      setSunMoon(true);
      document.body.style = 'background:black;';
    } else {
      e.preventDefault();
      setSunMoon(false);
      document.body.style = 'background:white;';
    }
  };

  const handleLoadMore = () => {
    // Increase the number of visible items on "Load More" button click
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Increase by 3 items, you can adjust as needed
  };

  return (
    <div className={!sunmoon?'w-full text-black':' w-full text-white'}>
      <Header sunmoon={sunmoon} setSunMoon={setSunMoon} handleSun={handleSun} />
      <MobileNav />
      <Body items={items.slice(0, visibleItems)} />
      {items.length > visibleItems && (
        <button onClick={handleLoadMore} className='load-more-button'>
          Load More
        </button>
      )}
      <Footer />
    </div>
  );
}
