import React from 'react';
import Button from './Button';

function Composant2Main3 ({flex}){
    return (
        <div className={`bg-[#222222] p-4  m-1 ${flex} rounded-xl`}>
        <h4 className='text-xl font-extrabold text-[#FFFFFF] mt-2 mb-2'>10+ Pages</h4>
        <p className='text-[#FFFFFF] mt-2 mb-2 leading-8'>To customise and make this template your own.</p>
        <Button/>
            
        </div>
    );
};

export default Composant2Main3;