import React from "react";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.from("#getStart", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
    });

    gsap.from(".mainHeading", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.2,
    });

    gsap.from(".para1", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1,
      ease: "expo.inOut",
      stagger: 0.2,
    });

    gsap.from(".button", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1.5,
      ease: "expo.inOut",
      stagger: 0.2,
    });

    gsap.from(".homeDashImage", {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1.5,
      ease: "expo.inOut",
      stagger: 0.2,
    })
  }, []);
  return (
    <>
      <div
        id="home"
        className="w-full h-[700px] md:h-screen overflow-hidden  relative bg-gradient-to-b from-white via-white to-[#3919BA]/60 rounded-lg border overflow-x-hidden flex flex-col"
      >
        <div className="flex justify-center items-center h-[70%] p-2 flex-col px-5 md:px-0">
          {/* Get Start bar */}
          <div
            id="getStart"
            className="bg-white border-2 border-[#CCCCCC] rounded-full animate-bounce drop-shadow-lg"
          >
            <div className="z-10 shadow-[#3919BA]/10 shadow-md flex gap-2 md:gap-6 border-2 border-[#CCCCCC] rounded-full bg-white px-2 py-1 items-center">
              <h2 className="bg-[#3919BA] rounded-full px-3 py-1 text-white text-sm">
                New
              </h2>
              <h2 className="text-sm">Get Started with DMS Now.</h2>
            </div>
          </div>

          {/* Element */}
          <div className="my-[30px] flex flex-col md:items-center">
            <div className="flex flex-col md:gap-6 md:items-center">
              <h2 className="md:text-[50px]  text-3xl font-bold mainHeading">
                First Smart EV Automotive{" "}
                <span className="text-[#3919BA]">Dealership</span>
              </h2>
              <h2 className="md:text-[50px] text-3xl font-bold mainHeading">
                Management System(DMS)
              </h2>
            </div>

            <p className="md:text-3xl text-xl text-[#505050] mt-3 para1">
              We have everything you need to manage your OEM and
            </p>
            <p className="md:text-3xl text-xl text-[#505050] para1">
              dealership relationship.
            </p>
            <div>
              <Button className="bg-[#3919BA] button mt-[16px]  px-4 py-5 text-white hover:bg-[#3919BA]/80 shadow-md">
                <a href="#contact" className="scroll-smooth">
                  Request a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* image card */}

        <div className="absolute bottom-0 md:-bottom-7 w-full justify-center flex items-center px-5 md:px-0">
          
          <img src="/assets/DashboardImage.png" className="homeDashImage" alt="dashboard" />
        </div>
      </div>
    </>
  );
};

export default Home;
