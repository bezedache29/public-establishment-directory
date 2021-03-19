<template>
  <section class="home">
    <h1 class="home__title">Annuaire des établissements publics de l'administration</h1>
    <div class="home__container">
      <p class="home__container__description">
        Cette application a pour but de trouver les coordonnées d'un établissement public de l'administration, comme :
      </p>
      <ul class="home__container__list">
        <li>- Mairies</li>
        <li>- Commisariats de police</li>
        <li>- Pôles emploi</li>
        <li>- Préfectures</li>
      </ul>
      <br />
      <p class="home__container__description">Les informations pour chaque établissements que vous trouverez :</p>
      <ul class="home__container__list">
        <li>- Son nom</li>
        <li>- Son adresse complète</li>
        <li>- Son numéro de téléphone</li>
        <li>- Ses jours et horaires d'ouvertures</li>
        <li>- Un lien vers son site internet</li>
      </ul>
      <br />
      <p class="home__container__description">Le contenu de cet annuaire est généré automatiquement à partir des données de <a class="home__container__description--link" href="https://api.gouv.fr/les-api/api_etablissements_publics" target="_blank">Service-public.fr</a></p>
      <br />
      <p class="home__container__signature">
        Christophe Salou
      </p>
    </div>
    
  </section>
</template>

<script>
  import './../../../assets/scss/style.scss'

  export default {
    name:"home-app",
  }
</script>