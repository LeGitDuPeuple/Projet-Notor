import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
      <div className=" border-1 border-b border-[#F3F3F3] ">
        <nav className='flex justify-between m-4 font-title'>
            <div className="flex items-center ">
                <h1 className='font-title'>NutriPlan</h1>
            </div>
            <div className="">
                <ul className='flex flex-row items-center space-x-6 '>
                    <li className='cursor-pointer text-ma-couleur'>Featurse</li>
                    <li className='cursor-pointer'>Testimonials</li>
                    <li className='cursor-pointer'>FAQ</li>
                    <li className='cursor-pointer'><Button/></li>
                </ul>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;