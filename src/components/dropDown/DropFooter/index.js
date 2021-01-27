import React from 'react';

import './index.scss';

const Index = ({ title, onClearClick, onApplyClick }) => {
  const getIsClear = () => {
    if (title === 'All Services' || title === 'Affordability' || title === 'More filters') {
      return (
        <span
          className="drop__clear"
          onClick={() => onClearClick()}
          onKeyDown={() => onClearClick()}
        >
          Clear
        </span>
      );
    }
    return null;
  };

  return (
    <div className="drop__footer">
      {getIsClear()}

      <button
        type="submit"
        className="drop__apply flex-center"
        onClick={() => onApplyClick()}
        onKeyDown={() => onApplyClick()}
      >
        Apply
      </button>
    </div>
  );
};

export default Index;
