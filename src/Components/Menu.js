import React from "react";

import "./Menu.css";

function Menu() {
  return (
    <nav id="menu">
      <ul className="links">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="landing.html">Landing</a>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
      <ul className="actions stacked"></ul>
    </nav>
  );
}

export default Menu;
