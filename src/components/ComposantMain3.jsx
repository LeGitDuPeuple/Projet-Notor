import React from "react";


function ComposantMain3({flex, icon,text,titre}) {
    return (
        <div className={`bg-[#F6F5F4] p-2 h-[255px] m-1 ${flex} rounded-xl`}>
            <div className="p-6">
            <span className="text-2xl">
               {icon}
            </span>
        <h3 className="font-extrabold text-xl mt-6 mb-6">{titre}</h3>
            <p className="text-[#4E4E4E] leading-8">{text}</p>
            </div>
        </div>
    );
}

export default ComposantMain3;
