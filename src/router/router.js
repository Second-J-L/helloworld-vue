import App from '../page/home'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(require('../page/item')), 'item')
  }]
}]
