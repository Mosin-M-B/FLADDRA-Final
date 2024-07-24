/* eslint-disable react/prop-types */
import React from "react";

import { Link } from 'react-router-dom';
import './Dropdown.css';

export const Dropdown = ({ dropdown, items ,onClick }) => {
  return (
    <ul className={dropdown ? "services-submenu show" : "services-submenu"}>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className="submenu-item" onClick={onClick}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
