import React from 'react';
import PropTypes from 'prop-types';
import { sortByFilter } from '../../../pages/App/constants';

import './index.scss';

/**
 *
 * @param onActiveSort {Function} - Sorts active Vets in the Page
 * @returns {*}
 */
const SortByDrop = ({ onActiveSort }) => {
  const clickHandler = element => {
    if (element === 'Alphabetical') {
      onActiveSort();
    }
  };

  return (
    <div className="drop__sort-by_container">
      {sortByFilter.map(element => (
        <div key={element} className="drop__sort-by_element" onClick={() => clickHandler(element)}>
          {element}
        </div>
      ))}
    </div>
  );
};

SortByDrop.propTypes = {
  onActiveSort: PropTypes.func
};

export default SortByDrop;
