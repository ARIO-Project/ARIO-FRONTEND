import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks1, navLinks2 } from "../../../data.js";
import { Icon } from '@iconify/react';
import './Navbar.css'

const NavBar = () => {
    const [navScrolling, setNavScrolling] = useState(false);
    const [navScrolling2, setNavScrolling2] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50 && window.scrollY < 1100) {
                setNavScrolling(true)
                setNavScrolling2(false)
            } else if (window.scrollY > 1100) {
                setNavScrolling(false)
                setNavScrolling2(true)
            } else {
                setNavScrolling(false)
                setNavScrolling2(false)
            }
        })
    }, []);

    const navigateToContactForm = () => {
        window.scrollTo({
            top: 10000,
            behavior: 'smooth'
        })
    }

    const openNav = () => {
        setIsNavOpen(!isNavOpen)
    }


    return (
        <nav className={`${navScrolling ? "nav-container-dark" : navScrolling2 ? "nav-container-dark" : "nav-container"}`} >
            <ul className="nav-link1" >
                {
                    navLinks1.map(({ name, path }, index) => {
                        return (
                            <li key={index} className="nav-text-cont" >
                                <Link to={path} className={`${navScrolling ? "nav-text" : "nav-text2"}`} >{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/" className={`${navScrolling ? "nav-logo2" : "nav-logo"}`}>ARIO</Link>
            <ul className="nav-link2">
                <p onClick={navigateToContactForm} className={`${navScrolling ? "nav-text" : "nav-text2"}`}>Contact</p>
                {
                    navLinks2.map(({ name, path }, index) => {
                        return (
                            <li key={index} className="nav-text-cont" >
                                <Link to={path} className={`${navScrolling ? "nav-text" : "nav-text2"}`} >{name}</Link>
                            </li>
                        )
                    })
                }
                <Link to="/signup" className={`${navScrolling ? "nav-button2" : "nav-button"}`}  >Sign Up</Link>
            </ul>

            {/* Mobile Nav */}
            <Icon onClick={openNav} icon="fluent:navigation-20-regular" className={`${navScrolling ? "nav-icon2" : "nav-icon"}`} />
            {
                isNavOpen && (
                    <div className='nav-overlay'>
                        <div className='nav-overlay-logo-cont'>
                            <Link to="/" className='nav-logo'>ARIO</Link>
                            <Icon icon="proicons:cancel" className='nav-icon' onClick={openNav} />
                        </div>
                        <ul className="nav-overlay-link1">
                            {
                                navLinks1.map(({ name, path }, index) => {
                                    return (
                                        <Link key={index} className="nav-overlay-text" to={path} onClick={openNav} >
                                            {name}
                                        </Link>
                                    )
                                })
                            }
                            {
                                navLinks2.map(({ name, path }, index) => {
                                    return (
                                        <Link key={index} className="nav-overlay-text" to={path} onClick={openNav} >
                                            {name}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                        <Link to="/signup" className="nav-overlay-signup-button" onClick={openNav} >Sign Up</Link>
                    </div>
                )
            }
        </nav>
    )
}

export default NavBar