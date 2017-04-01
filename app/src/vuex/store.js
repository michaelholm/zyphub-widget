// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  messages: [],
  activeMessages: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
  FETCH_MESSAGES (messages) {
    state.messages = messages
  },
  ADD_MESSAGE (state) {
    const newMessage = {
      pattern: 'STANDARD',
      members: ['enterpriseId1', 'enterpriseId2', 'zypHubId1'],   // can mix enterprise and zyphubId's to address users
      content: 'this is a message, enjoy it please'
    }
    state.messages.push(newMessage)
    state.activeMessage = newMessage
  },

  EDIT_MESSAGE (state, text) {
    state.activeMessage.text = text
  },

  DELETE_MESSAGE (state) {
    state.messages.$remove(state.activeMessage)
    state.activeMessage = state.messages[0]
  },

  SET_ACTIVE_MESSAGE (state, message) {
    state.activeMessage = message
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})
