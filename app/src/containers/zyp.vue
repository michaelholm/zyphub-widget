<template>
  <div class="zyp-app">
    <div class="zyp-dashboard" v-bind:class="{ active: isActive }">
      <div id="side-tab" v-on:click="togglePanel" v-bind:class="{ newMsg: hasUnreadMsg }">
        <div class="vertical-text">Zyp Dashboard</div>
      </div>
      <div id="test-tab" v-on:click="toggleNewMsg"></div>
      <div class="zyp-dashboard-hdr">
        <div class="box">
          <div class="box-count">3</div>
          <div class="box-title">Unread</div>
        </div>
        <div class="box">
          <div class="box-count">16</div>
          <div class="box-title">Read</div>
        </div>
        <div class="box">
          <div class="box-count">1</div>
          <div class="box-title">Actionable</div>
        </div>
      </div>
      <ul class="zyp-cards">
        <li class="zyp-card" v-on:click="showCard">
          <div class="priority"><i class="">&nbsp;</i></div>
          <div class="originator"><span class="tag is-light">Tony</span></div>
          <div class="date-pattern">
            <div class="date">03/19/2017</div>
            <div class="pattern">FYI</div>
          </div>
          <div class="msg">Everyone should know about this.</div>
          <div class="card-detail">
  
          </div>
        </li>
  
        <li class="zyp-card" v-on:click="showCard">
          <div class="priority"><i class="fa fa-exclamation-circle icon"></i></div>
          <div class="originator"><span class="tag is-info">Hulk</span></div>
          <div class="date-pattern">
            <div class="date">03/21/2017</div>
            <div class="pattern">FCFS</div>
          </div>
          <div class="msg">Four tickets for Cubs opening day available at face value. First come, first served</div>
          <div class="card-detail">
  
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'
  import Zyp from '../../static/zyphub/dist/zyphublib.js'
  import zypUtils from '../util/zyp-utils.js'
  import { fetchMessages } from '../vuex/actions'
  
  var ZypWidget = {
    name: 'zyp-widget',
    data () {
      return {
        msg: 'Welcome to the XX App',
        isActive: false,
        hasUnreadMsg: false,
        cardIsDisplayed: false,
        focusCardId: null,
        messages: []
      }
    },
    store,
    vuex: {
      getters: {
        activeMessage: state => state.activeMessage
      },
      actions: {
        fetchMessages
      }
    },
    methods: {
      togglePanel: function (event) {
        this.isActive = !this.isActive
        // this.$store.dispatch('FETCH_MESSAGES')
        if (this.isActive) { zyp.getMessageList() }
      },
      toggleNewMsg: function () {
        this.hasUnreadMsg = !this.hasUnreadMsg
        this.focusCardId = this.focusCardId++
        console.log('.-->', this.messages)
      },
      showCard: function (event) {
        event.stopPropagation()
        var el = event.currentTarget.getElementsByClassName('card-detail')[0]
        el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active')
      }
    }
  }

  // instantiate zyp library and register event handlers
  var zyp = new Zyp()
  zyp.onNotification(zypUtils.userNotificationHandler)
  zyp.onMessageList(zypUtils.messageListHandler, ZypWidget)
  zyp.onError(zypUtils.errorHandler)
  zyp.loginByEnterpriseToken(
    'Luke Perry',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJaeXBIdWIiLCJpc3MiOiJ6eXBodWIuY29tIiwic3ViIjoiZW50ZXJwcmlzZSIsImp0aSI6IjU2MTk0MGYxNjQyN2RjZWQ1Yjg1MjlhMiIsImFkbWluIjp0cnVlLCJpYXQiOjE0ODU0NDk2MjAsImV4cCI6MTUxNjk4NTYyMH0.7qMxmTG6jPqDfYjQxTa-Z9Qplqob-FYOFby02WZ9VmE'
  )

  export default ZypWidget

</script>

