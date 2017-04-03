<template>
  <div class="zyp-app">
    <zypDashboard />
    <zypCards />
    <div id="side-tab" v-on:click="togglePanel" v-bind:class="{ newMsg: hasUnreadMsg }">
      <div class="vertical-text">Zyp Dashboard</div>
    </div>
    <div id="test-tab" v-on:click="toggleNewMsg"></div>
  </div>

</template>

<script>
  import store from '../vuex/store'
  import zypCards from '../components/zypCards'
  import zypDashboard from '../components/dashboard'

  var ZypWidget = {
    name: 'zyp-widget',
    data () {
      return {
        isActive: false,
        hasUnreadMsg: false
      }
    },
    store,
    components: {
      zypCards,
      zypDashboard
    },
    methods: {
      togglePanel: function (event) {
        this.isActive = !this.isActive
      },
      toggleNewMsg: function () {
        this.hasUnreadMsg = !this.hasUnreadMsg
      }
    },
    watch: {
      isActive: function (val) {
        if (val) {
          this.$store.dispatch('FETCH_MESSAGES')
        }
      }
    }
  }

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
  
  .zyp-app {
    position: absolute;
    left: 0;
    top: 50px;
    width: 460px;
    border: 1px solid #cecece;
    padding: 5px;
    margin: 0 auto;
    color: #fff;
  }
  
  .icon {
    color: #fff;
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
