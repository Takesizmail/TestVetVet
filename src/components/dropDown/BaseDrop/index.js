import React from 'react';
import PropTypes from 'prop-types';
import DropFooter from '../DropFooter';

import './index.scss';

/**
 *
 * @param children {JSX} - Children JSX
 * @param title {string} - Title of Drop main button. Needs for show clear button in footers dropdown.
 * @param onClearClick {function} - Function triggered by pressing a button 'Clear'. Clear filters in dropDown.
 * @param onApplyClick {function} - Function triggered by pressing a button 'Apply'. Confirms filters in dropDown
 * @returns {*}
 */
const BaseDrop = ({ children, title, onClearClick, onApplyClick }) => {
  return (
    <div className="drop">
      <div className="drop__content">{children}</div>
      <DropFooter title={title} onClearClick={onClearClick} onApplyClick={onApplyClick} />
    </div>
  );
};

BaseDrop.propTypes = {
  title: PropTypes.string,
  onClearClick: PropTypes.func,
  onApplyClick: PropTypes.func
};

export default BaseDrop;
