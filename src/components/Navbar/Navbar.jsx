import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
export default function Navbar() {
    const [menuopen, setMenuopen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/Portfolio">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuopen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt='menu btn' onClick={() => setMenuopen(!menuopen)}></img>
                <ul className={`${styles.menuItems} ${menuopen && styles.menuOpen}`} onClick={() => setMenuopen(false)}>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            style={{cursor:"pointer"}}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                    <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            style={{cursor:"pointer"}}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                    <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            style={{cursor:"pointer"}}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                    <Link
                            activeClass="active"
                            to="technicalskills"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            style={{cursor:"pointer"}}
                        >
                            Technical Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
