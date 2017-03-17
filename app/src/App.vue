<template>
  <div id="app">
    <widgetThing></widgetThing>
  </div>
</template>

<script>
import widgetThing from './components/Widget'

export default {
  name: 'app',
  components: {
    widgetThing
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
