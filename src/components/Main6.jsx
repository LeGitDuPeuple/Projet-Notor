import React from "react"; 
import img from "../assets/img/aboutMe.png"

function Main6 () {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="w-[500px] text-center">
            <h2 className="uppercase text-[#4E4E4E]">about me</h2>
            <h3 className="font-extrabold text-3xl mt-2 mb-2 ">Mark Smith</h3>
            <img src={img} alt="image du dev" className=" w-[150px] rounded-[200px] mx-auto" />
        
        <p className="mt-6 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum placeat nemo nulla mollitia ipsum facilis officiis aperiam esse vero, sed error ab delectus cumque odit quos sint iste vel.</p>
        <p className="mt-6 mb-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere dolor minima maxime ab culpa voluptates non necessitatibus. Voluptatibus quo architecto aperiam tempora voluptate a maiores rerum iusto maxime rem?</p>
        </div>
        </div>
    )
}

export default Main6 