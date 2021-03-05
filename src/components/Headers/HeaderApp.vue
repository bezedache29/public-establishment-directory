<template>
  <header>
    <img class="image" :src="getImgUrl(logo)" alt="Logo du site" />
    <navbar-app />
  </header>
</template>

<script>

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
        var images = require.context('../../assets', false, /\.png$/)
        return images('./' + name + ".png")
      }
    }
  }
</script>

<style scoped>
  header {
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #B8C3F5;
  }
  .image {
    width: 70px;
    height: 70px;
    margin: 0 20px;
  }
</style>