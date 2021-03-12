<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="ml-1 mr-1"><button-nav @click="toHome">Accueil</button-nav></li>
      <li><button-nav @click="toSearch">Rechercher</button-nav></li>
    </ul>
  </nav>
</template>

<script>

  import './../../../assets/scss/style.scss'
  import ButtonNav from './../../Buttons/ButtonNav'

  export default {
    name:"navbar-app",

    inject: ['toHome', 'toSearch'],

    components: {
      ButtonNav
    },

    data() {
      return {
        
      }
    },
  }
</script>