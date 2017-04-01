// import Zyp from '../../static/zyphub/dist/zyphublib.js'
// instantiate the library and register event handlers
// var zyp = new Zyp()

export default {
  // handle user notifications
  userNotificationHandler: function (type, data, context) {
    switch (type) {
      case 'login:enterpriseToken':
        // once logged into an enterprise fetch its users
        // zyp.getEnterpriseUsers()
        break

      case 'enterprise:users':
        // having the enterprise user to zypId mapping fetch the users message list
        console.log('getting user messages')
        // zyp.getMessageList()
        break
    }
  },

  messageListHandler: function (data, context) {
    // process the message list
    var messageList = data.messageList
    console.log('messageList', messageList, context)
    context.store.dispatch('FETCH_MESSAGES', messageList)
  },

  errorHandler: function (type, data, context) {
    // handle error messages
    console.log('whoops!', type, data, context)
  }
}
