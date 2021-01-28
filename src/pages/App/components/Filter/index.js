import React from 'react';
import PropTypes from 'prop-types';
import { filtersTitle } from '../../constants';
import FilterMainButton from '../../../../components/buttons/FilterMainButton';
import SortByButton from '../SortByButton';
import { getActiveFilter, getFilterWithTitle } from '../../helpers';

/**
 *  Filter Section. Filter list with dropdowns for vets
 *
 * @param activeFilters {Object} - Object with all Filters. Show which filters is checked.
 * @param applySubmit {function} - Function triggered by pressing a button 'Apply' in filters DropDown.
 * @param onActiveSort {function} - Function triggered by pressing a element from SortBy dropdown. Sort vets
 * @returns {*}
 */
const Filter = ({ activeFilters, applySubmit, onActiveSort }) => {
  const getFilters = () => {
    return filtersTitle.map(({ title, tag, tagTitle = '' }) => {
      return (
        <FilterMainButton
          title={title}
          key={title}
          tag={tag}
          tagTitle={tagTitle}
          activeFilters={getActiveFilter(title, activeFilters)}
          filterWithTitle={getFilterWithTitle(title, activeFilters)}
          applySubmit={applySubmit}
        />
      );
    });
  };

  return (
    <div className="filter">
      {getFilters()}

      <SortByButton onActiveSort={onActiveSort} />
    </div>
  );
};

Filter.propTypes = {
  activeFilters: PropTypes.objectOf(PropTypes.any),
  applySubmit: PropTypes.func,
  onActiveSort: PropTypes.func
};

export default Filter;
