import React from 'react';
import PropsTypes from 'prop-types';
import CustomCheckbox from '../../checkbox/CustomCheckbox';

import './index.scss';

/**
 *
 * @param filters {Object} - Object with filters for this dropDown.
 * @param onSelectedCheckbox {Function} - Function triggered by pressing in checkbox.Change value isChecked in filter.
 * @param filterWithTitle {Object} - Filters with title in dropDown.
 * @returns {*}
 */
const CheckboxDrop = ({ filters, onSelectedCheckbox, filterWithTitle = false }) => {
  const getFilters = (elements, withTitle) => {
    return elements.map(({ title, explanation, isChecked }) => {
      const getExplanation = () => {
        if (explanation) {
          return <div className="filter__element-text">{explanation}</div>;
        }
        return null;
      };

      const selectedCheckBox = value => {
        onSelectedCheckbox(title, value, withTitle);
      };

      return (
        <div className="filter__element-container" key={title}>
          <div className="filter__element-checkbox">
            <CustomCheckbox isChecked={isChecked} onChange={selectedCheckBox} title={title} />
          </div>
          <div className="filter__element-explanation">
            <div className="filter__element-title">{title}</div>
            {getExplanation()}
          </div>
        </div>
      );
    });
  };

  const getFiltersWithTitle = () => {
    if (filterWithTitle) {
      return (
        <div className="filter__with-title_container">
          <h4>{filterWithTitle.title}</h4>
          <div className="filter__with-title_elements">
            {getFilters(filterWithTitle.elements, true)}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {getFiltersWithTitle()}
      {getFilters(filters, false)}
    </>
  );
};

CheckboxDrop.propTypes = {
  filters: PropsTypes.arrayOf(PropsTypes.any),
  onSelectedCheckbox: PropsTypes.func,
  filterWithTitle: PropsTypes.objectOf(PropsTypes.any)
};

export default CheckboxDrop;
