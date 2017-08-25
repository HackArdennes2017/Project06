import CabaretVert from 'components/CabaretVert'
import Welcome from 'components/Welcome'
import Festivals from 'components/Festivals'
import Give from 'components/Give'
import ComingSoon from 'components/ComingSoon'

export default [
  {
    path: '/',
    exact: true,
    component: Welcome,
  },
  {
    path: '/coming-soon',
    exact: true,
    component: ComingSoon,
  },
  {
    path: '/festivals',
    exact: true,
    component: Festivals,
  },
  {
    path: '/cabaret-vert',
    exact: true,
    component: CabaretVert,
  },
  {
    path: '/cabaret-vert/give',
    exact: true,
    component: Give,
  },
]
