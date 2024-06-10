import React from 'react';
import '../style/BurgerMenu.css';  // Ensure the correct import of CSS file

function Header() {
    return (
        <div className="flex justify-between pt-4 px-3 w-[32rem] mx-auto text-white">



            <div className="">
                <div className="center">
                    <div></div>
                </div>

            </div>
            <div>
                <span className="material-symbols-outlined">
                    notifications
                </span>
            </div>
        </div>
    );
}

export default Header;
