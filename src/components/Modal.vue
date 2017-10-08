<template>
  <modal name="modal">
    <slot></slot>
  </modal>
</template>

<script>
export default {
  name: 'GoodModal',
  props: ['isOpen'],
  watch: {
    isOpen: (newVal, oldVal) => {
      if (newVal && newVal !== oldVal) {
        this.$modal.show('modal')
      } else if (!newVal && newVal !== oldVal) {
        this.$modal.hide('modal')
      }
    }
  }
}
</script>

<style scoped>
</style>