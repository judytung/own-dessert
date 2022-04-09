<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FooterView></FooterView>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: {
    NavBar,
    FooterView
  }
}
</script>
