<template>
  <section class="search">
    <h1 class="search__title">Rechercher un établissement</h1>

    <div class="search__container">

      <div class="search__container__form-group">
        <label class="search__container__form-group--label" for="department">Indiquez le numéro du département</label>
        <input 
          class="search__container__form-group--input" 
          id="department" 
          type="number" 
          v-model.trim="department" 
          placeholder="Ex: 29"
          @keyup="searchDept"
        />
      </div>

      <div class="search__container__buttons">
        <button-app @click="toEtablishment('mairie')" :active="etablishment === 'mairie' ? 'activeOn' : 'activeOff'">Mairies</button-app>
        <button-app @click="toEtablishment('commissariat_police')" :active="etablishment === 'commissariat_police' ? 'activeOn' : 'activeOff'">Commisériats de police</button-app>
        <button-app @click="toEtablishment('pole_emploi')" :active="etablishment === 'pole_emploi' ? 'activeOn' : 'activeOff'">Pôles emploi</button-app>
        <button-app @click="toEtablishment('prefecture')" :active="etablishment === 'prefecture' ? 'activeOn' : 'activeOff'">Préfectures</button-app>
      </div>

      <div class="search__container__results">
        <h2 class="search__container__results__title">Type de recherche : <span class="search__container__results__title--name">{{ etablishmentName }}</span></h2>

        <div class="search__container__results__cards">
          <card-app v-for="(result, index) in results" :key="index" :infos="result"></card-app>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

  import './../../../assets/scss/style.scss'
  import CardApp from './CardsApp/CardApp'

  export default {
    name:"search-app",

    components: {
      CardApp
    },

    data() {
      return {
        department: null,
        results: {},
        etablishment: 'mairie',
        etablishmentName: 'Mairies',
        apiUrl: 'https://etablissements-publics.api.gouv.fr/v3/departements',
      }
    },

    methods: {
      searchDept() {
        if (this.department !== null && this.department <= 95) {
          this.axios.get(`${this.apiUrl}/${this.department}/${this.etablishment}`)
          .then((response) => {
            this.results = response.data.features
          })
        }
      },

      toEtablishment(etablishment) {

        if (this.department === null || this.department === '') {
          this.department = 29
        }

        if (etablishment === 'mairie') {
          this.etablishmentName = 'Mairies'
        } else if (etablishment === 'commissariat_police') {
          this.etablishmentName = 'Commissariats de police'
        } else if (etablishment === 'pole_emploi') {
          this.etablishmentName = 'Pôles emploi'
        } else {
          this.etablishmentName = 'Préfectures'
        }

        this.axios.get(`${this.apiUrl}/${this.department}/${etablishment}`)
        .then((response) => {
          this.etablishment = etablishment
          // this.department = null
          this.results = response.data.features
        })
      }
    },

    created() {
      this.axios.get(`${this.apiUrl}/29/${this.etablishment}`)
      .then((response) => {
        this.results = response.data.features
      })
    }
  }
</script>