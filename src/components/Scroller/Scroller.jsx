import React, { useRef, useEffect } from "react";

const Scroller = () => {
  return (
    <div className="flex w-full h-24 justify-center items-center overflow-x-hidden overflow-y-hidden shadow-lg">
      <div className="flex space-x-16 animate-loop-scroll">
        {/* First batch of images */}
        <div className="flex justify-center items-center gap-5 flex-shrink-0">
          {[
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
          ].map((car) => (
            <img
              key={car}
              src={`/assets/${car}.png`}
              className="cursor-pointer w-24 h-auto" // Adjust width for responsiveness
              alt={car}
            />
          ))}
        </div>

        {/* Second batch of images */}
        <div className="flex justify-center items-center gap-5 flex-shrink-0">
          {[
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
          ].map((car) => (
            <img
              key={car}
              src={`/assets/${car}.png`}
              className="cursor-pointer w-24 h-auto" // Adjust width for responsiveness
              alt={car}
            />
          ))}
        </div>
      </div>

      {/* <div className="flex space-x-16 overflow-hidden">
        <div className="flex w-[200%] justify-center items-center gap-10 animate-loop-scroll">
          {[
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
          ].map((car) => (
            <img
              key={car}
              src={`/src/assets/${car}.png`}
              width={100}
              id="img"
              className="cursor-pointer max-w-none"
              alt={car}
            />
          ))}
        </div>
        <div
          className="flex w-[200%] justify-center items-center gap-10 animate-loop-scroll"
          aria-hidden="true"
        >
          {[
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
            "tesla",
            "bmw",
            "joy",
            "merce",
            "suzuki",
            "tata",
          ].map((car) => (
            <img
              key={car}
              src={`/src/assets/${car}.png`}
              width={100}
              id="img"
              className="cursor-pointer max-w-none"
              alt={car}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Scroller;
