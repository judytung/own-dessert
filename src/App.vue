<template>
  <ToastMessages></ToastMessages>
  <RouterView/>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    ToastMessages
  }
}
</script>

<style lang="scss">
@import "./assets/style/all"
</style>
