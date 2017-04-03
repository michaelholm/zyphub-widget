<template>
    <div class="zyp-dashboard">
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
    </div>
</template>

<script>
  import store from '../vuex/store'

  export default {
    name: 'zypDashboard',
    store,
    data () {
      return {}
    },
    methods: {

    }
  
  }
</script>
<style>
  .zyp-dashboard {
    overflow: scroll;
  }

  .zyp-dashboard {
    transition: 0.7s;
    -webkit-transition: 0.7s;
    -moz-transition: 0.7s;
    width: 450px;
    height: 60px;
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
    height: 40px;
    padding: 5px;
    position: relative;
    overflow: hidden;
  }
  
  .zyp-dashboard-hdr .box .box-title {
    font-weight: 700;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #000;
  }
  
  .zyp-dashboard-hdr .box .box-count {
    float: left;
    font-weight: 700;
    width: 100%;
    color: firebrick;
    font-size: 30px;
    position: relative;
    top: -5px;
    left: 5px;
  }
</style>
