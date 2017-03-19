<template>
  <div id="app">
    <widgetThing></widgetThing>
  </div>
</template>

<script>
import Zyp from './containers/zyp'

export default {
  name: 'app',
  components: {
    Zyp
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
