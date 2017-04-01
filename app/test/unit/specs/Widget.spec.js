import Vue from 'vue'
import zypWidget from '@/components/widget'

describe('zypWidget.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(zypWidget)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to ZypHub Widget App')
  })
})
