<template>
  <div class="zyp-cards">
    <ul class="zyp-cards">
      <li v-for="msg in messages" :key="msg.id">
        <zypCard :msg="msg" />
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../vuex/store'
  import zypCard from './zypCard'

  export default {
    name: 'zypCards',
    store,
    data () {
      return {}
    },
    computed: {
      messages () {
        return store.state.messages
      }
    },
    components: {
      zypCard
    },
    methods: {}
  
  }
</script>
<style>
  .zyp-cards {
    width: 450px;
    height: 320px;
    -webkit-transition: max-height 1s;
    -moz-transition: max-height 1s;
    -ms-transition: max-height 1s;
    -o-transition: max-height 1s;
    transition: max-height 1s;
    overflow: scroll;
  }

  .zyp-cards li {
    margin: 0;
  }
</style>
