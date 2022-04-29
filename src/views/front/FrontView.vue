<template>
  <NavBar />
  <RouterView :key="$route.fullPath" @loadingStatus="changeLoadingStatus" />
  <FooterView />
  <Loading :isLoading="isLoading" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    NavBar,
    FooterView
  },
  methods: {
    changeLoadingStatus (status) {
      this.isLoading = status
    }
  }
}
</script>
