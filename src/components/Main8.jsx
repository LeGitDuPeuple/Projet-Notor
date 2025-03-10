import React from "react";

function Main8() {
    return (
        <div className="flex flex-col justify-center items-center mt-28 mb-28">
            <h2 className="font-extrabold text-3xl text-[#222222] mt-2 mb-2">
                Join the community
            </h2>
            <p className="text-[#4E4E4E] text-center">
                Sign up to receive updates and discounts for all my existing and future templates.
            </p>

            <div className="flex mt-4">
                <input 
                    type="text" 
                    placeholder="Enter your email"
                    className="border border-black px-4 py-2 rounded-l-md focus:outline-none"
                />
            
                <button className="bg-black text-white px-6 py-2 rounded-r-md">
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Main8;
