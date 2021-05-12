import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <header>
                <div className="navbar sticky-top navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <Link to="/" className="navbar-brand d-flex align-items-center">
                            <strong>H</strong>acker<strong>A</strong>rena
                        </Link>
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <Link to="#" className="navbar-brand text-center">
                        <strong>H</strong>acker<strong>A</strong>rena
                    </Link>
                    <button type="button " className="btn-close btn-denger text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="menu text-center">
                    <ul className="menu-m">
                        <li className="menu-item">
                            <Link className="menu-link" to="/"><strong>H</strong>ome</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/certificate"><strong>C</strong>ertificate</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/skills"><strong>S</strong>kills</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/projects"><strong>P</strong>rojects&nbsp;&nbsp;<span className="badge bg-success">New</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/services"><strong>S</strong>ervices</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/contact"><strong>C</strong>ontact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
