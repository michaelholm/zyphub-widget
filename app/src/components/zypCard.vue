<template>
  <div class="view zyp-card">
    <div class="priority"><i class="">{{ msg.envelope.priority }}</i></div>
    <div class="originator"><span class="tag is-light">{{ msg.envelope.originator.enterpriseId }}</span></div>
    <div class="date-pattern">
      <div class="date">{{ msg.time.created}}</div>
      <div class="pattern">{{ msg.envelope.pattern }}</div>
    </div>
    <div class="card-detail">
      <span class='label'>MESSAGE</span>
      <div class="msg">{{ msg.content[0].content }}</div>
      <span class='label'>PARTICIPANTS</span>
      <ul class="participants">
      <li v-for="party in msg.participants" class="participant">
          {{ party.member.enterpriseId }}
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zypCard',
    data () {
      return {}
    },
    props: ['msg'],
    methods: {
      showCard: function (event) {
        event.stopPropagation()
        var el = event.currentTarget.getElementsByClassName('card-detail')[0]
        el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active')
      }
    }
  
  }
</script>
<style>
  .zyp-card {
    border: 1px solid #cecece;
    border-bottom: 1px solid #666;
    padding: 5px;
    margin: 5px 0;
    min-height: 180px;
  }
  .label {
    position: relative;
    margin: 5px 0 0 0;
    font-size: 9px;
    font-weight: 700;
    width: 100%;
  }
</style>
