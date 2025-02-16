import React from "react";
import ComposantMain3 from "./ComposantMain3";

function Main3() {
  return (
    <div
      id="main3"
      className="flex flex-col justify-center items-center m-8"
    >
      <div className="flex flex-col items-center w-[800px]">
        <h4 className="uppercase text-[#4E4E4E]">mores features</h4>
        <h2 className="font-extrabold text-3xl mt-4 mb-4 text-center">
          Take control of your meal planning and <br />
          <span className="inline-block">nutrition journey</span>
        </h2>
        <p className="text-center  text-[#4E4E4E] leading-8">
          Take control of your meal planning and nutrition journey with our
          comprehensive Notion template featuring effortless planning,
          customizable layouts, nutrition tracking, and seamless recipe
          integration.
          <span className="inline-block">nutrition journey</span>
        </p>
      </div>
      <div className="flex bg-[#FF0000] w-[880px]">
        <div className="">
            <ComposantMain3/>

        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Main3;
