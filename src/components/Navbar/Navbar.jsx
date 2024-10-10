import React, { useState } from "react";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useGSAP(() => {
    gsap.from(".navbar", {
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
    });
    gsap.from(".navbutton", {
      opacity: 0,
      duration: 2,
      ease: "expo.inOut",
      x: 100,
    });
    gsap.from(".navLogo", {
      opacity: 0,
      duration: 2,
      ease: "expo.inOut",
      x: -100,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="h-20 shadow-lg navbar relative z-50">
        <div className="max-w-[1280px] px-4 md:px-0 container mx-auto h-20 flex items-center justify-between">
          {/* Logo */}
          <div>
            <img
              src="/src/assets/logo.jpg"
              className="cursor-pointer navLogo"
              alt="logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-black">
            <ul className="flex gap-3">
              <li className="hover:text-blue-500">
                <a href="#home" className="scroll-smooth">
                  Home
                </a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#demo" className="scroll-smooth">
                  Demo
                </a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#product" className="scroll-smooth">
                  Product
                </a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#about" className="scroll-smooth">
                  About Us
                </a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#contact" className="scroll-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button className="bg-[#3919BA] navbutton text-white hover:bg-[#3919BA]/80 shadow-md">
              <a href="#contact" className="scroll-smooth">
                Request a Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-black shadow-lg transition-all duration-300 absolute top-full left-0 w-full z-40">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <a href="#home" className="scroll-smooth" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#demo" className="scroll-smooth" onClick={toggleMenu}>
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="scroll-smooth"
                  onClick={toggleMenu}
                >
                  Product
                </a>
              </li>
              <li>
                <a href="#about" className="scroll-smooth" onClick={toggleMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="scroll-smooth"
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Button className="bg-[#3919BA] navbutton text-white shadow-md w-full">
                  <a href="#contact" className="scroll-smooth">
                    Request a Demo
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
