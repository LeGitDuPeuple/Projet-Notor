import React from "react"; 
import ComposantMain7 from "./ComposentMain7";
import Button from "./Button";
import img from "../assets/img/ImagePetiteTablette2.png"



function Main7() {
    return (
    <div className="flex flex-col justify-center items-center mt-20">
        <div className=" w-[500px] mb-6 mt-6">
<h2 className="uppercase text-[#4E4E4E] text-center">faq</h2>
<h4 className="font-extrabold text-3xl mt-4 mb-4 text-center leading-12 ">Here are the answers to the most frequently asked questions</h4>
    </div>
    <div>
        <ComposantMain7 titre="What is notion ?"/>
        <ComposantMain7 titre="What is this for ?"/>
        <ComposantMain7 titre="Do I need to pay to use Notion ?"/>
        <ComposantMain7 titre="What whill I get when I buy the template ?"/>
        <ComposantMain7 titre="How can I ask more questions ?"/>
    </div>

    <div className="bg-[#F6F5F4] p-2 rounded-xl ml-4 mr-4 w-[700px] mt-18">
      <div className="grid grid-cols-2">
        <div className=" p-4 flex flex-col justify-center items-center">
            <h3 className="font-extrabold text-3xl text-center mt-2 mb-2">The ultimate 
                <span className="inline-block text-center"> meal planner
                    
                    </span>
                    </h3>
            <p className="text-center">Supercharge your health and take control of your diet now!</p>
            <Button/>
        </div>
        <div className="p-4">
            <img src={img} alt="image tablette" />
         
        </div>
      </div>
    </div>
    </div>
    )
}

export default Main7;