<template>
  <div class="container overflow-hidden">
    <header class="d-flex justify-content-between align-items-end pos-relative">
      <div class="d-none d-lg-block">
        <ul class="d-flex">
          <li class="px-4">
            <router-link class="nav-hover" to="/products">甜點</router-link>
          </li>
          <li class="px-4">
            <router-link class="nav-hover" to="/about">關於我們</router-link>
          </li>
          <li class="px-4">
            <router-link class="nav-hover" to="/contact">聯絡我們</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h1>
            <router-link class="logo navbar-brand d-inline-block" to="/">Own Dessert</router-link>
        </h1>
      </div>
      <div class="d-none d-lg-block">
        <ul class="d-flex align-items-end">
          <li class="px-4">
            <router-link class="nav-hover" to="/shoppingnotice">購物說明</router-link>
          </li>
          <li class="px-4">
            <router-link class="pos-relative border-0 hvr-bob" @click="changeCart" to="/cart">
              <i class="bi bi-cart2 fs-3"></i>
              <span class="badge rounded-pill bg-secondary pos-absolute start-50 opacity-90">{{ cartData.carts.length }}</span>
            </router-link>
          </li>
          <li class="px-4">
            <router-link to="/admin/products">
              <i class="bi bi-person-fill fs-3 nav-hover"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <a class="d-md-block d-lg-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i class="bi bi-list fs-4"></i>
      </a>
    </header>
    <div class="nav-collapse collapse d-lg-none z-index-5 pos-absolute start-0 w-100 bg-primary overflow-hidden" id="collapseExample">
      <ul class=" row text-center m-s justify-content-between g-1">
        <li class="col-6 p-s border border-dark border-2 w-49">
          <router-link class="border border-dark py-2" to="/products">甜點</router-link>
        </li>
        <li class="col-6 p-s border border-dark border-2 w-49">
          <router-link class="border border-dark py-2" to="/about">關於我們</router-link>
        </li>
        <li class="col-6 p-s border border-dark border-2 w-49">
          <router-link class="border border-dark py-2" to="/contact">聯絡我們</router-link>
        </li>
        <li class="col-6 p-s border border-dark border-2 w-49">
          <router-link class="border border-dark py-2" to="/shoppingnotice">購物說明</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    // 取得購物車
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartData = res.data.data // data 裡有兩層，要存到最後一個 data
        })
    },
    changeCart () {
      this.$router.push('/cart')
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
