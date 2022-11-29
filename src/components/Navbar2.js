import React from "react";
import { Link } from "react-router-dom";
import ModalS from "./ModalS";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileButton } from "@fortawesome/free-solid-svg-icons";

function Navbar2() {
  const element = <FontAwesomeIcon icon={faMobileButton} />;

  return (
    <>
      <div className="navbar nx">
        <h4>Elbanice Armas</h4>
        <Link to="/" relative="path">

            <FontAwesomeIcon className="phone-icon fa-2x" icon={faMobileButton} />


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
export default Navbar2;
