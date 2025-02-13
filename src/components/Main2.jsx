import React from "react";
import ComposantMain2 from "./ComposantMain2";

function Main2() {
  return (
    <div
      id="main2"
      className="flex flex-col justify-center items-center  m-8 w-[670px"
    >
      <div className="flex flex-col  items-center">
        <h4 className="uppercase text-[#4E4E4E]">featurse</h4>
        <h2 className="font-extrabold text-3xl mt-4 mb-4 ">
          Streamline your meal planning process
        </h2>

        <p className="text-center  text-[#4E4E4E] leading-8">
          Streamline your meal planning process and ensure you never an
          ingredient with our Notion <br /> template, offering effortless
          planning and automatic generator of comprehensive grocery lists.
        </p>

        <div className=" flex w-[750px]">
            <ComposantMain2/>
            <ComposantMain2/>

        </div>
      </div>
    </div>
  );
}

export default Main2;
