import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import PurchaseOrderDetails from './PurchaseOrderDetails';
import TalentDetails from './TalentDetails';

function PurchaseOrderForm() {
  const [formData, setFormData] = useState({
    clientName: '',
    poType: '',
    poNumber: '',
    receivedOn: null,
    receivedFromName: '',
    receivedFromEmail: '',
    poStartDate: null,
    poEndDate: null,
    budget: '',
    currency: '',
    talents: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({ ...formData, [fieldName]: date });
  };

  const handleTalentDetailsChange = (updatedTalents) => {
    setFormData({ ...formData, talents: updatedTalents });
  };

  const validateForm = () => {
    let formErrors = {};
    // Add form validation logic here
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
    }
  };

  const handleReset = () => {
    setFormData({
      clientName: '',
      poType: '',
      poNumber: '',
      receivedOn: null,
      receivedFromName: '',
      receivedFromEmail: '',
      poStartDate: null,
      poEndDate: null,
      budget: '',
      currency: '',
      talents: [],
    });
    setErrors({});
  };

  return (
    <Form onSubmit={handleSubmit} className="purchase-order-form">
      <PurchaseOrderDetails formData={formData} handleInputChange={handleInputChange} handleDateChange={handleDateChange} errors={errors} />
      <TalentDetails talents={formData.talents} onChange={handleTalentDetailsChange} />
      <div className="d-flex justify-content-end mt-4">
        <Button variant="secondary" onClick={handleReset} className="me-3">Reset</Button>
        <Button type="submit" variant="primary">Save</Button>
      </div>
    </Form>
  );
}

export default PurchaseOrderForm;
