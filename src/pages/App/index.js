import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import vetsSelector from '../../store/modules/vets/selector';
import Filter from './components/Filter';
import { getVets } from '../../store/modules/vets/actions';
import SubHeader from './components/SubHeader';
import VetList from './components/VetList';
import MainLoader from '../../components/loaders/MainLoader';

import './index.scss';

const App = ({ getVets, vets, loading }) => {
  const [currentVets, setCurrentVets] = useState(null);
  useEffect(() => {
    getVets();
  }, []);

  useEffect(() => {
    if (vets) {
      setCurrentVets(vets);
    }
  }, [vets]);

  const getContent = () => {
    if (!currentVets || loading) {
      return <MainLoader />;
    }
    return (
      <>
        <SubHeader count={vets.length} />
        <VetList vets={vets} />
      </>
    );
  };

  return (
    <>
      <Filter  />
      {getContent()}
    </>
  );
};

const mapStateToProps = state => ({
  vets: vetsSelector.getVets(state),
  loading: vetsSelector.getLoading(state)
});

const mapDispatchToProps = {
  getVets
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
