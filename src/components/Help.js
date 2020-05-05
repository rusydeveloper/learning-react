import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Help(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const link = "https://wa.me/" + props.wa + "?text=" + props.message;
  return (
    <div>
      <a href={link} target="_blank">
        <div className="help-container">
          <Button
            type="submit"
            value="Submit"
            variant="success"
            size="sm"
            onClick={handleShow}
            block
          >
            <span className="fa fa-question-circle"></span>
          </Button>
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
