import React from "react";



function Navbar() {
  return (
    <>
      <nav className="navbar container">
        <div>
          <img
            id="logo"
            src="https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zu-jJrh4ERKxVLNoGbmEPdtNV74-GukTXAKzlHgE7-TR8YTWAouW0kpWbyyfNQvAoervKmOUBIKt~3xrPJB4XJsl5U0gckXCJOjg8YBZedtdgphV01HGObQUwVqfkcDSA6O7TGKr4v8d0rbl8f-m~~QTy73cK-LFMlC0VZDEHBv5CssE9H~FM45Xs~yJbFOmHUOlvPqBtGUrZmgHGrxqK3p6glp1yECnM2Zu0ifTptD2QeEkyalDJkRIOgToW~mMw1MCLrnH~4d1zmorEYYtMbrpfZcv30UhzjqO5NqehsOGi21CXVKLAeJRIh5IZAs4FMLDztovsKM0UHz9vKZeEQ__"
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
