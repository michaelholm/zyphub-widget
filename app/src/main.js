import Vue from 'vue'
import navbar from './components/navbar'
import router from './router'
import { VTooltip } from 'v-tooltip'

Vue.config.productionTip = false

Vue.directive('lastEvent-tooltip', VTooltip)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div>
      <navbar />
      <section class="section">
        <div class="container is-fluid">
          <router-view></router-view>
        </div>
      </section>
    </div>
    `,
  router,
  components: {
    navbar
  }
})
