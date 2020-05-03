import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Help() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="help-container">
        <Button
          type="submit"
          value="Submit"
          variant="danger"
          size="sm"
          onClick={handleShow}
          block
        >
          <span className="fa fa-question-circle"></span>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="payment-description">
            Hubungi Whatsapp 081555555555 untuk bantuan
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
