<template>
  <div id="app">
  	<router-view></router-view>
  </div>
</template>

<script>
import Login from '@/views/Login.vue'
import '@/assets/css/style.css'

export default {

  name: 'App',
  components: {
  	Login
  },

  data () {
    return {

    }
  },
}
</script>

<style lang="css" scoped>
</style>