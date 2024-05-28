import { useEffect } from "react";
import "./Navbar.css";
import logo from "./sidenavlogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function SideNav() {
  useEffect(() => {
    AOS.init([1000]);
    AOS.refresh();
  }, []);
  return (
    <div className="sidenav">
      <img className="sidenavlogo" src={logo} alt="logo" />
      <ul>
        <li>HOME</li>
        <hr />
        <li>SERVICE</li>
        <hr />
        <li>PROJECT</li>
        <hr />
        <li>PRODUCT</li>
        <hr />
        <li>CONTACT</li>
        <hr />
        <li>ABOUT</li>
        <hr />
        {/* <li style={{ display: "flex", alignItems: "center" }}> <FaRegClock style={{marginRight: "10px"}}></FaRegClock> </li> */}
      </ul>
    </div>
  );
}

export default SideNav;
