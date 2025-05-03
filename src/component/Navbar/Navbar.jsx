import React, { useState } from "react";
import Logo from "../../assets/Logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // State to track submenu open/close

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen); // Toggle submenu
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav_head">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#home">
            <img src={Logo} alt="Logo" className="navbar_logo" />
          </a>

          {/* Desktop menu */}
          <ul className="navbar-nav ms-auto gap-4 d-none d-lg-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            {/* Tour Packages Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#packages"
                id="tourPackagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tour Packages
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="tourPackagesDropdown">
              <li><a className="dropdown-item" href="#domestic">Domestic Tour Package</a></li>
              <li><a className="dropdown-item" href="#international">International Tour Package</a></li>
              <li><a className="dropdown-item" href="#honeymoon">Honeymoon Package</a></li>
              <li><a className="dropdown-item" href="#anniversary">Anniversary Celebration Package</a></li>
              <li><a className="dropdown-item" href="#surprise">Surprise Tour Package</a></li>
              <li><a className="dropdown-item" href="#religious">Religious Tour Package</a></li>
              <li><a className="dropdown-item" href="#trekking">Trekking Tour Package</a></li>
              <li><a className="dropdown-item" href="#adventure">Adventure Tour Package</a></li>
              
              </ul>
            </li>

            {/* Other Nav Items */}
            <li className="nav-item"><a className="nav-link" href="#hotel">Hotel</a></li>
            <li className="nav-item"><a className="nav-link" href="#visa">Visa</a></li>
            <li className="nav-item"><a className="nav-link" href="#flight">Flight</a></li>
            <li className="nav-item"><a className="nav-link" href="#blogs">Blogs</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleDrawer}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeDrawer}>×</button>
        <ul className="drawer-nav">
          <li><a href="#home" onClick={closeDrawer}>Home</a></li>

          {/* Tour Packages with Submenu */}
          <li>
            <span className="drawer-link-with-submenu" onClick={toggleSubmenu}>
              Tour Packages {submenuOpen ? "▲" : "▼"}
            </span>
            {submenuOpen && (
              <ul className="drawer-submenu">
                <li><a href="#domestic" onClick={closeDrawer}>Domestic Tour Package</a></li>
                <li><a href="#international" onClick={closeDrawer}>International Tour Package</a></li>
                <li><a href="#honeymoon" onClick={closeDrawer}>Honeymoon Package</a></li>
                <li><a href="#anniversary" onClick={closeDrawer}>Anniversary Celebration Package</a></li>
                <li><a href="#surprise" onClick={closeDrawer}>Surprise Tour Package</a></li>
                <li><a href="#religious" onClick={closeDrawer}>Religious Tour Package</a></li>
                <li><a href="#trekking" onClick={closeDrawer}>Trekking Tour Package</a></li>
                <li><a href="#adventure" onClick={closeDrawer}>Adventure Tour Package</a></li>
                </ul>
            )}
          </li>

          <li><a href="#hotel" onClick={closeDrawer}>Hotel</a></li>
          <li><a href="#visa" onClick={closeDrawer}>Visa</a></li>
          <li><a href="#flight" onClick={closeDrawer}>Flight</a></li>
          <li><a href="#blogs" onClick={closeDrawer}>Blogs</a></li>
          <li><a href="#about" onClick={closeDrawer}>About</a></li>
          <li><a href="#contact" onClick={closeDrawer}>Contact Us</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
    </>
  );
};

export default Navbar;
