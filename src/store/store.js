import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  url: undefined
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setUrl (state, { url }) {
    state.url = url
  }
}

const send = (resume, commit) => {
  return axios.post('https://p41iil0hub.execute-api.us-east-1.amazonaws.com/dev/', {
    resume
  }).then(value => {
    console.log(value)
    commit('setUrl', {
      url: value.data.id
    })
  })
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  sendResume ({ commit }, event) {
    console.log(event)
    const reader = new FileReader()

    reader.onload = function (event) {
      const jsonObj = JSON.parse(event.target.result)
      send(jsonObj, commit)
    }

    reader.readAsText(event.target.files[0])
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  actions,
  mutations
})
