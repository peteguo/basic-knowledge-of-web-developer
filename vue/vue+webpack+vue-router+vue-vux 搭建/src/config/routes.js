
// import list from '../page/list'
import home from '../page/main/home'
import cart from '../page/main/cart'
import classify from '../page/main/classify'
import me from '../page/main/me'
import user from '../page/main/user'
import login from '../page/main/user/login'
import register from '../page/main/user/register'
export default [
        {
          path: '/',
          component: home
        },
        {
          name: 'home',
          path: '/home',
          component: home
        },
        {
          name: 'cart',
          path: '/cart',
          component: cart
        },
        {
          name: 'classify',
          path: '/classify',
          component: classify
        },
        {
          name: 'me',
          path: '/me',
          component: me
        },
        {
          path: '/user',
          component: user,

          children: [
            {
              path:'register',
              component:register
            },
            {
              name: 'login',
              path:'login',
              component:login
            },
          ]
        }




]
