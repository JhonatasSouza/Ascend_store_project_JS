import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <ul className="flex gap-10 text-white font-semibold">
            <li>
                <NavLink
                    to={`/`}
                    className={({ isActive }) => (isActive ? "text-amber-400" : "hover:text-amber-300")}
                >
                    Início
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/promocoes`}
                    className={({ isActive }) => (isActive ? "text-amber-400" : "hover:text-amber-300")}
                >
                    Promoções
                </NavLink>
            </li>
        </ul>
    );
}

export default Navbar;