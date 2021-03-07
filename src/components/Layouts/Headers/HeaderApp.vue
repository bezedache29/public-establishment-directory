<template>
  <header class="header-app">
    <img class="header-app__image" :src="getImgUrl(logo)" alt="Logo du site" />
    <navbar-app />
  </header>
</template>

<script>

  import './../../../assets/scss/style.scss'
  import NavbarApp from './../Navbars/NavbarApp'

  export default {
    name:"header-app",

    components: {
      NavbarApp
    },

    data() {
      return {
        logo: 'ets-logo'
      }
    },

    methods: {
      getImgUrl(name){
        var images = require.context('../../../assets', false, /\.png$/)
        return images('./' + name + ".png")
      }
    }
  }
</script>