import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutations-types'
Vue.use(Vuex)

const state = {
  count: 0
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
},
const mutations = {
  [SOME_MUTATION] (state,n) {
    state.count += n
  }

  // increment(state){
  //   state.count++
  // }
},

//从store的state中派生出一些状态
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
})
