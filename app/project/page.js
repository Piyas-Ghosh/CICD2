'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import externalLink from "../../assets/external-link.svg"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Project = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: "ease-in-out", // Smooth effect
            once: true, // Animates only once
        });
    }, []);

    return (
        <div className='flex justify-center flex-col'>
            <h1 className='flex font-bold text-4xl pt-5 justify-center' data-aos="fade-down">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  px-7 m-10  mt-11" data-aos="zoom-in">
                {/* //cards 1 */}
                <div className="bg-gray-800 w-[85%] rounded-xl px-3 py-3 hover:bg-pink-700 hover:-translate-y-3 transition-transform duration-300 p-3">
                    <div className='flex justify-between px-2'>
                        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <title>Folder</title>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div className="project-links">
                            <Link href="https://electro-cartnitro.000webhostapp.com/index.php" target="_blank" rel="noreferrer">
                                <Image src={externalLink} alt='link' width={55} height={55} />
                            </Link>
                        </div>
                    </div>
                    <div className="leading-10 mt-5">
                        <h3> ElectroCart (E-commerce Website)</h3>
                        <p>...</p>
                    </div>
                    <footer className='mt-7'>
                        <ul className="flex gap-3">
                            <li>Javascript</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>PHP</li>
                        </ul>
                    </footer>
                </div>

                {/* card 2 */}
                <div className="bg-gray-800 w-[85%] rounded-xl px-3 py-3 hover:bg-pink-700 hover:-translate-y-3 transition-transform duration-300 p-3">
                    <div className='flex justify-between px-2'>
                        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <title>Folder</title>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div className="project-links">
                            <Link href="https://electro-cartnitro.000webhostapp.com/index.php" target="_blank" rel="noreferrer">
                                <Image src={externalLink} alt='link' width={55} height={55} />
                            </Link>
                        </div>
                    </div>
                    <div className="leading-10 mt-5">
                        <h3> ElectroCart (E-commerce Website)</h3>
                        <p>...</p>
                    </div>
                    <footer className='mt-7'>
                        <ul className="flex gap-3">
                            <li>Javascript</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>PHP</li>
                        </ul>
                    </footer>
                </div>
                {/* card 3 */}
                <div className="bg-gray-800 w-[85%] rounded-xl px-3 py-3 hover:bg-pink-700 hover:-translate-y-3 transition-transform duration-300 p-3">
                    <div className='flex justify-between px-2'>
                        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <title>Folder</title>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div className="project-links">
                            <Link href="https://electro-cartnitro.000webhostapp.com/index.php" target="_blank" rel="noreferrer">
                                <Image src={externalLink} alt='link' width={55} height={55} />
                            </Link>
                        </div>
                    </div>
                    <div className="leading-10 mt-5">
                        <h3> ElectroCart (E-commerce Website)</h3>
                        <p>...</p>
                    </div>
                    <footer className='mt-7'>
                        <ul className="flex gap-3">
                            <li>Javascript</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>PHP</li>
                        </ul>
                    </footer>
                </div>

                {/* card 4 */}
                <div className="bg-gray-800 w-[85%] rounded-xl px-3 py-3 hover:bg-pink-700 hover:-translate-y-3 transition-transform duration-300 p-3">
                    <div className='flex justify-between px-2'>
                        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <title>Folder</title>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div className="project-links">
                            <Link href="https://electro-cartnitro.000webhostapp.com/index.php" target="_blank" rel="noreferrer">
                                <Image src={externalLink} alt='link' width={55} height={55} />
                            </Link>
                        </div>
                    </div>
                    <div className="leading-10 mt-5">
                        <h3> ElectroCart (E-commerce Website)</h3>
                        <p>...</p>
                    </div>
                    <footer className='mt-7'>
                        <ul className="flex gap-3">
                            <li>Javascript</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>PHP</li>
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Project;
