import React from "react";
import ComposantMain2 from "./ComposantMain2";
import img1 from "../assets/img/ImagePetiteTablette2.png"
import img2 from "../assets/img/download.png"

function Main2() {

    const title1 = "Effortless Planning";
    const title2 = "Shopping List"
    const p1 = "Streamline your meal planning process with our Notion template, designed to be intuitive and user-friendly. With its drag-and-drop functionality, you can easily organise your meals for the week."
    const p2 = "Say goodbye to forgetting ingredients with our Notion template's automatic grocery list generation. Simply select your desired recipes, and our template will generate a comprehensive.."
  return (
    <div
      id="main2"
      className="flex flex-col justify-center items-center  m-8 "
    >
      <div className="flex flex-col  items-center w-[800px]">
        <h4 className="uppercase text-[#4E4E4E]">featurse</h4>
        <h2 className="font-extrabold text-3xl mt-4 mb-4 ">
          Streamline your meal planning process
        </h2>

        <p className="text-center  text-[#4E4E4E] leading-8">
          Streamline your meal planning process and ensure you never an
          ingredient with our Notion <br /> template, offering effortless
          planning and automatic generator of comprehensive grocery lists.
        </p>

        <div className=" flex w-[950px] mt-8">
            <ComposantMain2 img={img1} title={title1} para={p1}/>
            <ComposantMain2 img={img2} title={title2} para={p2}/>

        </div>
      </div>
    </div>
  );
}

export default Main2;
