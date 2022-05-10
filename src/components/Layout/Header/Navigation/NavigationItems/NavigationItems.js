import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className="flex items-center text-stone-400 font-bold">
            <li>
                <NavigationItem to={"/"}>Home</NavigationItem>
            </li>
            <li>
                <NavigationItem to={"/login"}>Login</NavigationItem>
            </li>
            <li>
                <NavigationItem to={"/sign-up"}>Sign-Up</NavigationItem>
            </li>
        </ul>
    );
};

export default NavigationItems;
