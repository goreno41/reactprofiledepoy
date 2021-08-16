import React from "react";


const NavBar = () => {
    return (
        <section class="header">
            <h1>Josh Renaud</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default NavBar;