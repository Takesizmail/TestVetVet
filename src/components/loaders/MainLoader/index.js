import React from 'react';
import { ReactComponent as Loader } from '../../../assets/loaders/Double Ring-1.3s-267px.svg';

import './index.scss';

const MainLoader = () => {
  return (
    <div className="loader">
      <Loader />
    </div>
  );
};

export default MainLoader;
