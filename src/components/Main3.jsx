import React from "react";
import ComposantMain3 from "./ComposantMain3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

function Main3() {
    const text1 = "Tailor your meal planning to your dietary needs."
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
      <div className="flex bg-[#FF0000] w-[930px] m-4">
        <div className="grid grid-cols-6 gap-4 ">
            <ComposantMain3 flex="col-span-2 col-start-1" icon={ <FontAwesomeIcon icon={faTableCellsLarge} className="icon-style" text={text1}/>}/>
            <ComposantMain3 flex="col-span-4 col-start-3"/>

        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Main3;
