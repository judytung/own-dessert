<template>
  <div class="container py-6 py-lg-7">
    <h2 class="text-center">後台登入</h2>
    <div class="row">
      <div class="login col-lg-6 offset-lg-3 p-6 mt-3 d-flex align-items-center">
        <div class="border border-primary p-s w-100 ">
          <form class="bg-light p-5 clearfix ">
            <div class="form-floating">
              <input type="email" id="account" class="form-control" placeholder="email address">
              <label for="account">email address</label>
            </div>
            <div class="form-floating mt-2">
              <input type="password" id="password" class="form-control" placeholder="password">
              <label for="password">password</label>
            </div>
            <div class="mt-9 float-end">
              <router-link class="btn btn-outline-secondary d-inline-block me-1" to="/">返回前台</router-link>
              <button type="button" class="btn btn-secondary">登入</button>
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
  }
}
</script>
