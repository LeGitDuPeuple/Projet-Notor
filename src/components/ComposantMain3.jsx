import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

function ComposantMain3() {
    return (
        <div className="bg-[#F6F5F4] p-2 h-[255px] m-4">
            <span>
                <FontAwesomeIcon icon={faTableCellsLarge} className="icon-style" />
            </span>
            <h3>Customisable Layout</h3>
            <p>Tailor your meal planning to your dietary needs.</p>
        </div>
    );
}

export default ComposantMain3;
