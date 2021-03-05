<template>
  <nav>
    <ul class="navbar">
      <li class="ml-1 mr-1"><button-nav>Accueil</button-nav></li>
      <li><button-nav>Rechercher</button-nav></li>
    </ul>
  </nav>
</template>

<script>

  import ButtonNav from './../Buttons/ButtonNav'

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

<style scoped>
  nav {
    width :100%;
  }
  .navbar {
    display: flex;
    align-items: center;
  }
  .ml-2 {
    margin-left: 10px;
  }
  .mr-2 {
    margin-right: 10px;
  }
</style>