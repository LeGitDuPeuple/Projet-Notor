import React from 'react';


function ComposantMain2({img}) {
    return (
        <div className='m-2'>
            {/* Conteneur principal */}
            <div className='bg-[#F6F5F4] p-2 rounded-2xl ml-4 mr-4'>
                <div className='m-2 flex justify-center'>
                    {/* Centrer l'image dans son conteneur */}
                    <img src={img} alt="immage 1" className='w-[350px] h-[250px]' />
                </div>
                <div>
                    <h2 className='m-3 font-extrabold text-2xl  '>Effortless Planning</h2>
                </div>
                <div>
                    <p className='m-3'>
                        Streamline your meal planning process with our Notion template, designed to be intuitive and user-friendly. With its drag-and-drop functionality, you can easily organise your meals for the week.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComposantMain2;
