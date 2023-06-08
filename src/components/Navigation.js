import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="site-title">MINIATURE COLLECTION</div>
            <NavLink to="/" end>HOME</NavLink>
            <NavLink to="/sets">SETS</NavLink>
            <NavLink to="/miniatures">MINIATURES</NavLink>
        </nav>
    )
}

export default Navigation;