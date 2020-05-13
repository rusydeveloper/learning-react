import React, { useState } from "react";

import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import { Mixpanel } from "../components/Mixpanel";
import Timer from "./Timer";

function InvoiceItem(props) {
  const [show, setShow] = useState(false);
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosePaymentConfirmation = () =>
    setShowPaymentConfirmation(false);
  const handleShowPaymentConfirmation = () => setShowPaymentConfirmation(true);

  const invoice_status = (status) => {
    switch (status) {
      case "paid":
        return <span className="badge badge-success">sudah dibayar</span>;
      case "unpaid":
        return <span className="badge badge-danger">menunggu pembayaran</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Card className="invoice-card">
        <Card.Body>
          <Row>
            <Col>
              <Row>
                <Col>
                  <div className="invoice-unique-id">
                    #{props.invoice.unique_id}
                  </div>
                </Col>
                <Col>
                  <div className="invoice-amount">
                    Rp{" "}
                    {props.invoice.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="invoice-status">
                    {invoice_status(props.invoice.status)}
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <div className="invoice-date-create">
                    {props.invoice.created_at}
                  </div>
                </Col>
                <Col>
                  <div className="invoice-booking-id">
                    {props.invoice.booking_id}{" "}
                  </div>
                </Col>
              </Row>
              <small className="invoice-description">
                Jumlah Barang: {props.invoice.quantity}
              </small>
              <div className="campaign-duration">
                {" "}
                Batas bayar
                <table className="timer-table">
                  <Timer deadline={props.invoice.max_payment} />
                </table>
              </div>
              {props.invoice.status === "unpaid" ? (
                <div>
                  <Button
                    type="submit"
                    value="Submit"
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      handleShow();
                      Mixpanel.track("click pay now button");
                    }}
                    block
                  >
                    Bayar Sekarang
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <b>LANGKAH 1</b>
                      <div className="payment-description">
                        Lakukan transfer sebesar{" "}
                        <b>
                          Rp{" "}
                          {props.invoice.amount
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </b>
                        <br />
                        ke Bank tujuan transfer <br />
                        <b>
                          {" "}
                          Bank : CIMB Niaga <br />
                          Nama : PT. Nectico Nusantara Teknologi <br />
                          No. Rek : 800160407700 <br />
                        </b>
                        <br />
                        <p>Butuh bantuan? Hubungi 081-325-368-885 (Whatsapp)</p>
                      </div>
                      <b>LANGKAH 2</b>
                      <div class="payment-description">
                        Lakukan konfirmasi pembayaran
                      </div>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          Mixpanel.track("click payment confirmation button");
                          handleShowPaymentConfirmation();
                          handleClose();
                        }}
                      >
                        Konfirmasi Pembayaran
                      </Button>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleClose}
                      >
                        Tutup
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal
                    show={showPaymentConfirmation}
                    onHide={handleClosePaymentConfirmation}
                  >
                    <Modal.Body>
                      <div class="payment-description">
                        Lakukan konfirmasi pembayaran
                      </div>
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdLTLWyqJqsBSOT0X7FjyPuqDkZfM47CGNoHztsOJj3oWl7Aw/viewform?embedded=true"
                        width="350"
                        height="800"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        title="payment confirmation form"
                      >
                        Harap tunggu
                      </iframe>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleClosePaymentConfirmation}
                      >
                        Tutup
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ) : (
                <div></div>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default InvoiceItem;
