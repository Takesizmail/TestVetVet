import React from 'react';
import CheckboxDrop from './dropDown/CheckboxDrop';
import DistanceDrop from './dropDown/DistanceDrop';
import AllDayDrop from './dropDown/AllDayDrop';
import {
  allServicesFilter,
  AffordabilityFilter,
  moreFiltersFilter,
  Languages
} from '../pages/App/constants';
// import CustomCheckbox from './checkbox/CustomCheckbox';

export const getFilterCategory = (title, onSelectedCheckbox) => {
  switch (title) {
    case 'All Services':
      return <CheckboxDrop filters={allServicesFilter} onSelectedCheckbox={onSelectedCheckbox} />;
    case 'Affordability':
      return <CheckboxDrop filters={AffordabilityFilter} onSelectedCheckbox={onSelectedCheckbox} />;
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
