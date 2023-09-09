import React from "react";
import './header.css'

function Header() {
    return (
        <header>
            <div className="left">
                <h2 className="head">Start page</h2>
            </div>
            <div className="center">
                <nav>
                    <h2 className="head">Study</h2>
                    <h2 className="head">Play</h2>
                    <h2 className="head">Ranking</h2>
                </nav>
            </div>
            <div className="right">
                <h2 className="head">Log in</h2>
                <h2 className="head">Sign in</h2>
            </div>
        </header>
    );
}

export default Header;