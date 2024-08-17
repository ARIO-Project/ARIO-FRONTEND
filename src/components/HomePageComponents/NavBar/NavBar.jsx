import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks1, navLinks2 } from "../../../data.js";
import './Navbar.css'

const NavBar = () => {
    const [NavScrolling, setNavScrolling] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setNavScrolling(true) : setNavScrolling(false)
      })
    }, [])

    console.log(NavScrolling)
    

  return (
    <nav className={`${NavScrolling? "nav-container-dark" : "nav-container"}`} >
        <ul className="nav-link1" >
            {
                navLinks1.map(({name, path}, index) => {
                    return (
                        <li key={index} className="nav-text-cont" >
                            <Link to={path} className="nav-text" >{name}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <div className="nav-logo">ARIO</div>
        <ul className="nav-link2">
            {
                navLinks2.map(({name, path}, index) => {
                    return (
                        <li key={index} className="nav-text-cont" >
                            <Link to={path} className="nav-text" >{name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default NavBar