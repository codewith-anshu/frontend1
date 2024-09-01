import React from 'react';
import { Button } from 'react-bootstrap';
import TalentItem from './TalentItem';

function TalentDetails({ talents, onChange }) {
  const handleTalentChange = (index, updatedTalent) => {
    const updatedTalents = [...talents];
    updatedTalents[index] = updatedTalent;
    onChange(updatedTalents);
  };

  const addTalent = () => {
    onChange([
      ...talents,
      {
        name: '',
        contractDuration: '',
        billRate: '',
        currency: '',
        standardTimeBR: '',
        overTimeBR: '',
      },
    ]);
  };

  return (
    <div className="talent-details mt-4">
      <h4>Talent Details</h4>
      {talents.map((talent, index) => (
        <TalentItem key={index} talent={talent} index={index} onChange={handleTalentChange} />
      ))}
      <Button variant="secondary" onClick={addTalent} className="mt-3">
        + Add Another Talent
      </Button>
    </div>
  );
}

export default TalentDetails;
