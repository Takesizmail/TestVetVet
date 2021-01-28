import React from 'react';
import PropTypes from 'prop-types';
import IosCheckbox from '../../checkbox/IosCheckbox';

import './index.scss';

/**
 *
 * @param filters {Array} - Filter for 24 Hours Services
 * @param onSelectedCheckbox {function} - Selected checkbox
 * @returns {*}
 */
const AllDayDrop = ({ filters, onSelectedCheckbox }) => {
  return (
    <div className="filter__all-day_container">
      <div className="filter__all-day_text">
        Show only practices that are open for 24 hour service.
      </div>
      <IosCheckbox
        isChecked={filters[0].isChecked}
        onChange={value => onSelectedCheckbox(filters[0].title, value)}
      />
    </div>
  );
};

AllDayDrop.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.any),
  onSelectedCheckbox: PropTypes.func
};

export default AllDayDrop;
