import React from 'react';
import './baseDrop.scss';
import DropFooter from '../DropFooter';

const Index = ({ children, title, onClearClick, onApplyClick }) => {

  return (
    <div className="drop">
      <div className="drop__content">{children}</div>
      <DropFooter title={title} onClearClick={onClearClick} onApplyClick={onApplyClick} />
    </div>
  );
};

export default Index;
