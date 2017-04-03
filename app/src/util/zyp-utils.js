
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
    }
  },

  messageListHandler: function (data, context) {
    // process the message list
    var messageList = data.messageList
    console.log('receiving message data', data)
    var msgs = messageList.map(msg => {
      return msg.getMessage()
    })
    console.log('msgs', msgs)
    context.commit('SET_MESSAGES', msgs)
  },

  errorHandler: function (type, data, context) {
    // handle error messages
    console.log('whoops!', type, data, context)
  }
}
