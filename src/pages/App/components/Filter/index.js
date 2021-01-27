import React, { useState } from 'react';
import { filtersTitle } from '../../constants';
import FilterMainButton from '../../../../components/buttons/FilterMainButton';
import SortByButton from '../SortByButton';

const Filter = () => {
  const [activeFilters, setActiveFilters] = useState(allFilters);

  console.log(activeFilters, 'activeFilters');

  const applySubmit = filters => {
    const newFilters = [];
    if (!activeFilters) {
      filters.map(elements => {
        if (elements.isChecked) {
          newFilters.push(elements);
        }
      });
      setActiveFilters(newFilters);
    } else {
      activeFilters.map(element => {
        if (filters.find(item => item.title === element.title)) {
          filters.map(item => {
            if (item.isChecked) {
              newFilters.push(item);
            }
          });
        } else {
          newFilters.push(element);
        }
      });
      setActiveFilters(newFilters);
    }
  };

  const getFilters = () => {
    return filtersTitle.map(title => {
      return (
        <FilterMainButton
          title={title}
          key={title}
          activeFilters={activeFilters}
          applySubmit={applySubmit}
        />
      );
    });
  };

  return (
    <div className="filter">
      {getFilters()}

      <SortByButton />
    </div>
  );
};

export default Filter;
