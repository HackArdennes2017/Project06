export const typeMapping = [
  { value: 'tent', icon: require('assets/icons/tent'), label: 'Tente' },
  {
    value: 'sleeping-bag',
    icon: require('assets/icons/sleeping-bag'),
    label: 'Duvet',
  },
  {
    value: 'mattress',
    icon: require('assets/icons/mattress'),
    label: 'Matelas',
  },
  { value: 'chair', icon: require('assets/icons/chair'), label: 'Chaise' },
]

export const qualityMapping = [
  {
    value: 'recycle',
    icon: require('assets/icons/recycle'),
    label: 'A recycler',
  },
  { value: 'bad', icon: require('assets/icons/sadface'), label: 'Déterioré' },
  { value: 'used', icon: require('assets/icons/used'), label: 'Moyen' },
  { value: 'good', icon: require('assets/icons/check'), label: 'Neuf' },
]

export const getLabelType = (type = 'tent') =>
  typeMapping.find(t => t.value === type).label
