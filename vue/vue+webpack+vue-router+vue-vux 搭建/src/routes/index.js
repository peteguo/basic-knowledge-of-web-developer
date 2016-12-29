import index from "pages/index.vue"
const router = new VueRouter({
  mode:'hash',
  linkActiveClass:'active',
  routes: [
    {
      name:'index'
      path:'/',
      component:index,
    //  redirect:'/main',
      meta:{
        auth:true
      },
    },
    {
      name:'toolBar',
      path:'/toolBar',
      component:require('pages/ToolBar'),
      meta: {
        auth: true
      }
    },
    {
      name:'notesList',
      path:'/notesList',
      component:require('pages/NotesList'),
      meta: {
        auth: true
      }
    },
    {
      name:'editor',
      path:'/editor',
      component:require('pages/Editor'),
      meta: {
        auth: true
      }
    },
    {
      name:'magicSquare',
      path:'/magicSquare',
      component:require('pages/magicSquare'),
      meta: {
        auth: true
      }
    },
  ]
})
