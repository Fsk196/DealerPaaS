import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, icon, listItem, className, wrapper }) => {
  useGSAP(() => {}, []);
  return (
    <>
      <div
        className={`${className} ${wrapper} hover:scale-105 shadow-lg border-gray-100 border transition-all duration-200 ease-in-out rounded-lg p-2 flex flex-col justify-center gap-4 px-4 `}
      >
        <div className="flex items-center gap-2 cardData">
          {icon}
          <h2 className={`text-xl font-bold ${className}`}>{title}</h2>
        </div>
        <ul className="mt-2 cardData">
          {listItem.map((item, index) => (
            <li
              key={index}
              className={`text-sm text-black flex items-center gap-2  ${className}`}
            >
              <FaArrowRight className={`text-blue-500 ${className}`} />
              <h2>{item}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Card;
