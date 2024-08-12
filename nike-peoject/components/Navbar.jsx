import React from "react";



function Navbar() {
  return (
    <>
      <nav className="navbar container">
        <div>
          <img
            id="logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/010/994/412/small/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
            alt=""
          />
        </div>

        <ul className="nav">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <button className="btn"> Login </button>
      </nav>
    </>
  );
}

export default Navbar;
