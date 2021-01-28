import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const IosCheckbox = ({ onChange, isChecked }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="ios8-switch ios8-switch-lg"
        id="checkbox-3"
        onChange={event => onChange(event.target.checked)}
        checked={isChecked}
      />
      <label htmlFor="checkbox-3" />
    </div>
  );
};

IosCheckbox.propTypes = {
  onChange: PropTypes.func,
  isChecked: PropTypes.bool
};

export default IosCheckbox;
