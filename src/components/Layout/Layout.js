import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-188px)]">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
