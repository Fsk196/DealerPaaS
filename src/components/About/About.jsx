import React from "react";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".aboutLeft", {
      scrollTrigger: {
        trigger: ".aboutLeft",
        start: "top-80%",
        scrub: true,
      },
      opacity: 50,
      x: -1000,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
    });
    gsap.from(".aboutRight", {
      scrollTrigger: {
        trigger: ".aboutRight",
        start: "top-80%",
        scrub: true,
      },
      opacity: 50,
      x: 1000,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
    });
  });

  return (
    <>
      <div id="about" className="bg-white w-full h-full py-6 shadow-lg">
        <div className=" max-w-[1280px] h-full container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-0">
          <div className="flex flex-col md:p-4 gap-2 md:w-[40%] h-full  aboutLeft">
            <div className="w-full flex flex-col gap-2 h-full rounded-lg">
              <h1 className="text-2xl font-medium text-black">
                About <span className="text-[#3919BA]">DealerPaaS</span>
              </h1>
              <p className="text-justify text-base text-[#1C1C1C]">
                DealerPaaS is an integrated application designed specifically on
                cloud-compatible dealer management systems. It gives direct
                integrations with industry solutions and merges all components
                into a single and easily separable platform solution.
              </p>
              <p className="text-justify text-base text-[#1C1C1C]">
                DealerPaaS is a simple and unique multi-operated platform. Our
                proprietary software allows instant automated deal decisions,
                lets the dealer facilitate the deals and approvals for online or
                showroom customers. From booking services, and spare part
                distribution to all reports about credit and contracts and
                online marketing solutions, DealerPaaS delivers all the needs of
                automotive dealers across the globe.
              </p>
              <div>
                <Button className="bg-[#3919BA] button mt-[16px] demoButton px-4 py-5 text-white hover:bg-[#3919BA]/80 shadow-md">
                  <a href="#contact" className="scroll-smooth">
                    Request a Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] h-full p-4 aboutRight">
            <div className="w-full h-full p-4 rounded-lg flex items-center">
              <img
                src="/assets/dealerpaas.png"
                alt="dealerpaas"
                className="rounded-lg w-[500px] transition-all duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
