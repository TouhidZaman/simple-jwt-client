import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavigationItem = ({ to, children }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link className={`ml-3 ${match && "text-yellow-400"}`} to={to}>
            {children}
        </Link>
    );
};

export default NavigationItem;
