<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="ml-1 mr-1"><button-nav>Accueil</button-nav></li>
      <li><button-nav>Rechercher</button-nav></li>
    </ul>
  </nav>
</template>

<script>

  import './../../../assets/scss/style.scss'
  import ButtonNav from './../../Buttons/ButtonNav'

  export default {
    name:"navbar-app",

    components: {
      ButtonNav
    },

    data() {
      return {
        
      }
    },
  }
</script>