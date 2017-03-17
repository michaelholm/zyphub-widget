<template>
  <div class="msg-app">
    <div class="msg-history">
      <div class="msg left" data-user="joe">
        <div class="sayer">Joe</div>
        <div class="msg-text">Ok, the plan is to go to SuperDawg at 3PM. In or Out?</div>
      </div>
      <div class="msg left" data-user="joe">
        <div class="sayer">Joe</div>
        <div class="msg-text">We will prob meetup and drive together</div>
      </div>
      <div class="msg" data-user="linda">
        <div class="sayer">Linda</div>
        <div class="msg-text">Sounds delicious. Count me in</div>
      </div>
      <div class="msg left" data-user="joe">
        <div class="sayer">Joe</div>
        <div class="msg-text">Great!</div>
      </div>
      <div class="msg" data-user="cheryl">
        <div class="sayer">Cheryl</div>
        <div class="msg-text">What time do you think we'll be back?</div>
      </div>
      <div class="msg" data-user="linda">
        <div class="sayer">Linda</div>
        <div class="msg-text">Good question, Cheryl. I have to be home by 5:30</div>
      </div>
      <div class="msg" data-user="rob">
        <div class="sayer">Rob</div>
        <div class="msg-text">If we'll be back by 5:30 for sure, I'm in</div>
      </div>
      <div class="msg left" data-user="joe">
        <div class="sayer">Joe</div>
        <div class="msg-text">No problem, everyone. We'll be back by 5PM easily</div>
      </div>
      <div class="msg" data-user="cheryl">
        <div class="sayer">Cheryl</div>
        <div class="msg-text">Cool, I'm in too. Yum!</div>
      </div>
    </div>
  
    <div class="new-msg-input-field">
      <textarea id="msg-new" style="height:50px; width: 360px;"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget',
    data () {
      return {
        msg: 'Welcome to the XX App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  }
  
  .msg.left {
    margin-left: 50px;
    text-align: right;
  }
  
  .msg {
    position: relative;
    max-width: 300px;
    margin: 1em 0 1.5em;
    text-align: left;
    color: #000;
  }
  
  .msg .msg-text {
    background: #f3961c;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#f9d835), to(#f3961c));
    background: -moz-linear-gradient(#f9d835, #f3961c);
    background: -o-linear-gradient(#f9d835, #f3961c);
    background: linear-gradient(#f9d835, #f3961c);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 15px;
  }
  
  .msg.left .msg-text {
    background: #c81e2b;
  }
  
  .sayer {
    font-size: 10px;
    position: absolute;
    top: -15px;
    left: 15px;
    ;
    clear: both;
    margin-bottom: 4px;
  }
</style>
