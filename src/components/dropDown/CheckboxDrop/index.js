import React from 'react';
import CustomCheckbox from '../../checkbox/CustomCheckbox';

import './index.scss';

const Index = ({ filters, onSelectedCheckbox, filterWithTitle = false }) => {
  const getFilters = elements => {
    console.log(elements);

    return elements.map(({ title, explanation, isChecked }) => {
      const getExplanation = () => {
        if (explanation) {
          return <div className="filter__element-text">{explanation}</div>;
        }
        return null;
      };

      const selectedCheckBox = value => {
        onSelectedCheckbox(title, value);
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
          <div className="filter__with-title_elements">{getFilters(filterWithTitle.elements)}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {getFiltersWithTitle()}
      {getFilters(filters)}
    </>
  );
};

export default Index;
