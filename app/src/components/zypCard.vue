<template>
  <div class="view zyp-card" v-on:click="showCard($event)">
    <div class="card-top">
      <div class="priority">
        <i v-if="msg.envelope.priority === 1" class="fa fa-exclamation-circle" aria-hidden="true"></i>
        <i v-else class="fa fa-info-circle" aria-hidden="true"></i> {{ }}</div>
      <div class="originator">
        <span class="tag is-light ui olive label"><i class="fa fa-user-circle-o user-circle" aria-hidden="true"></i> {{ msg.envelope.originator.enterpriseId }}</span>
      </div>
      <div class="date-pattern">
        <div class="date">{{ this.createdDate }}</div>
        <div class="pattern">{{ msg.envelope.pattern }}</div>
      </div>
    </div>
    <div class="message-container">
      <span class='label'>MESSAGE</span>
      <div class="msg">{{ msg.content[0].content }}</div>
    </div>
    <div class="card-detail">
      <div class="participants-container">
        <span class='label'>PARTICIPANTS</span>
        <ul class="participants">
          <li v-for="party in msg.participants" class="participant">
            <span class="tag is-light" v-lastEvent-tooltip.bottom-center="party.lastEvent"><i class="fa fa-user-circle-o" aria-hidden="true"></i> {{ party.member.enterpriseId }}</span>
          </li>
        </ul>
      </div>
      <zypCardStats :state="msg.state" />
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import zypCardStats from './zypCardStats.vue'
  
  export default {
    name: 'zypCard',
    data () {
      return {}
    },
    props: ['msg'],
    components: {
      zypCardStats
    },
    computed: {
      createdDate: function () {
        return moment(this.msg.time.created).format('lll')
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
    min-height: 100px;
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
  
  .zyp-card div.card-detail {
    display: none;
    height: 0px;
  }

  .zyp-card div.card-detail.active {
    display: block;
    height: 220px;
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
    width: 70px;
    padding: 0 5px;
  }
  
  .zyp-card div.date {
    width: 150px;
    font-size: 11px;
  }
  
  .zyp-card div.originator {
    display: inline-block;
    padding: 3px 5px 0 5px;
  }
  
  .zyp-card div.originator span.tag i.fa.fa-user-circle-o {
    color: white;
  }
  
  .zyp-card div.msg {
    display: block;
    width: 260px;
    height: 25px;
    padding: 10px;
    padding: 0 5px;
    white-space: nowrap;
  }
  
  .zyp-card i {
    width: 20px;
  }
  
  .zyp-card span.tag {
    margin-right: 5px;
    margin-top: 5px;
    padding-left: 5px;
    padding-right: 10px;
  }
  
  .zyp-card span.label {
    position: relative;
    margin: 5px 0 0 0;
    font-size: 9px;
    font-weight: 700;
    width: 100%;
  }
  
  .zyp-card .conversation-stats div {
    display: block;
  }
</style>
