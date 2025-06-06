"use client";

import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Message sent successfully!");

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="max-w-2xl mx-auto p-8 text-white  mb-10 mt-10">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
            <p className="text-center mb-6">Let's get in touch! Fill out the form below or reach me via email.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-[5px] bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-[5px] bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                />

                <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className=" p-3 rounded-[5px] bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                />

                <button type="submit" className="bg-green-500 px-4 py-2  mx-auto rounded-full transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                    Send Message
                </button>
            </form>

            <div className="mt-6 text-center">
                <p>Email: <a href="mailto:ghosh.piyas121@gmail.com" className="text-green-400">ghosh.piyas121@gmail.com</a></p>
                <p>Phone: <a href="tel:6297213379" className="text-green-400">6297213379</a></p>
            </div>
        </section>
    );
};

export default Contact;
