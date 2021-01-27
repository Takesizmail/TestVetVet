import React from 'react';
import VetElement from '../VetElement';

const Index = ({ vets }) => {
  const getList = () => {
    return vets.map(({ name, id, tags, address, images }) => {
      return <VetElement key={id} tags={tags} name={name} address={address} images={images} />;
    });
  };

  return <div className="vet__list">{getList()}</div>;
};

export default Index;
