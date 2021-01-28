export const filtersTitle = [
  { title: 'All Services', tag: 'allServices' },
  { title: 'Distance', tag: 'distance' },
  {
    title: '24 Hour Service',
    tag: 'allDayService'
  },
  {
    title: 'Affordability',
    tag: 'affordability'
  },
  {
    title: 'More filters',
    tag: 'moreFilters',
    tagTitle: 'language'
  }
];

export const allServicesFilter = [
  {
    title: 'Fear Free Certified',
    explanation:
      'Recommended for recently adopted pets. Fear Free Certified Vets create the ideal environment for a fearful, anxious, or stressed-out pet.',
    isChecked: false,
    tag: 'fear free certified'
  },
  {
    title: 'Travel Paperwork',
    explanation: '',
    isChecked: false,
    tag: 'pet travel certificates'
  },
  {
    title: 'Exotic Animals',
    explanation: '',
    isChecked: false,
    tag: 'exotic Animals'
  },
  {
    title: 'Urgent Care',
    explanation: '',
    isChecked: false,
    tag: 'emergency visits offered'
  },
  {
    title: 'Dental Cleanings',
    explanation: '',
    isChecked: false,
    tag: 'dental Cleanings'
  },
  {
    title: 'On-site Pharmacy',
    explanation: '',
    isChecked: false,
    tag: 'on-site pharmacy'
  }
];

export const affordabilityFilter = [
  {
    title: 'Low cost practitioners',
    explanation: '',
    isChecked: false,
    tag: 'low cost'
  },
  {
    title: 'Payment plans options',
    explanation: '',
    isChecked: false,
    tag: 'payment plan option'
  },
  {
    title: 'New patient vouchers',
    explanation: '',
    isChecked: false,
    tag: 'discounts or vouchers offered'
  },
  {
    title: 'Cost estimates up-front',
    explanation: '',
    isChecked: false,
    tag: 'cost estimates up-front'
  }
];

export const allDayService = [
  {
    title: '24hours',
    explanation: '',
    isChecked: false,
    tag: '24 hours'
  }
];

export const moreFiltersFilter = [
  {
    title: 'Referral not required',
    explanation: '',
    isChecked: false,
    tag: 'Referral not required'
  },
  {
    title: 'At home visit',
    explanation: '',
    isChecked: false,
    tag: 'mobile clinic'
  }
];
export const languages = {
  title: 'Languages',
  elements: [
    {
      title: 'English',
      explanation: '',
      isChecked: false,
      tag: 'english'
    },
    {
      title: 'Spanish',
      explanation: '',
      isChecked: false,
      tag: 'spanish'
    },
    {
      title: 'Language 3',
      explanation: '',
      isChecked: false,
      tag: 'language 3'
    },
    {
      title: 'Language 4',
      explanation: '',
      isChecked: false,
      tag: 'language 4'
    }
  ]
};

export const allFilters = {
  allServices: allServicesFilter,
  affordability: affordabilityFilter,
  moreFilters: moreFiltersFilter,
  language: languages,
  allDayService
};

export const sortByFilter = [
  'Distance',
  'Next available appointment',
  'Best Rated',
  'Most recently updated',
  'Alphabetical'
];
