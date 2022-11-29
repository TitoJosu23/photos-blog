import React from "react";
import { Link } from "react-router-dom";
import ModalS from "./ModalS";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileButton } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";

function Navbar() {

  const element = <FontAwesomeIcon icon={faMobileButton} />

  return (
    <>
      <div className="navbar">
        <h4>Elbanice Armas</h4>
        <Link to="/vertical" relative="path">

        <FontAwesomeIcon className="fa-2x" icon={faMobileButton} />

        </Link>
        <ModalS />
      </div>
      <div className="features">
        <p className="gender">Gender: Female</p>
        <p className="age">Age: 23</p>
        <p className="height">Height: 1.60 mts</p>
        <p className="size">Size: S</p>
      </div>
    </>
  );
}
export default Navbar;
