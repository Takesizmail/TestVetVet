import React, { useState } from 'react';
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import BaseDrop from '../../dropDown/BaseDrop';
import { getFilterCategory } from '../../halpers';

import './filterMainButton.scss';
import CheckboxDrop from '../../dropDown/CheckboxDrop';
import {
  AffordabilityFilter,
  allServicesFilter,
  Languages,
  moreFiltersFilter
} from '../../../pages/App/constants';
import DistanceDrop from '../../dropDown/DistanceDrop';
import AllDayDrop from '../../dropDown/AllDayDrop';

const getSelectFilter = (title, activeFilters) => {
  const choseSelected = filters => {
    return filters.map(element => {
      if (activeFilters?.find(item => item.title === element.title)) {
        return {
          ...element,
          isChecked: true
        };
      }
      return element;
    });
  };

  switch (title) {
    case 'All Services':
      return choseSelected(allServicesFilter);
    case 'Affordability':
      return choseSelected(AffordabilityFilter);
    case 'More filters':
      return choseSelected(moreFiltersFilter);
    default:
      return null;
  }
};

const MainDropDown = ({
  title,
  selectedFilters,
  onApplyClick,
  onClearClick,
  onSelectedCheckbox
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
            filters={moreFiltersFilter}
            onSelectedCheckbox={onSelectedCheckbox}
            filterWithTitle={Languages}
          />
        );
      case 'Distance':
        return <DistanceDrop />;
      case '24 Hour Service':
        return <AllDayDrop />;
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

const Index = ({ title, activeFilters, applySubmit }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(getSelectFilter(title, activeFilters));

  const onApplyClick = () => {
    applySubmit(selectedFilters);
  };

  const onSelectedCheckbox = (key, value) => {
    const newSelectedFilters = selectedFilters.map(element => {
      if (element.title === key) {
        return {
          ...element,
          isChecked: value
        };
      }
      return element;
    });

    setSelectedFilters(newSelectedFilters);
  };

  const onClearClick = () => {
    applySubmit(
      selectedFilters.map(element => {
        return {
          ...element,
          isChecked: false
        };
      })
    );
    setIsActive(false);
  };

  const outsideClick = () => {
    setIsActive(false);
    setSelectedFilters(getSelectFilter(title, activeFilters));
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

export default Index;
