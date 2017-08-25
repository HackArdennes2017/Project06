import Home from 'components/Home'
import Welcome from 'components/Welcome'
import Festivals from 'components/Festivals'

export default [
  {
    path: '/',
    exact: true,
    component: Welcome,
  },
  {
    path: '/festivals',
    exact: true,
    component: Festivals,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
]