<style>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .new-msg-input-field {
    margin: 10px 0;
  }
  
  .msg-app {
    position: relative;
    width: 380px;
    border: 1px solid #cecece;
    padding: 5px;
    margin: 0 auto;
    color: #fff;
  }
  
  .zyp-dashboard {
    position: absolute;
    top: 40px;
    left: -490px;
    transition: 0.7s;
    -webkit-transition: 0.7s;
    -moz-transition: 0.7s;
    width: 450px;
    height: 400px;
    background-color: darkslategrey;
  }
  
  .zyp-dashboard.active {
    transition: 0.7s;
    -webkit-transition: 0.7s;
    -moz-transition: 0.7s;
    left: -40px;
  }
  
  .zyp-dashboard-hdr {
    border-bottom: 3px solid grey;
    padding: 10px;
    margin-bottom: 5px;
  }
  
  .zyp-dashboard-hdr .box {
    vertical-align: top;
    display: inline-block;
    font-size: 12px;
    width: 140px;
    height: 70px;
    padding: 5px;
    position: relative;
    overflow: hidden;
  }
  
  .zyp-dashboard-hdr .box .box-title {
    font-weight: 700;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  
  .zyp-dashboard-hdr .box .box-count {
    font-size: 20px;
    float: left;
    font-weight: 700;
    width: 100%;
    color: firebrick;
    font-size: 36px;
    position: relative;
    top: -5px;
    left: 5px;
  }
  
  .zyp-cards {
    width: 450px;
    height: 320px;
    -webkit-transition: max-height 1s;
    -moz-transition: max-height 1s;
    -ms-transition: max-height 1s;
    -o-transition: max-height 1s;
    transition: max-height 1s;
    background: #e5feff;
    overflow: hidden;
  }
  
  .zyp-card {
    margin: 10px 5px;
    clear: both;
  }
  
  .zyp-card.active {
    background: #cecece;
    height: 260px;
  }
  
  .zyp-card div {
    vertical-align: top;
  }
  
  .zyp-card div.card-detail {
    height: 0;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
  
  .zyp-card div.card-detail.active {
    height: 320px;
    background-color: #cecece;
    transition-property: all;
    transition-duration: .7s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
  
  .zyp-card div.priority {
    display: inline-block;
    width: 25px;
    padding: 5px 3px 0px 3px;
  }
  
  .zyp-card div.date-pattern {
    display: inline-block;
  }
  
  .zyp-card div.date {
    width: 70px;
    font-size: 11px;
  }
  
  .zyp-card div.date-pattern {
    display: inline-block;
    width: 70px;
    padding: 0 5px;
  }
  
  .zyp-card div.msg {
    display: inline-block;
    width: 260px;
    height: 25px;
    padding: 10px;
    float: right;
    padding: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .zyp-card div.originator,
  .zip-card div.date-pattern {
    display: inline-block;
    width: 60px;
    padding: 3px 5px 0 5px;
  }
  
  .icon {
    color: #fff;
  }
  
  .zyp-card i {
    width: 20px;
  }
  
  #side-tab {
    text-orientation: sideways-right;
  }
  
  #side-tab {
    background: #c81e2b;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#f9d835), to(#f3961c));
    background: -moz-linear-gradient(#f9d835, #f3961c);
    background: -o-linear-gradient(#f9d835, #f3961c);
    background: linear-gradient(#f9d835, #f3961c);
    -webkit-top-right-border-radius: 10px;
    -moz-border-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    right: -35px;
    top: 20px;
    height: 110px;
    width: 35px;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 9999;
    display: block;
  }
  
  .vertical-text {
    transform: rotate(90deg);
    padding: 4px 12px;
    color: #666;
    font-weight: 700;
    justify-content: center;
    font-family: inherit;
    line-height: 14px;
  }
  
  #test-tab {
    background: #cecece;
    -webkit-top-right-border-radius: 10px;
    -moz-border-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    right: -20px;
    bottom: 40px;
    height: 50px;
    width: 20px;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 9999;
    display: block;
  }
  
  #side-tab.newMsg {
    background: #c81e2b;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#f9d835), to(#c81e2b));
    background: -moz-linear-gradient(#f9d835, #c81e2b);
    background: -o-linear-gradient(#f9d835, #c81e2b);
    background: linear-gradient(#f9d835, #c81e2b);
  }
  
  #side-tab .zyp-dashboard {
    position: absolute;
    top: 40px;
    left: -500px;
  }
</style>
