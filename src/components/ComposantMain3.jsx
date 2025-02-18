import React from "react";


function ComposantMain3({flex, icon,text}) {
    return (
        <div className={`bg-[#F6F5F4] p-2 h-[255px] m-1 ${flex} rounded-xl`}>
            <div className="p-6">
            <span className="text-2xl">
               {icon}
            </span>
            <h3 className="font-extrabold text-xl mt-6 mb-6">Customisable Layout</h3>
            <p>{text}</p>
            </div>
        </div>
    );
}

export default ComposantMain3;
