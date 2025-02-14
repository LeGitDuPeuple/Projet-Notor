import React from 'react';


function ComposantMain2({img, title, para}) {
    return (
        <div className='m-2'>
            {/* Conteneur principal */}
            <div className='bg-[#F6F5F4] p-2 rounded-2xl ml-4 mr-4'>
                <div className='m-2 flex justify-center'>
                    {/* Centrer l'image dans son conteneur */}
                    <img src={img} alt="immage 1" className='w-[350px] h-[250px]' />
                </div>
                <div>
                    <h2 className='m-3 font-extrabold text-2xl  '>{title}</h2>
                </div>
                <div>
                    <p className='m-3'>
                       {para}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComposantMain2;
