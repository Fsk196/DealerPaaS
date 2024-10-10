import React from "react";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useGSAP(() => {
    gsap.from(".demoHeading", {
      scrollTrigger: {
        trigger: ".demoHeading",
        start: "top-20%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "bounce.inOut",
      // stagger: 0.2,
    });

    gsap.from(".demoPara1", {
      scrollTrigger: {
        trigger: ".demoHeading",
        start: "top-20%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1,
      ease: "expo.inOut",
    });

    gsap.from(".demoLeft", {
      scrollTrigger: {
        trigger: ".demoPara1",
        start: "top-100%",
        scrub: true,
      },
      opacity: 0,
      x: -400,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
    });

    gsap.from(".demoRight", {
      scrollTrigger: {
        trigger: ".demoPara1",
        start: "top-100%",
        scrub: true,
      },
      opacity: 0,
      x: 400,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <>
      <div
        id="demo"
        className="w-full h-screen flex flex-col justify-center items-center shadow-lg px-5 md:px-0"
      >
        <div className="w-full max-w-[1280px] ">
          <div>
            {/* Heading */}
            <div>
              <h2 className="md:text-4xl text-2xl font-semibold demoHeading md:text-center">
                <span className="text-[#3919BA]">DealerPaas</span> is
                future-ready. Seamless Management
              </h2>
              <h2 className="md:text-4xl text-2xl font-semibold demoHeading md:text-center">
                of electric vehicle ecosystem.
              </h2>
            </div>

            {/* para */}
            <div className="my-3 flex flex-col md:items-center">
              <p className="text-lg md:text-xl text-[#1C1C1C] demoPara1">
                DealerPaaS EV dealership solution helps dealers solve the
                current
              </p>
              <p className="text-lg md:text-xl text-[#1C1C1C] demoPara1">
                and future challenges of the growing EV market in most of
                critical{" "}
              </p>
              <p className="text-lg md:text-xl text-[#1C1C1C] demoPara1">
                areas.
              </p>
            </div>
          </div>

          {/* Demo  */}
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 w-full mt-[89px]">
            <div className="flex flex-col demoLeft">
              <h2 className="md:text-3xl text-2xl font-medium">
                Watch <span className="text-[#3919BA]">DMS</span> in action for
              </h2>
              <h2 className="md:text-3xl text-2xl font-medium">
                Service Module
              </h2>

              <div className="md:my-2">
                <p>We have everything you need to manage </p>
                <p>your dealership and Service center. </p>
              </div>

              <div>
                <Button className="bg-[#3919BA] button md:mt-[16px] my-3 demoButton px-4 py-5 text-white hover:bg-[#3919BA]/80 shadow-md">
                  <a href="#contact" className="scroll-smooth">
                    Request a Demo
                  </a>
                </Button>
              </div>
            </div>

            {/* Video tag  */}
            <div className="demoRight">
              <video
                src="/assets/DealerPaas.mp4"
                controls
                className="w-[500px] rounded-xl shadow-lg border-0 focus:outline-none"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
