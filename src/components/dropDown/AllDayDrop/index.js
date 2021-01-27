import React from 'react';

import './index.scss';
import IosCheckbox from '../../checkbox/IosCheckbox';

const Index = () => {
  return (
    <div className="filter__all-day_container">
      <div className="filter__all-day_text">
        Show only practices that are open for 24 hour service.
      </div>
      <IosCheckbox />
    </div>
  );
};

export default Index;
