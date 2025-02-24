import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardAvis( {nom}){
    return (
        <div className="bg-[#F6F5F4] w-[460px] h-[320px] rounded-xl m-4">
            <div className="p-12">
              <h5>{nom}</h5>
              <p className="mt-6 mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aut quas in veniam, blanditiis aspernatur quam deserunt dolore libero quo.</p>
             <span className=""> <FontAwesomeIcon icon={faStar} className="icon-style text-[#FFD55A]  mr-2" /></span>
        
             <span><FontAwesomeIcon icon={faStar} className="icon-style text-[#FFD55A] mr-2" /></span>
             <span><FontAwesomeIcon icon={faStar} className="icon-style text-[#FFD55A]  mr-2" /></span>
             <span><FontAwesomeIcon icon={faStar} className="icon-style text-[#FFD55A]  mr-2" /></span>
             <span><FontAwesomeIcon icon={faStar} className="icon-style text-[#FFD55A]" /></span>

            </div>


        </div>
    )
}

export default CardAvis