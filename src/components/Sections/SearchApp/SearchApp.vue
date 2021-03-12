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
          v-model="department" 
          placeholder="Ex: 29"
          @keyup="searchDept"
        />
      </div>


    </div>
  </section>
</template>

<script>

  import './../../../assets/scss/style.scss'

  export default {
    name:"search-app",

    data() {
      return {
        department: null,
        results: {},
        apiUrl: 'https://etablissements-publics.api.gouv.fr/v3/departements'
      }
    },

    methods: {
      searchDept() {
        if (this.department !== null && this.department <= 95) {

          this.axios.get(`${this.apiUrl}/${this.department}/mairie`).then((response) => {
            console.log(response.data)
          })

        }
      }
    }
  }
</script>