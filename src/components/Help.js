import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Help() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <a
        href="https://wa.me/628112222778?text=Saya%20mau%20bertanya%20tentang%20belanja%20bareng"
        target="_blank"
      >
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
