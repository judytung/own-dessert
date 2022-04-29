<template>
  <vueLoading v-model:active="isLoading"
   :z-index="1080">
    <div class="loadingio-spinner-spin-va6hov0bi8h"><div class="ldio-1xoy17nzaz2">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </vueLoading>
</template>

<script>
import vueLoading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

export default {
  props: ['is-loading'],
  components: {
    vueLoading
  }
}
</script>
