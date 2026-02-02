import React, { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiMail, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  const sidebarMenuItems = [
    { href: '#home', label: 'Home', icon: FiHome },
    { href: '#about', label: 'About us', icon: FiUser },
    { href: '#services', label: 'Services', icon: FiSettings },
    { href: '#contact', label: 'Contact us', icon: FiMail }
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <div className="logo-main">Infiniti</div>
            <div className="logo-sub">Infoways</div>
          </div>

          <nav className="nav-menu">
            <a href="#home" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About us</a>
            <a href="#services" className="nav-item">Services</a>
            <button className="contact-button"><a href="#contact">Contact us</a></button>
          </nav>

          <div className="mobile-menu-toggle" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={handleOverlayClick}>
          <div className="sidebar">
            <div className="sidebar-header">
              <h3 className="sidebar-title">
                <div className="logo">
                  <div className="logo-main">Infiniti</div>
                  <div className="logo-sub">Infoways</div>
                </div>
              </h3>
              <button className="sidebar-close" onClick={closeSidebar}>
                <FiX />
              </button>
            </div>

            <nav className="sidebar-nav">
              {sidebarMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="sidebar-item"
                  onClick={closeSidebar}
                >
                  <item.icon className="sidebar-icon" />
                  <span className="sidebar-label">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;