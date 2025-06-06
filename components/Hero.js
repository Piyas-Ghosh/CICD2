"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Illustration from "@/assets/illustration.svg";
import linkedin from "@/assets/linkedin.svg";
import githubIcon from "@/assets/github.svg";
import whatsapp from "@/assets/whatsapp.svg";
import telegram from "@/assets/telegram.svg";
import Link from "next/link";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth effect
      once: true, // Animates only once
    });
  }, []);

  return (
    <div className="flex justify-between items-center  w-full h-[630px] px-[80px]">
      {/* Left Content */}
      <div className="w-1/2" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Welcome</h2>
        <h3 className="mb-4">Hello, I am</h3>
        <h1 className="text-6xl font-bold mb-4"> <ReactTyped strings={["Piyas Ghosh."]}
          typeSpeed={150}
          backSpeed={60}
          loop />
        </h1>
        <p className="text-2xl mb-4 font-bold text-green-500">
          Full Stack Developer
        </p>

        {/* Social Links */}
        <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
          <Link href="https://www.linkedin.com/in/piyas-ghosh-b10555233/" target="_blank">
            <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link href="https://github.com/piyasmax" target="_blank">
            <Image src={githubIcon} alt="GitHub" width={30} height={30} />
          </Link>
          <Link href="https://wa.me/7908178140" target="_blank">
            <Image src={whatsapp} alt="WhatsApp" width={30} height={30} />
          </Link>
          <Link href="https://t.me/piyas_203" target="_blank">
            <Image src={telegram} alt="Telegram" width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div data-aos="zoom-in">
        <Image src={Illustration} alt="Hero Image" width={500} height={500} />
      </div>
    </div>
  );
}

export default Hero;
