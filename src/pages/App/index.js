import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import vetsSelector from '../../store/modules/vets/selector';
import Filter from './components/Filter';
import { getVets } from '../../store/modules/vets/actions';
import SubHeader from './components/SubHeader';
import VetList from './components/VetList';
import MainLoader from '../../components/loaders/MainLoader';
import { allFilters } from './constants';
import { contains, getFilterTags } from './helpers';

import './index.scss';

/**
 * Main Pages. Show vets and allow them to filter
 *
 * @param getVets {Function} - Action. Get list of Vets from API.
 * @param vets {Array} - Redux value. List of Vets.
 * @param loading {boolean} -  Redux value. Show when data loading.
 * @returns {*}
 */
const App = ({ getVets, vets, loading }) => {
  const [currentVets, setCurrentVets] = useState(null);
  const [activeFilters, setActiveFilters] = useState(allFilters);

  useEffect(() => {
    getVets();
  }, [getVets]);

  useEffect(() => {
    if (vets) {
      setCurrentVets(vets);
    }
  }, [vets]);

  // Upgrade vets by filters
  useEffect(() => {
    if (vets) {
      const activeTags = getFilterTags(activeFilters);
      const filterVets = vets.filter(({ tags }) => contains(tags, activeTags));

      setCurrentVets(filterVets);
    }
  }, [activeFilters, vets]);

  // The event is triggered by pressing a button 'Apply' in filters DropDown
  const applySubmit = filters => {
    setActiveFilters(prevState => ({ ...prevState, ...filters }));
  };

  // Sort vets alphabetically
  const onActiveSort = () => {
    const sortVets = [...currentVets].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setCurrentVets(sortVets);
  };

  // Show loader when data is loaded or Content.
  const getContent = () => {
    if (!currentVets || loading) {
      return <MainLoader />;
    }

    return (
      <>
        <SubHeader count={currentVets.length} activeFilters={activeFilters} />
        <VetList vets={currentVets} />
      </>
    );
  };

  return (
    <>
      <Filter activeFilters={activeFilters} applySubmit={applySubmit} onActiveSort={onActiveSort} />
      {getContent()}
    </>
  );
};

App.propTypes = {
  getVets: PropTypes.func.isRequired,
  vets: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  vets: vetsSelector.getVets(state),
  loading: vetsSelector.getLoading(state)
});

const mapDispatchToProps = {
  getVets
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
