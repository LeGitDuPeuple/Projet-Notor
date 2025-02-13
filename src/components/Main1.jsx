import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import  grandTablette from "../assets/img/imageGrandeTablette.png"



function Main1() {
    return (

        <div id='main1' className='flex  justify-center h-[306px] m-8'>
        <div className=" flex flex-col  w-[670px] justify-center justify-between items-center">
        
            <h2 className='text-5xl text-center font-extrabold leading-14 '>Supercharge your health and save time with Notion</h2>
            
            <h3 className='text-center text-[#4E4E4E] leading-10 m-4 w-[670px] text-xl
'>Our meal planner template helps you to manage your shopping list  and stay in complete control of your diet.</h3>
            <div className='flex justify-between'>
                <Button margin='mr-3'/>
                <button className='ml-3'>View Featurses <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
            </div>
            </div>
            <div className=''>

                <img src={grandTablette} alt="image" />
            </div>
        </div>

    );
};

export default Main1;