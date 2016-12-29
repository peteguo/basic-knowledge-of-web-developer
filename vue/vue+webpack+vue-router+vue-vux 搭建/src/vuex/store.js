import Vue from 'vue'
import Vuex from 'vuex'
import mutationState from './mutations-state'
import actions from './actions'
import _ from 'lodash/Array'
Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

//从store的state中派生出一些状态
// const getters = {
//   activeNote: state => state.activeNote
// }

export default new Vuex.Store({
  state,
  mutations:{
    ADD_NOTE (state) {
      const newNote = {
        title:'new title',
        text: 'new text',
        favorite: false,
        url:''
      }
      state.notes.push(newNote)
      state.activeNote = newNote
    },

    EDIT_NOTE (state, text) {
      state.activeNote.text = text
    },

    DELETE_NOTE (state) {
      var a = _.remove(state.notes,function(o){
        o == state.activeNote
      })
      // this.$delete(state.notes,state.activeNote)
      state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE (state) {
      state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE (state, note) {
      state.activeNote = note
    }
  },
  getters:{
    activeNote: state => state.activeNote,
    notes: state => state.notes,
    activeNoteText: state => state.activeNote.text
  },
  actions:{
    addNote: ({ commit }) => {
      commit('ADD_NOTE')
    },
    editNote:({ commit }, e) => {
      commit('EDIT_NOTE', e.target.value)
    },
    deleteNote:({ commit }) => {
      commit('DELETE_NOTE')
    },
    updateActiveNote:({ commit }, note) => {
      commit('SET_ACTIVE_NOTE', note)
    },
    toggleFavorite:({ commit }) => {
      commit('TOGGLE_FAVORITE')
    }
  }
})
