'use client'
import img from "@/assets/img.png"
import wordpress from "@/assets/wordpress.svg";
import htmlIcon from "@/assets/html-icon.svg";
import cssIcon from "@/assets/css-icon.svg";
import jsIcon from "@/assets/js-icon.svg";
import nodeIcon from "@/assets/node-icon.svg";
import reactIcon from "@/assets/react-icon.svg";
import typescriptIcon from "@/assets/typescript-icon.svg";
import boostrapIcon from "@/assets/bootstrap-icon.svg";
import Image from 'next/image';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: "ease-in-out", // Smooth effect
            once: true, // Animates only once
        });
    }, []);
    return (
        <div>
            <div className="flex justify-between items-center h-[630px] px-[80px] ">
                <div className="w-1/2" data-aos="fade-up">
                    <h1 className="text-4xl font-bold mb-4  text-green-500 ">About me</h1>
                    <p>
                        Hi there! I'm Piyas, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
                    </p>
                    <p className="text-2xl mb-4  font-bold text-green-500 ">
                        Here are my main skills:
                    </p>
                    <div className="flex gap-4">
                        <Image
                            src={wordpress}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={htmlIcon}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={cssIcon}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={jsIcon}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={nodeIcon}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={reactIcon}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={typescriptIcon}
                            alt="A descriptive alt text"
                            width={30}
                            height={30}
                        />
                        <Image
                            src={boostrapIcon}
                            alt="piyas"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <div className="" data-aos="zoom-in">
                    <Image
                        src={img}
                        alt="Piyas Ghosh"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default About
