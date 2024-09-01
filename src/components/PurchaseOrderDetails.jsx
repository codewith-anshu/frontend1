import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PurchaseOrderDetails({ formData, handleInputChange, handleDateChange, errors }) {
  return (
    <div className="purchase-order-details">
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="clientName">
            <Form.Label>Client Name</Form.Label>
            <Form.Control as="select" name="clientName" value={formData.clientName} onChange={handleInputChange}>
              <option value="">Select Client</option>
              {/* Add client options here */}
            </Form.Control>
            {errors.clientName && <div className="text-danger">{errors.clientName}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="poType">
            <Form.Label>Purchase Order Type</Form.Label>
            <Form.Control as="select" name="poType" value={formData.poType} onChange={handleInputChange}>
              <option value="">Select PO Type</option>
              <option value="Group PO">Group PO</option>
              <option value="Individual PO">Individual PO</option>
            </Form.Control>
            {errors.poType && <div className="text-danger">{errors.poType}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="poNumber">
            <Form.Label>Purchase Order No.</Form.Label>
            <Form.Control type="text" name="poNumber" value={formData.poNumber} onChange={handleInputChange} />
            {errors.poNumber && <div className="text-danger">{errors.poNumber}</div>}
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="receivedOn">
            <Form.Label>Received On</Form.Label>
            <DatePicker selected={formData.receivedOn} onChange={(date) => handleDateChange(date, 'receivedOn')} className="form-control" />
            {errors.receivedOn && <div className="text-danger">{errors.receivedOn}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="receivedFromName">
            <Form.Label>Received From - Name</Form.Label>
            <Form.Control type="text" name="receivedFromName" value={formData.receivedFromName} onChange={handleInputChange} />
            {errors.receivedFromName && <div className="text-danger">{errors.receivedFromName}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="receivedFromEmail">
            <Form.Label>Received From - Email ID</Form.Label>
            <Form.Control type="email" name="receivedFromEmail" value={formData.receivedFromEmail} onChange={handleInputChange} />
            {errors.receivedFromEmail && <div className="text-danger">{errors.receivedFromEmail}</div>}
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="poStartDate">
            <Form.Label>PO Start Date</Form.Label>
            <DatePicker selected={formData.poStartDate} onChange={(date) => handleDateChange(date, 'poStartDate')} className="form-control" />
            {errors.poStartDate && <div className="text-danger">{errors.poStartDate}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="poEndDate">
            <Form.Label>PO End Date</Form.Label>
            <DatePicker selected={formData.poEndDate} onChange={(date) => handleDateChange(date, 'poEndDate')} className="form-control" minDate={formData.poStartDate} />
            {errors.poEndDate && <div className="text-danger">{errors.poEndDate}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="budget">
            <Form.Label>Budget</Form.Label>
            <Form.Control type="number" name="budget" value={formData.budget} onChange={handleInputChange} max="99999" />
            {errors.budget && <div className="text-danger">{errors.budget}</div>}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="currency">
            <Form.Label>Currency</Form.Label>
            <Form.Control as="select" name="currency" value={formData.currency} onChange={handleInputChange}>
              <option value="">Select Currency</option>
              <option value="USD">USD - Dollars ($)</option>
              {/* Add more currency options as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}

export default PurchaseOrderDetails;
