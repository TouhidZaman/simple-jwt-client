import React from "react";
import Logo from "../../Logo/Logo";

const Footer = () => {
    return (
        <footer className="bg-gray-700">
            <div className="container text-center mx-auto px-4 py-4">
                <Logo className={'text-2xl'} />
                <p className="text-stone-500 pt-2">© 2022 Simple JWT. All Rights Reserved.</p>
                <p className="text-stone-500">Developed by Touhid</p>
            </div>
        </footer>
    );
};

export default Footer;
