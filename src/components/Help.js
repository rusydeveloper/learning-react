import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Mixpanel } from "../components/Mixpanel";

function Help(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const link = "https://wa.me/" + props.wa + "?text=" + props.message;
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="help-container"
          onClick={() => {
            handleShow();
            Mixpanel.track("click help button");
          }}
        >
          <span className="help-icon">
            <span className="fab fa-whatsapp"></span>
          </span>
          <br />
          <span className="help-text">bantuan?</span>
        </div>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="payment-description">
            Hubungi Whatsapp {props.phone} untuk bantuan
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Help;
