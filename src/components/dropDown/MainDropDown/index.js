import React from 'react';
import PropTypes from 'prop-types';
import CheckboxDrop from '../CheckboxDrop';
import DistanceDrop from '../DistanceDrop';
import AllDayDrop from '../AllDayDrop';
import BaseDrop from '../BaseDrop';

/**
 *
 * @param title {string} - Text in Filter button. Needed to choose the right dropdown
 * @param selectedFilters {Object} - Object with filters for this dropDown.
 * @param onApplyClick {Function} - Function triggered by pressing a button 'Apply'. Confirms filters in dropDown
 * @param onClearClick {Function} - Function triggered by pressing a button 'Clear'. Clear filters in dropDown.
 * @param onSelectedCheckbox {Function} - Function triggered by pressing in checkbox.Change value isChecked in filter.
 * @param selectedWithTitle {Object} - Filters with title in dropDown.
 * @returns {*}
 */
const MainDropDown = ({
  title,
  selectedFilters,
  onApplyClick,
  onClearClick,
  onSelectedCheckbox,
  selectedWithTitle
}) => {
  const getFilterCategory = (title, onSelectedCheckbox) => {
    switch (title) {
      case 'All Services':
        return <CheckboxDrop filters={selectedFilters} onSelectedCheckbox={onSelectedCheckbox} />;
      case 'Affordability':
        return <CheckboxDrop filters={selectedFilters} onSelectedCheckbox={onSelectedCheckbox} />;
      case 'More filters':
        return (
          <CheckboxDrop
            filters={selectedFilters}
            onSelectedCheckbox={onSelectedCheckbox}
            filterWithTitle={selectedWithTitle}
          />
        );
      case 'Distance':
        return <DistanceDrop />;
      case '24 Hour Service':
        return <AllDayDrop filters={selectedFilters} onSelectedCheckbox={onSelectedCheckbox} />;
      default:
        return null;
    }
  };

  return (
    <BaseDrop title={title} onApplyClick={onApplyClick} onClearClick={onClearClick}>
      {getFilterCategory(title, onSelectedCheckbox)}
    </BaseDrop>
  );
};

MainDropDown.propTypes = {
  title: PropTypes.string,
  selectedFilters: PropTypes.arrayOf(PropTypes.object),
  onApplyClick: PropTypes.func,
  onClearClick: PropTypes.func,
  onSelectedCheckbox: PropTypes.func,
  selectedWithTitle: PropTypes.objectOf(PropTypes.object)
};

export default MainDropDown;
