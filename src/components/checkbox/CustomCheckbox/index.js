import React from 'react';

const Index = ({ onChange, isChecked }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={event => onChange(event.target.checked)}
        checked={isChecked}
      />
    </div>
  );
};

export default Index;
