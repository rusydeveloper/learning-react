import React, { useState } from "react";

import { Card, Row, Col, Button, Modal } from "react-bootstrap";

function InvoiceItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const invoice_status = (status) => {
    switch (status) {
      case "paid":
        return <span class="badge badge-success">sudah dibayar</span>;
      case "unpaid":
        return <span class="badge badge-danger">menunggu pembayaran</span>;
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
                  <div class="invoice-unique-id">
                    #{props.invoice.unique_id}
                  </div>
                </Col>
                <Col>
                  <div class="invoice-amount">
                    Rp{" "}
                    {props.invoice.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div class="invoice-status">
                    {invoice_status(props.invoice.status)}
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <div class="invoice-date-create">
                    {props.invoice.created_at}
                  </div>
                </Col>
                <Col>
                  <div class="invoice-booking-id">
                    {props.invoice.booking_id}{" "}
                  </div>
                </Col>
              </Row>
              <small class="invoice-description">
                Jumlah Barang: {props.invoice.quantity}
              </small>
              {props.invoice.status == "unpaid" ? (
                <div>
                  <Button
                    type="submit"
                    value="Submit"
                    variant="danger"
                    size="sm"
                    onClick={handleShow}
                    block
                  >
                    Bayar Sekarang
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <div class="payment-description">
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
                        <p>Butuh bantuan? Hubungi 08112222778</p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <a
                        href="https://forms.gle/rUSsmCqKDtAboU4HA"
                        target="_blank"
                      >
                        <Button size="sm" variant="danger">
                          Konfirmasi Pembayaran
                        </Button>
                      </a>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleClose}
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
