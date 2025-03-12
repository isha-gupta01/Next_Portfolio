"use client"
import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import grainImage from "@/assets/images/grain.jpg"
import Shapes from "@/components/Shapes";
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
                toast.success(
                    <div>
                        <span style={{ color: '#82AAFF' }}>const </span>
                        <span style={{ color: '#C3E88D' }}>message </span>
                        <span style={{ color: '#F78C6C' }}>= </span>
                        <span style={{ color: '#89DDFF' }}>"Email Sent Successfully!"</span>
                        <span style={{ color: '#C792EA' }}>;</span>
                    </div>, 
                    {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "dark",
                        className: "coding-toast"
                    }
                );

                setFormData({
                    Name: "",

                    email: "",

                    inquiry: "",
                });

                setErrors({});
            } else {
                toast.error(
                    <div>
                        <span style={{ color: '#82AAFF' }}>const </span>
                        <span style={{ color: '#C3E88D' }}>message </span>
                        <span style={{ color: '#F78C6C' }}>= </span>
                        <span style={{ color: '#89DDFF' }}>"Failed to send Email."</span>
                        <span style={{ color: '#C792EA' }}>;</span>
                    </div>, 
                    {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "dark",
                        className: "coding-toast"
                    }
                );
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

            <div className='flex bg-[#0A0F1A] flex-col font-doto  justify-center items-center  md:flex-col lg:flex-row lg:justify-evenly   md:w-[100vw] h-auto lg:h-[100vh] absolute inset-0  -z-20  [mask-image:linear-gradient(to_right,transparent,black_30%,black_90%,transparent)]'>
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                        linear-gradient(90deg, 
                            rgba(255,255,255,0.1) 1px, transparent 1px, 
                            transparent 20px, 
                            rgba(255,255,255,0.1) 21px, transparent 21px, 
                            transparent 120px
                        ),
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '530px 150px', // Adjust size of overall grid,
                        backgroundPosition: "center"
                    }}
                ></div>

                {/* Spotlight effect */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[600px] bg-white/10 blur-[120px] opacity-50"></div>
                <div className=' md:w-1/3 h-3/4 xs:hidden  md:flex  justify-center'>
                    <div className="absolute xs:left-52 xs:top-8 xl:top-8 xl:left-80 lg:top-20 lg:left-32 w-[30vw]"><Image src={Arrow} alt="arrow" width={100} height={100} className="invert" />
                        <span className="absolute top-0 font-bold left-28 ">Feel Free To Play !!!</span>
                    </div>
                    <Shapes />
                </div>
                <div className='w-full h-3/4 lg:w-1/2 md:h-full lg:h-[80%] mt-32 md:mt-10 lg:mt-32 flex justify-center items-center '>


                    <div className='m-8 h-[80vh] md:h-full w-[100%] card-wrapper mb-52 md:py-30 lg:py-2  flex flex-col bg-gray-800 rounded-3xl relative  overflow-hidden z-0  '>


                        <div className="card-content flex flex-col justify-center items-center py-10 px-10 overflow-hidden relative z-10">
                            

                            {/* 🔹 Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-6xl  ml-5 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 mb-10">
                                Get In Touch
                            </h1>

                            {/* 🔹 Form (Ensure Inputs are Clickable) */}
                            <form
                                onSubmit={handleSubmit}
                                className="h-[100%] mt-8 sm:mt-8 md:mt-6 font-extrabold space-y-5 w-full text-white text-xl  z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <label name="Name" htmlFor="input" className="whitespace-nowrap text-xl">NAME {'>>'}</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-3 border-b-2 border-dotted border-white text-lg bg-transparent rounded-lg  focus:outline-none "
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
                                        className="w-full px-3 py-3 border-b-2 border-dotted border-white text-sm bg-transparent  rounded-lg focus:outline-none "
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
                                        className="w-full px-3 py-3 border-b-2 border-dotted border-white text-sm bg-transparent  rounded-lg focus:outline-none "
                                    ></textarea>
                                </div>
                                <div className="flex justify-end ">
                                    <button
                                        type="submit"
                                        className={`w-[20rem]  sm:text-white  px-4  mt-20  py-3 border-white border-dotted border-2 text-white  rounded-lg  transition ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : ""
                                            }`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Firing Right Away..." : "Fire Away"}
                                    </button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )

}

export default ContactPage
