import React from "react"; 
import { Carousel } from "@material-tailwind/react";
import CardAvis from "./CardAvis";


function Main5() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[500px] text-center">
        <h4 className="uppercase text-[#4E4E4E] ">Testimonials</h4>
        <h3 className="text-2xl font-extrabold ">This is what our sutomers have to say <span>about this template</span></h3>
        </div>
        <div className="">
        <div className="overflow-hidden w-[500px] relative mt-[60px] mb-[150px]">
    
      <div className="flex w-max animate-marquee">
        {/* Images en boucle */}
        <CardAvis nom="Sofiane"/>
        <CardAvis nom="Cassie"/>
        <CardAvis nom="Bebe"/>
        {/* Duplication pour continuité */}
        <CardAvis nom="Sofiane"/>
        <CardAvis nom="Cassie"/>
        <CardAvis nom="Bebe"/>
      </div>
    </div>
  


        </div>
        </div>
    )
}

export default Main5