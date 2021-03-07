<template>
  <div>
    <header-app @is-home="changeContainer($event)" />
    <home-app v-if="home" class="container" />
    <search-app v-else class="container" />
  </div>
</template>

<script>

import './assets/scss/style.scss'

import HeaderApp from './components/Layouts/Headers/HeaderApp'
import HomeApp from './components/Sections/HomeApp/HomeApp'
import SearchApp from './components/Sections/SearchApp/SearchApp'

export default {
  name: 'App',

  components: {
    HeaderApp,
    HomeApp,
    SearchApp
  },

  data() {
    return {
      home: true
    }
  },

}
</script>