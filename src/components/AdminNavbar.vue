<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/admin">後台</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">回到前台</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/products"
              >產品列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/orders">訂單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/coupons">優惠券</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/pics">圖片庫</RouterLink>
          </li>
        </ul>
        <a
          href="#"
          @click.prevent="signOut"
          class="text-light text-decoration-none"
          >登出</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signOut () {
      document.cookie = 'hexToken= ; expires=;'
      alert('已登出')
      this.$router.push('/login')
    }
  }
}
</script>
