<template>
  <div class="container py-6 py-lg-7">
    <h2 class="text-center">後台登入</h2>
    <div class="row">
      <div class="login col-lg-6 offset-lg-3 p-6 mt-3 d-flex align-items-center">
        <div class="border border-primary p-s w-100 ">
          <form @submit.prevent="logIn" class="bg-light p-5 clearfix">
            <div class="form-floating">
              <input type="email" id="account" class="form-control" placeholder="email address" v-model="user.username">
              <label for="account">email address</label>
            </div>
            <div class="form-floating mt-2">
              <input type="password" id="password" class="form-control" placeholder="password" v-model="user.password">
              <label for="password">password</label>
            </div>
            <div class="mt-9 float-end">
              <RouterLink class="btn btn-outline-secondary d-inline-block me-1" to="/">返回前台</RouterLink>
              <button type="submit" class="btn btn-secondary">登入</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    logIn () {
      if (this.user.username === '' || this.user.password === '') {
        alert('請輸入正確的帳號密碼！')
        return
      }
      const url = `${process.env.VUE_APP_API}/admin/signin/`
      this.$http.post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          this.$httpMessageState(res, '登入')
          this.$router.push('/admin/products')
        })
        .catch(err => {
          this.$httpMessageState(err.response, '錯誤訊息')
          this.user.password = ''
        })
    }
  }
}
</script>
