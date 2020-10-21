<template>
  <div id="app">
    <PartnerEateries></PartnerEateries>
  </div>
</template>

<script>
import PartnerEateries from './components/PartnerEateries.vue'

export default {
  name: 'App',
  components: {
    PartnerEateries
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
