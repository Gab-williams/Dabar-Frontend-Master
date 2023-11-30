import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Keypoint(props) {
  const { keypoints } = props;

  return (
    <div className='w-full flex flex-col items-center mb-10 border border-gray-400 py-2 pb-6'>
      <span className='w-10/12 capitalize font-bold text-left mt-5'>
        Key Points
      </span>
      <ul className='w-10/12 flex flex-col items-center  float-left py-3'>
        {keypoints.length > 0 ? (
          keypoints.map((item, index) => {
            return (
              <li key={index} className='w-full text-md text-left capitalize mt-2'>
                {item.content.map((items, i) => {
                  return <span key={i}>{items.value}</span>;
                })}
              </li>
            );
          })
        ) : (
          <>
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={200} />
          </>
        )}
      </ul>
    </div>
  );
}
