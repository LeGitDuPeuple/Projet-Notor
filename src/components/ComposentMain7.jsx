import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ComposantMain7({ titre }) {
    return (
        <div className="bg-[#F6F5F4] w-[700px] p-6 rounded-xl mb-2">
            <div className="flex justify-between items-center w-full h-[30px] px-2">
                <p className="font-extrabold">{titre}</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-[#222222] pr-2" />
            </div>
        </div>
    );
}

export default ComposantMain7;
