
export default {
  // handle user notifications
  userNotificationHandler: function (type, data, context) {
    console.log('userNotificationHandler', type, data, context)

    switch (type) {
      case 'login:enterpriseToken':
        // once logged into an enterprise fetch its users
        // zyp.getEnterpriseUsers()
        break

      case 'enterprise:users':
        // having the enterprise user to zypId mapping fetch the users message list
        console.log('getting user messages')
        break
      case 'message:new':
        console.log('new message', data, context)
        break
    }
  },

  messageListHandler: function (data, context) {
    // process the message list
    var messageList = data.messageList
    var msgs = messageList.map(msg => {
      return msg.getMessage()
    })
    context.commit('SET_MESSAGES', msgs)
  },

  errorHandler: function (type, data, context) {
    // handle error messages
    console.log('whoops!', type, data, context)
  }
}
