<template>
  <ul class="zyp-cards">
    <li v-for="msg in messages" class="zyp-card" :key="msg.id">
      <zypCard :msg="msg" />
    </li>
  </ul>
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
    methods: {
      showCard: function (event) {
        event.stopPropagation()
        var el = event.currentTarget.getElementsByClassName('card-detail')[0]
        el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active')
      }
    }
  
  }
</script>
