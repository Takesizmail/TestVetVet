import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ReactComponent as SortByIcon } from '../../../../assets/icons/sort_by.svg';
import SortByDrop from '../../../../components/dropDown/SortByDrop';

const SortByButton = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);

  const getDropNav = () => {
    if (isDropOpen) {
      return <SortByDrop />;
    }
    return null;
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsDropOpen(false)}>
      <div className="filter__sort-by">
        <div className="filter__sort-by_wrapper " onClick={() => setIsDropOpen(true)}>
          <SortByIcon className="filter__sort-by_icon" />
          <span>Sort by</span>
        </div>
        {getDropNav()}
      </div>
    </OutsideClickHandler>
  );
};

export default SortByButton;
