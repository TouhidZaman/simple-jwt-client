import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase/firebase.init";
import { Link } from "react-router-dom";

const NavigationItems = () => {
    const [user] = useAuthState(auth);
    return (
        <ul className="flex items-center text-stone-400 font-bold">
            <li>
                <NavigationItem to={"/"}>Home</NavigationItem>
            </li>
            <li>
                <NavigationItem to={"/my-items"}>My Items</NavigationItem>
            </li>
            {user ? (
                <li>
                    <Link className="ml-3" onClick={() => signOut(auth)} to={"/login"}>Sign-Out</Link>
                </li>
            ) : (
                <>
                    <li>
                        <NavigationItem to={"/login"}>Login</NavigationItem>
                    </li>
                    <li>
                        <NavigationItem to={"/sign-up"}>Sign-Up</NavigationItem>
                    </li>
                </>
            )}
        </ul>
    );
};

export default NavigationItems;
