import React from "react";
import ComposantMain3 from "./ComposantMain3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';
import {faCarrot} from '@fortawesome/free-solid-svg-icons';
import Composant2Main3 from "./Composant2Main3";

function Main3() {
    const text1 = "Tailor your meal planning to your dietary needs."
    const text2 = "Explain how your template allows users to track their nutritional intake, monitor calorie counts, and maintain a balanced diet effortlessly.";
    const text3 = "Mention that users can access a vast collection of recipes or import their own, making meal planning even more convenient."
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
      <div className="flex flex-col bg-[#FF0000] w-[930px] m-4">
        <div className="grid grid-cols-6 gap-4 ">
            <ComposantMain3 flex="col-span-2 col-start-1" titre="Customisable Layout" icon={ <FontAwesomeIcon icon={faTableCellsLarge} className="icon-style" />} text={text1}/>
            <ComposantMain3 flex="col-span-4 col-start-3" titre="Nutrition Tracking" icon={ <FontAwesomeIcon icon={faCalculator} className="icon-style"/>} text={text2}/>

        </div>
        <div className="grid grid-cols-6 gap-4">
           <ComposantMain3 flex="col-span-4 col-start-1" titre="Recipe Integration" icon={ <FontAwesomeIcon icon={faCarrot} className="icon-style"/>} text={text2}/>
           <Composant2Main3 flex="col-span-2 col-start-5"/>
            
        </div>
      </div>
    </div>
  );
}

export default Main3;
