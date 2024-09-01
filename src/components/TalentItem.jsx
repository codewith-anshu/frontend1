import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function TalentItem({ talent, index, onChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(index, { ...talent, [name]: value });
  };

  return (
    <Row className="mt-3">
      <Col>
        <Form.Control type="text" name="name" placeholder="Talent Name" value={talent.name} onChange={handleInputChange} />
      </Col>
      <Col>
        <Form.Control type="text" name="contractDuration" placeholder="Contract Duration" value={talent.contractDuration} onChange={handleInputChange} />
      </Col>
      <Col>
        <Form.Control type="text" name="billRate" placeholder="Bill Rate" value={talent.billRate} onChange={handleInputChange} />
      </Col>
      <Col>
        <Form.Control as="select" name="currency" value={talent.currency} onChange={handleInputChange}>
          <option value="">Select Currency</option>
          <option value="USD">USD - Dollars ($)</option>
          <option value="EUR">EUR - Euros (€)</option>
          <option value="GBP">GBP - Pounds (£)</option>
          {/* Add more currency options as needed */}
        </Form.Control>
      </Col>
      <Col>
        <Form.Control type="text" name="standardTimeBR" placeholder="Standard Time Bill Rate" value={talent.standardTimeBR} onChange={handleInputChange} />
      </Col>
      <Col>
        <Form.Control type="text" name="overTimeBR" placeholder="Over Time Bill Rate" value={talent.overTimeBR} onChange={handleInputChange} />
      </Col>
    </Row>
  );
}

export default TalentItem;
