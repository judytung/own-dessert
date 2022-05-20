<template>
  <AdminNavbar/>
  <RouterView @loadingStatus="changeLoadingStatus" v-if="checkSuccess"/>
  <Loading :isLoading="isLoading" />
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'

export default {
  data () {
    return {
      isLoading: false,
      checkSuccess: false
    }
  },
  components: {
    AdminNavbar
  },
  methods: {
    changeLoadingStatus (status) {
      this.isLoading = status
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const url = `${process.env.VUE_APP_API}/api/user/check`
        this.$http
          .post(url, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true
          })
          .catch((err) => {
            this.$httpMessageState(err.response, '錯誤訊息')
            this.$router.push('/login')
          })
      } else {
        alert('尚未登入')
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
