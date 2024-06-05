import React from 'react';

function Header() {
    return (
        <div className="flex justify-between pt-4 px-3 w-[32rem] mx-auto text-white">
            <div>
                <span className="material-symbols-outlined">
                    menu
                </span>
                
            </div>
            <div>
                <span className="material-symbols-outlined ">
                    notifications
                </span>
            </div>
        </div>
    );
}

export default Header;
