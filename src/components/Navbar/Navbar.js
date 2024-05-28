import "./Navbar.css";
import logo from "./logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import SideNav from "./SideNav";

function Navbar() {
  const [bugga, setBugga] = useState(false);
  const BuggaChange = () => {
    setBugga(!bugga);
  };
  return (
    <>
      <div className="navbar_hold">
        <img src={logo} alt="logo" className="logo" />
        <div className="navigator">
          <ul className="horizontal">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Gallery</li>
            <li>Services</li>
            <li>
              <button>Request a call</button>
            </li>
          </ul>
        </div>
        <div className="buggaMenuhold">
          {bugga ? (
            <ImCancelCircle onClick={BuggaChange} />
          ) : (
            <CiMenuBurger onClick={BuggaChange} />
          )}
        </div>
      </div>
      {bugga ? <SideNav /> : null}
    </>
  );
}

export default Navbar;
