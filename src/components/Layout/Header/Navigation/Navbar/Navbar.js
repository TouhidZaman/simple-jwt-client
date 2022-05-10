import React from "react";
import Logo from "../../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <Logo className={"text-3xl"} />
                <NavigationItems />
            </div>
        </nav>
    );
};

export default Navbar;
