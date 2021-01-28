import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import MainDropDown from '../../dropDown/MainDropDown';

import './filterMainButton.scss';

/**
 *  Filter Button in SubHeader. Has the logic of unconfirmed checkboxes.
 *
 * @param title {string} - Text in Filter button.
 * @param activeFilters {Array} - Object with filters for this dropDown. Needs for checked confirmed checkbox
 * @param applySubmit {function} - Function triggered by pressing a button 'Apply' in filters DropDown.
 * @param tag {string} - Tag of filter in ActiveFilter. Needed for correct construction logic of Filters.
 * @param tagTitle {string} - Tag of filter in ActiveFilter in filters dropDown with Title. Needed for correct construction logic of Filters.
 * @param filterWithTitle {Object} - Object with title of section and checkbox elements.
 * @returns {*}
 */
const FilterMainButton = ({
  title,
  activeFilters,
  applySubmit,
  tag,
  tagTitle,
  filterWithTitle = null
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(activeFilters);
  const [selectedWithTitle, setSelectedWithTitle] = useState(filterWithTitle);

  const onApplyClick = () => {
    setIsActive(false);

    if (setSelectedFilters) {
      applySubmit({
        [`${tag}`]: selectedFilters,
        [`${tagTitle}`]: selectedWithTitle
      });
    } else {
      applySubmit({
        [`${tag}`]: selectedFilters
      });
    }
  };

  const onSelectedCheckbox = (key, value, withTitle = false) => {
    const selectedFilter = element => {
      if (element.title === key) {
        return {
          ...element,
          isChecked: value
        };
      }
      return element;
    };

    if (withTitle) {
      const newFiltersWithTitle = {
        ...selectedWithTitle,
        elements: selectedWithTitle.elements.map(element => selectedFilter(element))
      };

      setSelectedWithTitle(newFiltersWithTitle);
    } else {
      const newSelectedFilters = selectedFilters.map(element => selectedFilter(element));

      setSelectedFilters(newSelectedFilters);
    }
  };

  // Makes checkboxes not checked in section.
  const onClearClick = () => {
    applySubmit({
      [`${tag}`]: selectedFilters.map(element => {
        return {
          ...element,
          isChecked: false
        };
      })
    });
    setIsActive(false);
  };

  const outsideClick = () => {
    setIsActive(false);
    setSelectedFilters(activeFilters);

    if (selectedWithTitle) {
      setSelectedWithTitle(filterWithTitle);
    }
  };

  const getDropDown = () => {
    if (isActive) {
      return (
        <MainDropDown
          title={title}
          onApplyClick={onApplyClick}
          selectedFilters={selectedFilters}
          onSelectedCheckbox={onSelectedCheckbox}
          onClearClick={onClearClick}
          selectedWithTitle={selectedWithTitle}
        />
      );
    }
    return null;
  };

  return (
    <OutsideClickHandler onOutsideClick={outsideClick}>
      <div className="filter__button-container">
        <div
          className={cn('filter__button-element flex-center', {
            active: isActive
          })}
          onClick={() => setIsActive(true)}
          onKeyDown={() => setIsActive(true)}
        >
          {title}
        </div>
        {getDropDown()}
      </div>
    </OutsideClickHandler>
  );
};

FilterMainButton.propTypes = {
  title: PropTypes.string,
  activeFilters: PropTypes.arrayOf(PropTypes.any),
  applySubmit: PropTypes.func,
  tag: PropTypes.string,
  tagTitle: PropTypes.string,
  filterWithTitle: PropTypes.objectOf(PropTypes.any)
};

export default FilterMainButton;
