import React from 'react';
import PropTypes from 'prop-types';
import VetElement from '../VetElement';

/**
 *  Created List of Vets.
 *
 * @param vets - List of Vets.
 * @returns {*}

 */
const VetList = ({ vets }) => {
  const getList = () => {
    return vets.map(({ name, id, tags, address, images }) => {
      return <VetElement key={id} tags={tags} name={name} address={address} images={images} />;
    });
  };

  return <div className="vet__list">{getList()}</div>;
};

VetList.propTypes = {
  vets: PropTypes.arrayOf(PropTypes.object)
};

export default VetList;
