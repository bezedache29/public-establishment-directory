<template>
  <a :href="link" class="btn-cta" target="_blank"><slot></slot></a>
</template>

<script>

import './../../assets/scss/style.scss'

export default {
  name: 'button-cta',

  props: {
    link: String
  }

}
</script>