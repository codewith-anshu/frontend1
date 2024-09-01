import React from 'react';
import { Form } from 'react-bootstrap';

function ClientDropdown({ value, onChange }) {
  return (
    <Form.Control as="select" name="clientName" value={value} onChange={onChange}>
      <option value="">Select Client</option>
      <option value="Collabera Inc">Collabera - Collabera Inc</option>
      {/* Add more client options as needed */}
    </Form.Control>
  );
}

export default ClientDropdown;
