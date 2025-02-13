import React from 'react';
import img1 from '../assets/img/ImagePetiteTablette2.png'

function ComposantMain2(){
    return (
        <div className=' W-[200px] m-2 '>
            <div className='h-[423px]  bg-[#F6F5F4]  p-2 rounded-2xl ml-8'>
                <div>
         <img src={img1} alt="immage 1" className='W-[250px] h-[250px]' />
                </div>
                <div>
          <h2>Effortless Planing</h2>
                </div>
                <div>
            <p>Streamline your meal planning process with our Notion template, designed to be intuitive and user-friendly. With its drag-and-drop functionality, you can easily organise your meals for the week.</p>
                </div>

            </div>

            
        </div>
    );
};

export default ComposantMain2;