import React from "react";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {});
  return (
    <>
      <div className="border-t-2 border-[#3919BA] w-full sm:h-[350px]  flex justify-center items-center">
        <div className="footerMain opacity-100 max-w-[1280px] w-full flex flex-col sm:flex-row sm:justify-between py-5 md:py-0 px-5 md:px-0">
          {/* Menu */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold demoHeading md:text-center text-[#3919BA]">
              Menu
            </h2>
            <div className="flex flex-col gap-4">
              <p>
                <a
                  href="#home"
                  className="underline hover:text-[#3919BA] font-medium scroll-smooth"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="#about"
                  className="underline hover:text-[#3919BA] font-medium scroll-smooth"
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="#product"
                  className="underline hover:text-[#3919BA] font-medium scroll-smooth"
                >
                  Product
                </a>
              </p>
              <p>
                <a
                  href="#contact"
                  className="underline hover:text-[#3919BA] font-medium scroll-smooth"
                >
                  Contact
                </a>
              </p>
              <p>
                <a
                  href="#demo"
                  className="underline hover:text-[#3919BA] font-medium scroll-smooth"
                >
                  Demo
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-2xl font-semibold demoHeading text-center text-[#3919BA]">
              Location
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-medium">USA:</h2>
                <p>6200 Stoneridge Mall Rd, Suite </p>
                <p>300 Pleasanton, CA 94588</p>
              </div>
              <div>
                <h2 className="font-medium">India:</h2>
                <p>HiPaaS Infotech</p>
                <p>Unit-1015, 10th Floor, Lodha</p>
                <p>Supremus</p>
                <p>Kolshet Road, Thane(West)-400607</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-2xl font-semibold demoHeading text-center text-[#3919BA]">
              Socials
            </h2>

            <div>
              <ul className="flex gap-3">
                <li>
                  <a href="">
                    <FaInstagram className="text-4xl" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <PiLinkedinLogoBold className="text-4xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h2 className="text-2xl font-semibold demoHeading text-center text-[#3919BA]">
              Contact
            </h2>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-medium">Request Demo:</h2>
                <p>
                  Email: <a href="">sales@hipaas.com</a>
                </p>
                <p>Tel: +1 408-372-4313</p>
              </div>
              <div>
                <h2 className="font-medium">Work:</h2>
                <p>
                  Email: <a href="">resume@hipaas.com</a>
                </p>
                <p>Tel: +1 408-372-4313</p>
              </div>
              <div>
                <h2 className="font-medium">Invest:</h2>
                <p>
                  Email: <a href="">sales@hipaas.com</a>
                </p>
                <p>Tel: +1 408-372-4313</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
