<template>
  <div class="zyp-card-stats">
    <span class='label'>STATS</span>
    <table>
      <tbody>
        <tr v-for="entry in keys">
          <td>
            {{ entry | capitalize }} {{ state[entry] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'zypCardStats',
    data () {
      return {
        keys: ['accepts', 'oks', 'forwards', 'delegates', 'leaves', 'rejects']
      }
    },
    filters: {
      capitalize: function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    props: ['state'],
    methods: {}
  }
</script>

<style>
  .zyp-card-stats {
    padding: 10px 0;
    font-size: 12px;
    width: 120px;
    display: inline-block;
  }

  .zyp-card span.label {
    position: relative;
    margin: 5px 0 5px 0;
    font-size: 9px;
    font-weight: 700;
    width: 100%;
  }
</style>
