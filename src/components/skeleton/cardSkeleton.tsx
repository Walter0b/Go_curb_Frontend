import React from 'react';

const CardSkeleton = ({ number }: { number: number }) => {
  const skeletonCards = Array.from({ length: number }, (_, index) => (
    <div
      key={index}
      className="border-[#180a0a07] border-[0.2px] shadow-md sm:grid-cols-2 items-left rounded-md dark:bg-[#182644] bg-white p-[20px]"
    >
      <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse dark:bg-[#182644] bg-white">
        <div className="flex-shrink-0 w-12 h-12 rounded-full dark:bg-gray-700 bg-gray-300"></div>
        <div className="flex flex-col space-y-3 w-3/4 md:w-2/3 lg:w-1/2 2xl:w-3/4">
          <div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-2/3 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="grid cards grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 xl:grid-cols-5 2xl:gap-7.5 p-[23px]">
      {skeletonCards}
    </div>
  );
};

export default CardSkeleton;
