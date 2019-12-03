import App from '../App.vue'

export default [
  {
    path: '/',
    component: App,
    children: [{
      path: '',
      component: r => require.ensure([], () => r(require('../pages/App')), 'app1')
    }, {
      path: '/demo',
      component: r => require.ensure([], () => r(require('../pages/Demo')), 'demo')
    }]
  }
]
