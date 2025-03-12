import React from 'react'

const page = () => {
  return (
    <div>
     <div className="relative h-screen bg-[#0A0F1A] text-white overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_30%,black_90%,transparent)]">
            {/* Custom grid pattern */}
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
                    backgroundPosition:"center"
                }}
            ></div>

            {/* Spotlight effect */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[600px] bg-white/10 blur-[120px] opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                {/* <p className="text-gray-400 absolute top-10 uppercase tracking-widest"></p> */}
                <h1 className="text-7xl absolute top-14 ml-5 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                Get In Touch
                </h1>
                <form
                                // onSubmit={handleSubmit}
                                className="h-[100%]  space-y-5 absolute top-40 text-white text-xl  z-20"
                            >
                                <div className="flex absolute top-8 items-center gap-2">
                                    <label name="Name" htmlFor="input" className="whitespace-nowrap text-xl">NAME {'>>'}</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        // value={formData.Name}
                                        // onChange={handleChange}
                                        required
                                        className="px-3 py-3  text-lg bg-transparent rounded-lg  focus:outline-none "
                                    />
                                </div>
                                <div className="flex absolute top-14 items-center gap-2">
                                    <label name="email" htmlFor="input" className="whitespace-nowrap text-xl">EMAIL {'>>'}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        required
                                        className=" px-3 py-3  text-sm bg-transparent  rounded-lg focus:outline-none "
                                    />
                                </div>
                                <div className="flex absolute top-32 items-center gap-2">
                                    <label name="inquiry" htmlFor="input" className="whitespace-nowrap text-xl">QUERY {'>>'}</label>
                                    <textarea
                                        type="text"
                                        name="inquiry"
                                        // value={formData.inquiry}
                                        // onChange={handleChange}
                                        required
                                        className=" px-3 py-3  text-sm bg-transparent  rounded-lg focus:outline-none "
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-1/2 absolute bottom-16 right-0 px-4  py-3 border-green-300 border-dotted border-2 text-white  rounded-lg  transition 
                                        `}
                                        // ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : ""}
                                    // disabled={isSubmitting}
                                >
                                    {/* {isSubmitting ? "Firing Right Away..." : "Fire Away"} */}go
                                </button>
                            </form>
                {/* <p className="mt-4 text-lg text-gray-400">
                    The world’s best login box, powered by WorkOS + Radix.
                </p> */}

                {/* GitHub Button */}
                {/* <button className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                    View GitHub
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default page
