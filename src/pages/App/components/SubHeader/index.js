import React from 'react';

const Index = ({ count }) => {
  return (
    <div className="sub-header">
      <span className="sub-header__counts">{count} Vets</span>
      <span className="sub-header__place"> New York, NY, USA</span>
    </div>
  );
};

export default Index;
