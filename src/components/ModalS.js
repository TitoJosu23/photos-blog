import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ModalS.css";

function ModalS() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const element = <FontAwesomeIcon icon={faBars} />;

  return (
    <>
      <Button className="button" onClick={handleShow}>
        <div className="bars">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <h2 className="text-center">Social Media</h2>
        <div className="separate">
        <Modal.Body className="sc">
          <div>
            <a href="https://www.instagram.com/elbadearmas/">
              <h4 className="text-dark">Instagram |</h4>
            </a>
            <a href="https://www.instagram.com/vivasportswear.ea/">
              <h4 className="text-dark">Instagram |</h4>
            </a>
            <a href="https://www.tiktok.com/@elbadearmass">
              <h4 className="text-dark">Tiktok </h4>
            </a>
          </div>
        </Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalS;
