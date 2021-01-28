import React from 'react';
import PropTypes from 'prop-types';
import { getFilterTags } from '../../helpers';

/**
 *  SubHeader section. Show count of vets and active filters.
 *
 * @param count {number} - Count of Active Vets in Page.
 * @param activeFilters {Object} - Object with all Filters need for show which filters are active
 * @returns {*}
 */
const SubHeader = ({ count, activeFilters }) => {
  const activeTags = getFilterTags(activeFilters);

  return (
    <div className="sub-header">
      <span className="sub-header__counts">{count} Vets</span>
      <span className="sub-header__place"> New York, NY, USA</span>
      <span className="sub-header__tag"> Active tags :{JSON.stringify(activeTags)}</span>
    </div>
  );
};

SubHeader.propTypes = {
  count: PropTypes.number,
  activeFilters: PropTypes.objectOf(PropTypes.any)
};

export default SubHeader;
