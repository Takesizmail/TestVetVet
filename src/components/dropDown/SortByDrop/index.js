import React from 'react';
import { sortByFilter } from '../../../pages/App/constants';

import './index.scss';

const Index = () => {
  return (
    <div className="drop__sort-by_container">
      {sortByFilter.map(element => (
        <div key={element} className="drop__sort-by_element" onClick={() => console.log('element')}>
          {element}
        </div>
      ))}
    </div>
  );
};

export default Index;
