import React, { useState } from "react";
import "./Styles.css";

function Navigation() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <ul className={`navigation ${isActive ? "active" : ""}`}>
            <li>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="job" aria-label="Search" />

                </form>
            </li>
            <li>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="paid" aria-label="Search" />

                </form>
            </li>
            <li>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="localisation" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">🔍</button>
                </form>
            </li>
            <div className="navigation toggleMenu" onClick={handleToggle}></div>
        </ul>
    );
}

export default Navigation;

