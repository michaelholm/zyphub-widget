// store.js

import Vue from 'vue'
import Vuex from 'vuex'
import Zyp from '../../static/zyphub/dist/zyphublib.js'
import zypUtils from '../util/zyp-utils.js'

Vue.use(Vuex)

// the root, initial state object
const state = {
  messages: [],
  activeMessages: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
  SET_MESSAGES: (state, messages) => {
    console.log('state +', state, messages)
    state.messages = messages
  },
  ADD_MESSAGE: (state) => {
    const newMessage = {
      pattern: 'STANDARD',
      members: ['enterpriseId1', 'enterpriseId2', 'zypHubId1'],   // can mix enterprise and zyphubId's to address users
      content: 'this is a message, enjoy it please'
    }
    state.messages.push(newMessage)
    state.activeMessage = newMessage
  },

  EDIT_MESSAGE: (state, text) => {
    state.activeMessage.text = text
  },

  DELETE_MESSAGE: (state) => {
    state.messages.$remove(state.activeMessage)
    state.activeMessage = state.messages[0]
  },

  SET_ACTIVE_MESSAGE: (state, message) => {
    state.activeMessage = message
  }
}

const actions = {
  FETCH_MESSAGES: () => {
    // Call the messages service on the server via websocket
    console.log('fetching messages')
    zyp.getMessageList()
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
var store = new Vuex.Store({
  state,
  mutations,
  actions
})

// instantiate zyp library and register event handlers
var zyp = new Zyp()
zyp.onNotification(zypUtils.userNotificationHandler)
zyp.onMessageList(zypUtils.messageListHandler, store)
zyp.onError(zypUtils.errorHandler)
zyp.loginByEnterpriseToken(
  'Tony Stark',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJaeXBIdWIiLCJpc3MiOiJ6eXBodWIuY29tIiwic3ViIjoiZW50ZXJwcmlzZSIsImp0aSI6IjU2MTk0MGYxNjQyN2RjZWQ1Yjg1MjlhMiIsImFkbWluIjp0cnVlLCJpYXQiOjE0ODU0NDk2MjAsImV4cCI6MTUxNjk4NTYyMH0.7qMxmTG6jPqDfYjQxTa-Z9Qplqob-FYOFby02WZ9VmE'
)

export default store
