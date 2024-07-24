import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { navItems, SolutionsDropdown } from "./NavItems";
import Dropdown from "./Dropdown";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const navRef = useRef();

  const handleClick = () => {
    setClick(!click);
    setActiveMenu("");
  };

  const closeMobileMenu = () => {
    setClick(false);
    setActiveMenu("");
  };

  const handleDropdownClick = (menuName) => {
    if (isMobile) {
      setActiveMenu((prevMenu) => (prevMenu === menuName ? "" : menuName));
    } else {
      setActiveMenu(menuName);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDropdownItems = (title) => {
    switch (title) {
      case "Solutions":
        return SolutionsDropdown;
      default:
        return [];
    }
  };

  return (
    <nav className="navbar" ref={navRef}>
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <h1>Fladdra</h1>
        <img
          src={logo}
          alt="Fladdra Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <Icons.FaTimes /> : <Icons.FaBars />}
      </div>
      <ul className={click ? "nav-items active" : "nav-items"}>
        {navItems.map((item) => {
          const dropdownItems = getDropdownItems(item.title);
          return (
            <li
              key={item.id}
              className={item.cName}
              onClick={() => handleDropdownClick(item.title)}
            >
              <Link
                to={item.path}
                className={activeMenu === item.title ? "activ" : ""}
                id="link"
                style={{textDecoration:'none'}}
              >
                <p onClick={closeMobileMenu}>{item.title}</p>
                {dropdownItems.length > 0 && <IoIosArrowDown />}
              </Link>
              {dropdownItems.length > 0 && (
                <Dropdown
                  onClick={closeMobileMenu}
                  dropdown={activeMenu === item.title}
                  items={dropdownItems}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
