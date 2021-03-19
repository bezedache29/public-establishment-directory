<template>
  <div class="card">
    <div class="card__infos">
      <div class="card__infos__title">{{ infos.properties.nom }}</div>
      <div class="card__infos__body">
        <p class="card__infos__body__tel">Téléphone: {{ infos.properties.telephone }}</p>
        <div class="card__infos__body__adress">
          <p class="card__infos__body__adress--title">Adresse:</p>
          <p>{{ infos.properties.adresses[0].lignes[0] }}</p>
          <p>{{ infos.properties.adresses[0].codePostal }} {{infos.properties.adresses[0].commune }}</p>
        </div>
        <div class="card__infos__body__hours">
          <p class="card__infos__body__hours--title">Horaires:</p>
          <ul v-for="(horaire, index) in infos.properties.horaires" :key="index">
            <li v-for="(heure, i) in horaire.heures" :key="i" class="card__infos__body__hours--description">
              Du {{ horaire.du }} au {{ horaire.au }} - de {{ heure.de }} à {{ heure.a }}
            </li>
          </ul>
        </div>
        <div class="card__infos__body__link">
          <button-cta :link="infos.properties.url">Visiter le site web</button-cta>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import './../../../../assets/scss/style.scss'

export default {

  name:"card-app",

  props: {
    infos: Object
  },

  created() {
    console.log(this.infos)
  }

}
</script>