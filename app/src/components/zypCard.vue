<template>
  <div class="view zyp-card" v-on:click="showCard($event)">
    <div class="card-top">
      <div class="priority"><i class="">{{ msg.envelope.priority }}</i></div>
      <div class="originator"><span class="tag is-light">{{ msg.envelope.originator.enterpriseId }}</span></div>
      <div class="date-pattern">
        <div class="date">{{ this.createdDate }}</div>
        <div class="pattern">{{ msg.envelope.pattern }}</div>
      </div>
    </div>
    <div class="card-detail">
      <div class="message-container">
        <span class='label'>MESSAGE</span>
        <div class="msg">{{ msg.content[0].content }}</div>
      </div>
      <div class="participants-container">
        <span class='label'>PARTICIPANTS</span>
        <ul class="participants">
          <li v-for="party in msg.participants" class="participant">
            <span class="tag is-light">{{ party.member.enterpriseId }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'zypCard',
    data () {
      return {}
    },
    props: ['msg'],
    computed: {
      createdDate: function () {
        return moment(this.msg.time.created).format('MMMM Do YYYY, h:mm:ss a')
      }
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
<style>
  .zyp-card {
    border: 1px solid #cecece;
    background-color: #cecece;
    clear: both;
    color: #000;
    padding: 5px;
    margin: 5px 0;
    width: 450px;
    min-height: 180px;
  }
  .label {
    position: relative;
    margin: 5px 0 0 0;
    font-size: 9px;
    font-weight: 700;
    width: 100%;
  }
  
  .zyp-card.active {
    background: #cecece;
    height: 260px;
  }
  
  .zyp-card div {
    vertical-align: top;
    div.card-detail {
      height: 0;
      transition-property: all;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
  }
  
  
  .zyp-card div.card-detail.active {
    height: 320px;
    background-color: #cecece;
    transition-property: all;
    transition-duration: .7s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .zyp-card div.card-detail .message-container {
    margin: 10px 0;
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
    width: 150px;
    font-size: 11px;
  }
  
  .zyp-card div.date-pattern {
    display: inline-block;
    width: 70px;
    padding: 0 5px;
  }
  
  .zyp-card div.msg {
    display: block;
    width: 260px;
    height: 25px;
    padding: 10px;
    padding: 0 5px;
    white-space: nowrap;
  }
  
  .zyp-card div.originator,
  .zip-card div.date-pattern {
    display: inline-block;
    padding: 3px 5px 0 5px;
  }

  .zyp-card i {
    width: 20px;
  }

  .participants li span.tag {
    margin-right: 5px;
    margin-top: 5px;
  }
</style>
