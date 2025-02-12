import React from 'react';
import Button from './Button';

function Main1() {
    return (

        <div id='main1' className='flex  justify-center max-w-768  h-[306px] '>
            <div className=" flex flex-col justify-center items-center">
            <h2 className=''>Supercharge your health and save time with Notion</h2>
                <h3 className=''>Our meal planner template helps you to manage your shopping list  and stay in complete control of your diet.</h3>
            <div>
                <Button/>
                <button>View Featurs</button>
            </div>
            </div>
            <div className=''></div>
        </div>

    );
};

export default Main1;