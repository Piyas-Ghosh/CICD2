"use client";

import React, { useRef } from "react";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="flex justify-between px-12 bg-[#21212150] backdrop-blur-md text-white py-5 sticky top-0 items-center z-50">
        <div className="logo font-bold">
          <h2 onClick={() => handleScroll(homeRef)} className="cursor-pointer">
            piyas ghosh
          </h2>
        </div>
        <ul className="flex gap-6 items-center ">
          <li  onClick={() => handleScroll(homeRef)} className="cursor-pointer  rounded-md transition-all duration-300 hover:text-green-500">
            Home
          </li>
          <li  onClick={() => handleScroll(aboutRef)} className="cursor-pointer rounded-md transition-all duration-300 hover:text-green-500">
            About
          </li>
          <li onClick={() => handleScroll(projectsRef)} className="cursor-pointer rounded-md transition-all duration-300 hover:text-green-500">
            Projects
          </li>
          <li onClick={() => handleScroll(contactRef)} className="cursor-pointer rounded-md transition-all duration-300 hover:text-green-500">
            Contact
          </li>

          <li>
            <a href="/PiyasGhosh.pdf" download className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">Resume</span>
              <span className="relative invisible">Resume</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div ref={homeRef} className="h-screen flex items-center justify-center">
        <Hero />
      </div>
      <div ref={aboutRef} className="h-screen flex items-center justify-center ">
        <About />
      </div>
      <div ref={projectsRef} className="h-screen flex items-center justify-center">
        <Project />
      </div>
      <div ref={contactRef} className="h-screen flex items-center justify-center">
        <Contact />
      </div>
    </>
  );
};

export default Navbar;
