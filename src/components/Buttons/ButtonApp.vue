<template>
  <button :class="isActive">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-app",

  props: {
    active: String
  },

  computed: {
    isActive() {
      return ['button', {'button--active': (this.active === 'activeOn'), 'button--inactive': (this.active === 'activeOff')}]
    }
  }
}
</script>