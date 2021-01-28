import React from 'react';
import PropTypes from 'prop-types';

const CustomCheckbox = ({ onChange, isChecked }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={event => onChange(event.target.checked)}
        checked={isChecked}
      />
    </div>
  );
};

CustomCheckbox.propTypes = {
  onChange: PropTypes.func,
  isChecked: PropTypes.bool
};

export default CustomCheckbox;
