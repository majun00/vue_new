import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Home from '@/pages/home/Home'
import Index from '@/pages/home/Index'
import Login from '@/pages/login/Login'
import Signin from '@/pages/login/Signin'
import Register from '@/pages/login/Register'
import Forget from '@/pages/login/Forget'
import listItem from '@/pages/list/listItem'
import listDetail from '@/pages/list/listDetail'
import companyList from '@/pages/company/companyList'
import companyDetail from '@/pages/company/companyDetail'
import Group from '@/pages/group/Group'
import groupDetail from '@/pages/group/groupDetail'
import Center from '@/pages/center/Center'
import centerSet from '@/pages/center/centerSet'
import centerPack from '@/pages/center/centerPack'
import centerSend from '@/pages/center/centerSend'
import centerList from '@/pages/center/centerList'
import centerGroup from '@/pages/center/centerGroup'
import centerNews from '@/pages/center/centerSet'
import centerCollect from '@/pages/center/centerSet'
import centerBill from '@/pages/center/centerBill'

Vue.use(Router)

// 等待后台给接口再打开
const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: '',
        component: Index
      },
      {
        path: 'listItem',
        component: listItem
      },
      {
        path: 'listDetail',
        component: listDetail
      },
      {
        path: 'group',
        meta: {
          requireAuth: true,
        },
        component: Group
      },
      {
        path: 'groupDetail',
        component: groupDetail
      },
      {
        path: 'companyList',
        component: companyList
      },
      {
        path: 'companyDetail/:id',
        component: companyDetail
      },

    ]
  },
  {
    path: '/center',
    component: Center,
    children: [{
        path: '',
        component: centerSet
      },
      {
        path: 'pack',
        component: centerPack
      },
      {
        path: 'send',
        component: centerSend
      },
      {
        path: 'list',
        component: centerList
      },
      {
        path: 'group',
        component: centerGroup,
      },
      {
        path: 'news',
        component: centerNews
      },
      {
        path: 'collect',
        component: centerCollect
      },
      {
        path: 'bill',
        component: centerBill
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signin',
    component: Signin,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/forget',
    component: Forget,
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('saveToken', window.localStorage.getItem('token'))
}

let router = new Router({
  routes
});


router.beforeEach((to, from, next) => {
  console.log(store.state.token)
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})

export default router;

// export default new Router({
//   routes: [{
//       path: '/',
//       name: 'Home',
//       component: Home,
//       children: [{
//           path: '',
//           component: Index
//         },
//         {
//           path: 'listItem',
//           component: listItem
//         },
//         {
//           path: 'listDetail',
//           component: listDetail
//         },
//         {
//           path: 'listDetail',
//           component: Index
//         },
//         {
//           path: 'group',
//           component: Group
//         },
//         {
//           path: 'groupDetail',
//           component: groupDetail
//         }
//       ]
//     },
//     {
//       path: '/center',
//       component: Center,
//       children: [{
//           path: '',
//           component: centerSet
//         },
//         {
//           path: 'pack',
//           component: centerPack
//         },
//         {
//           path: 'send',
//           component: centerSend
//         },
//         {
//           path: 'list',
//           component: centerList
//         },
//         {
//           path: 'group',
//           component: centerGroup
//         },
//         {
//           path: 'news',
//           component: centerNews
//         },
//         {
//           path: 'collect',
//           component: centerCollect
//         },
//         {
//           path: 'bill',
//           component: centerBill
//         }
//       ]
//     },
//     {
//       path: '/login',
//       component: Login,
//     },
//     {
//       path: '/signin',
//       component: Signin,
//     },
//     {
//       path: '/register',
//       component: Register,
//     },
//     {
//       path: '/forget',
//       component: Forget,
//     }
//   ]
// })
