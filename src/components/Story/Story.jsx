import React from "react";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  useGSAP(() => {
    gsap.from(".storyLeft", {
      scrollTrigger: {
        trigger: ".storyLeft",
        start: "top-10%",
        scrub: true,
      },
      opacity: 0,
      x: -2000,
      delay: 3,
      duration: 1,
      ease: "expo.inOut",
    });
    gsap.from(".storyRight", {
      scrollTrigger: {
        trigger: ".storyRight",
        start: "top-10%",
        scrub: true,
      },
      opacity: 0,
      x: 2000,
      delay: 3,
      duration: 2,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <>
      <div className="md:h-[530px] w-full bg-[#3919BA] flex justify-center items-center">
        <div className="w-full h-full max-w-[1280px]  py-10 md:py-0 text-white flex flex-col md:flex-row justify-between items-center storyCard px-5 md:px-0">
          <div className="flex flex-col gap-4 storyLeft">
            <h2 className="font-medium text-2xl">Our Story</h2>

            <div className="text-base font-medium">
              <p>Developed in India’s auto city- Pune using HiPaaS AI </p>
              <p>Augmented Application Development Framework</p>
            </div>

            <div className="text-sm">
              <p>As life-long Automation enthusiasts from a family of 3 </p>
              <p>
                generations of software engineers, the layout was firmly laid{" "}
              </p>
              <p>at a young age for Pramod and Deepti. They started their </p>
              <p>own team of Automation and software developers in 1998. </p>
              <p>They evolved the Current DMS Solution from Offline to semi-</p>
              <p>online to complete Cloud-based ERP along with incorporating</p>
              <p>business needs as per customer requirements</p>
            </div>

            <div>
              <Button className="bg-black button mt-[16px] demoButton px-4 py-5 text-white hover:bg-black/60 shadow-md">
                <a href="#contact" className="scroll-smooth">Request a Demo</a>
              </Button>
            </div>
          </div>

          <div className="storyRight">
            <img
              src="/src/assets/about.jpg"
              alt="dealerpaas"
              className="rounded-lg w-[500px] transition-all duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
