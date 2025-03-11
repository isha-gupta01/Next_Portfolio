"use client"
import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import grainImage from "@/assets/images/grain.jpg"
import Shapes from "@/components/shapes";
import Arrow from "@/assets/images/arrow.png"
import Image from "next/image";



const ContactPage = () => {
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        inquiry: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // If already submitting, prevent another request
        if (isSubmitting) return;

        setIsSubmitting(true); // Disable submit button

        const newErrors = {};
        if (!formData.Name) newErrors.Name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.inquiry) newErrors.inquiry = "Inquiry is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false); // Re-enable button if validation fails
            return;
        }

        try {
            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Email Sent Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "dark"
                });

                setFormData({
                    Name: "",

                    email: "",

                    inquiry: "",
                });

                setErrors({});
            } else {
                toast.error('Failed to Send Email!', {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "dark"
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false); // Re-enable button after request is complete
        }
    };

    return (
        <>
            <ToastContainer />

            <div className='flex flex-col font-doto  justify-center items-center  md:flex-col lg:flex-row lg:justify-evenly   md:w-[100vw] h-auto lg:h-[100vh] absolute inset-0  -z-20 bg-white/10 bg-[linear-gradient(to_right,#6ee7b733_2px,transparent_2px),linear-gradient(to_bottom,#6ee7b733_2px,transparent_2px)] bg-[size:140px_140px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_150%)]'>

                <div className=' md:w-1/3 h-3/4 xs:hidden  md:flex relative justify-center'>
                    <div className="absolute -top-2 left-20 w-[30vw]"><Image src={Arrow} alt="arrow" width={100} height={100} className="invert" />
                        <span className="absolute top-0 left-28">Feel Free To Play !!!</span>
                    </div>
                    <Shapes />
                </div>
                <div className='w-full h-3/4 lg:w-1/2 md:h-full lg:h-[80%] mt-32 md:mt-10 lg:mt-32 flex justify-center items-center '>


                    <div className='m-8 h-[80vh] md:h-full w-[100%] card-wrapper mb-52 md:py-30 lg:py-2  flex flex-col bg-gray-800 rounded-3xl relative  overflow-hidden z-0  '>


                        <div className="card-content flex flex-col justify-center items-center py-10 px-10 overflow-hidden relative z-10">
                            {/* 🔹 Background Image (Prevent Blocking Inputs) */}
                            <div
                                className="absolute inset-0 opacity-5 pointer-events-none"
                                style={{
                                    backgroundImage: `url(${grainImage.src})`,
                                    backgroundSize: "cover",
                                }}
                            ></div>

                            {/* 🔹 Heading */}
                            <div className="uppercase font-extrabold text-2xl font-doto tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text pb-8">
                                Get in Touch with Me
                            </div>

                            {/* 🔹 Form (Ensure Inputs are Clickable) */}
                            <form
                                onSubmit={handleSubmit}
                                className="h-[100%]  space-y-5 w-full text-green-300 text-xl relative z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <label name="Name" htmlFor="input" className="whitespace-nowrap text-xl">NAME {'>>'}</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-3 border-b-2 border-dotted border-green-300 text-lg bg-transparent rounded-lg  focus:outline-none "
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label name="email" htmlFor="input" className="whitespace-nowrap text-xl">EMAIL {'>>'}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-3 border-b-2 border-dotted border-green-300 text-sm bg-transparent  rounded-lg focus:outline-none "
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label name="inquiry" htmlFor="input" className="whitespace-nowrap text-xl">QUERY {'>>'}</label>
                                    <textarea
                                        type="text"
                                        name="inquiry"
                                        value={formData.inquiry}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-3 border-b-2 border-dotted border-green-300 text-sm bg-transparent  rounded-lg focus:outline-none "
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-1/2 absolute bottom-20 right-0 px-4  py-3 border-green-300 border-dotted border-2 text-white  rounded-lg  transition ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : ""
                                        }`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Firing Right Away..." : "Fire Away"}
                                </button>
                            </form>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )

}

export default ContactPage
