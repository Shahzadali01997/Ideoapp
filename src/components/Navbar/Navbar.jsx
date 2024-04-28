import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    
                    <img className="logo" src="./portfolio-logo.png" alt="" />

                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}
                        >Hire Me</button>
                    </ul>
                    {/* <div className="menu-btn" onClick={() => {}}>
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div> */}

                    <button class="menu-btn" onClick={() => {}}>
                        {/* <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.6rem"}}
                        >
                    
                        </span> */}
                         <span class="line"></span>
                         <span class="line"></span>
                         <span class="line"></span>
                        
                    </button> 
                </div>
            </nav>
        </>
    );
};

export default Navbar