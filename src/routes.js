import CabaretVert from 'components/CabaretVert'
import Welcome from 'components/Welcome'
import About from 'components/About'
import Festivals from 'components/Festivals'
import Give from 'components/Give'
import ComingSoon from 'components/ComingSoon'
import Take from 'components/Take'
import Summary from 'components/Summary'
import { fetchItems } from 'action/items'

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
    path: '/about',
    exact: true,
    component: About,
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
    load: ({ dispatch }) => dispatch(fetchItems()),
  },
  {
    path: '/cabaret-vert/give',
    exact: true,
    component: Give,
  },
  {
    path: '/cabaret-vert/take/:id',
    exact: true,
    component: Take,
    load: ({ dispatch }) => dispatch(fetchItems()),
  },
  {
    path: '/summary',
    exact: true,
    component: Summary,
  },
]
