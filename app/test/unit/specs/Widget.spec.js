import Vue from 'vue'
import widgetThing from '@/components/widget'

describe('widgetThing.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(widgetThing)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
