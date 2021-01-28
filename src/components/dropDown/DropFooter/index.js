import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

/**
 *
 * @param title {string} -  Needs for show clear button in footers dropdown.
 * @param onClearClick {function} - Function triggered by pressing a button 'Clear'. Clear filters in dropDown.
 * @param onApplyClick {function} - Function triggered by pressing a button 'Apply'. Confirms filters in dropDown.
 * @returns {*}
 * @constructor
 */
const DropFooter = ({ title, onClearClick, onApplyClick }) => {
  const getIsClear = () => {
    if (title === 'All Services' || title === 'Affordability' || title === 'More filters') {
      return (
        <span
          className="drop__clear"
          onClick={() => onClearClick()}
          onKeyDown={() => onClearClick()}
        >
          Clear
        </span>
      );
    }
    return null;
  };

  return (
    <div className="drop__footer">
      {getIsClear()}

      <button
        type="submit"
        className="drop__apply flex-center"
        onClick={() => onApplyClick()}
        onKeyDown={() => onApplyClick()}
      >
        Apply
      </button>
    </div>
  );
};

DropFooter.propTypes = {
  title: PropTypes.string,
  onClearClick: PropTypes.func,
  onApplyClick: PropTypes.func
};

export default DropFooter;
