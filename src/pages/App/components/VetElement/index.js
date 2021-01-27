import React from 'react';
import { ReactComponent as DetailsImage } from '../../../../assets/icons/details.svg';

const Index = ({ tags, name, address, images }) => {
  const getTags = () => {
    return tags.join(' | ');
  };

  return (
    <div className="vet__container">
      <div className="vet__image flex-center">
        <img src={images[0] || null} alt="place" />
      </div>
      <div className="vet__info">
        <div className="vet__info-container">
          <div className="vet__info-title">{name}</div>
          <div className="vet__info-name">Dr. Name</div>
          <div className="vet__info-address">{address}</div>
          <div className="vet__info-tags">{getTags()}</div>
        </div>
        <div className="vet__info-details">
          <DetailsImage />
          <span>See Details</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
