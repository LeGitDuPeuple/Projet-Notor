import React from 'react';
import Button from './Button';


const Navbar = () => {
    return (
      <div className=" border-1 border-b border-[#F3F3F3]  pl-8 pr-8">
        <nav className='flex justify-between m-4 font-title'>
            <div className="flex items-center ">
                <h1 className='text-[#222222] font-semibold'>NutriPlan</h1>
            </div>
            <div className="">
                <ul className='flex flex-row items-center space-x-6 '>
                    <li className='cursor-pointer text-[#222222] hover:text-[#FFD55A] '>Featurse</li>
                    <li className='cursor-pointer text-[#222222] hover:text-[#FFD55A] '>Testimonials</li>
                    <li className='cursor-pointer text-[#222222] hover:text-[#FFD55A] '>FAQ</li>
                    <li className='cursor-pointertext-[#222222] hover:text-[#FFD55A] '><Button/></li>
                </ul>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;