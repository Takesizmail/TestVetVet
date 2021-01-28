export const getActiveFilter = (title, activeFilters) => {
  switch (title) {
    case 'All Services':
      return activeFilters.allServices;
    case 'Affordability':
      return activeFilters.affordability;
    case 'More filters':
      return activeFilters.moreFilters;
    case 'Distance':
      return null;
    case '24 Hour Service':
      return activeFilters.allDayService;
    default:
      return null;
  }
};

export const getFilterWithTitle = (title, activeFilters) => {
  switch (title) {
    case 'More filters':
      return activeFilters.language;
    default:
      return null;
  }
};

export const contains = (where, what) => {
  for (let i = 0; i < what.length; i++) {
    if (where.indexOf(what[i]) === -1) return false;
  }
  return true;
};

export const getFilterTags = filters => {
  const allFilters = [
    ...filters.affordability,
    ...filters.allServices,
    ...filters.moreFilters,
    ...filters.language.elements,
    ...filters.allDayService
  ]
    .filter(item => item.isChecked)
    ?.map(element => element.tag);

  return allFilters;
};
