import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData } from "../../lib/utils";
import Card from "../Card";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const data = cardData;
  console.log(data);

  useGSAP(() => {
    gsap.from(".serviceHeading", {
      scrollTrigger: {
        trigger: ".serviceHeading",
        start: "top-100%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "bounce.inOut",
      // stagger: 0.2,
    });

    gsap.from(".servicePara1", {
      scrollTrigger: {
        trigger: ".serviceHeading",
        start: "top-100%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1,
      ease: "expo.inOut",
    });

    gsap.from(".serviceImage", {
      ScrollTrigger: {
        trigger: ".serviceImage",
        start: "top-100%",
        scrub: true,
      },
      opacity: 0,
      y: 200,
      duration: 2,
      ease: "expo.inOut",
    });

    gsap.from(".leftCard", {
      scrollTrigger: {
        trigger: ".leftCard",
        start: "top-20%",
        scrub: true,
      },
      opacity: 0,
      x: -400,
      duration: 1,
      ease: "expo.inOut",
    });

    gsap.from(".rightCard", {
      scrollTrigger: {
        trigger: ".rightCard",
        start: "top-20%",
        scrub: true,
      },
      opacity: 0,
      x: 400,
      duration: 1,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <>
      <div
        id="product"
        className="w-full h-full my-10 flex flex-col justify-center items-center"
      >
        <div className="max-w-[1280px] py-4 flex flex-col justify-center items-center px-5 md:px-0">
          {/* Heading */}
          <div className="my-4">
            <h2 className="text-2xl md:text-4xl font-semibold md:text-center serviceHeading">
              <span className="text-[#3919BA]">DMS</span> with all modules and
              reports you need run OEM
            </h2>
            <h2 className="text-2xl md:text-4xl font-semibold md:text-center serviceHeading">
              and dealership.
            </h2>
          </div>

          {/* Paragraph */}
          <div className="flex flex-col md:items-center">
            <p className="text-lg md:text-xl text-[#1C1C1C] servicePara1">
              Build with years of experience and used by leading{" "}
              <span className="md:hidden">auto maker</span>
            </p>
            <p className="text-lg md:text-xl text-[#1C1C1C] servicePara1 hidden md:block">
              auto maker
            </p>
          </div>

          {/* Image */}
          <div className="my-3">
            <img
              src="/public/assets/product2.jpg"
              className="serviceImage"
              alt="serviceImage"
            />
          </div>

          <div className="mt-10 container mx-auto mb-8 max-w-[1080px] md:px-4 grid md:grid-cols-3 auto-rows-[200px] gap-4 gap-y-6">
            {cardData.map((card, i) => (
              <Card
                key={card.id}
                title={card.title}
                icon={card.icon}
                listItem={card.listItem}
                wrapper={`${
                  i === 1 && i === 2 && i === 5
                    ? "bg-white"
                    : "bg-gradient-to-b from-white via-white to-[#3919BA]/60"
                }`}
                className={`${
                  i === 1 && i === 2 && i === 5 ? "text-black" : ""
                } ${i === 2 ? "leftCard" : ""}
                
                ${i === 0 ? "md:col-span-2  text-black leftCard" : ""} ${
                  i === 4 ? "md:col-span-2  text-black leftCard" : ""
                } 
              ${i === 3 ? "md:col-span-2  text-black rightCard" : ""}
              
              `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
