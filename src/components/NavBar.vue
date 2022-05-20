<template>
  <div class="container overflow-hidden">
    <header class="d-flex justify-content-between align-items-end pos-relative">
      <div class="d-none d-lg-block">
        <ul class="d-flex">
          <li class="px-4">
            <RouterLink  class="nav-hover" to="/products">甜點</RouterLink>
          </li>
          <li class="px-4">
            <RouterLink class="nav-hover" to="/about">關於我們</RouterLink>
          </li>
          <li class="px-4">
            <RouterLink class="nav-hover" to="/contact">聯絡我們</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h1>
          <RouterLink class="logo navbar-brand d-inline-block me-0 mt-1 ms-3 ms-md-0" to="/"
            >Own Dessert</RouterLink
          >
        </h1>
      </div>
      <div class="d-none d-lg-block">
        <ul class="d-flex align-items-end">
          <li class="px-4">
            <RouterLink class="nav-hover" to="/shoppingnotice"
              >購物說明</RouterLink
            >
          </li>
          <li class="px-4">
            <RouterLink
              class="pos-relative border-0 hvr-bob"
              to="/cart"
            >
              <i class="bi bi-cart2 fs-3"></i>
              <span
                v-if="cartNum > 0"
                class="
                  badge
                  rounded-pill
                  bg-accent
                  pos-absolute
                  start-50
                  opacity-90
                "
                >{{ cartNum }}</span
              >
            </RouterLink>
          </li>
          <li class="px-4">
            <a class="hvr-bob pos-relative">
              <i class="bi bi-heart-fill fs-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
              </i>
              <span
                v-if="favoriteData.length > 0"
                class="
                  badge
                  rounded-pill
                  bg-accent
                  pos-absolute
                  start-50
                  opacity-90">
                {{ favoriteData.length }}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        ref="offcanvas"
        >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">我的收藏</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <table class="table align-middle" v-if="favoriteData.length > 0">
            <thead>
              <tr>
                <th>商品</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filterFavorite" :key="item.id">
                <td>
                  <div :style="{ backgroundImage: `url(${item.imageUrl})` }" class="h-6.25 background-size-cover background-position-center"></div>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.price }}元 / {{ item.unit }}</td>
                <td>
                  <button type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="delFavorite(item.id)"
                    :disabled="isLoadingItem === item.id">
                    x
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="text-center">
            <p class="mb-4">目前沒有收藏商品</p>
            <button to="/products" type="button" class="btn btn-accent p-2" @click="toProducts" data-bs-dismiss="offcanvas">快看看有沒有喜歡的</button>
          </div>
        </div>
      </div>
      <div class="d-md-block d-lg-none">
        <div class="d-flex">
          <ul class="d-flex">
            <li class="px-2">
              <RouterLink
                class="pos-relative border-0 hvr-bob"
                to="/cart"
              >
                <i class="bi bi-cart2 fs-3"></i>
                <span
                  v-if="cartNum > 0"
                  class="
                    badge
                    rounded-pill
                    bg-accent
                    pos-absolute
                    start-50
                    opacity-90
                  "
                  >{{ cartNum }}</span
                >
              </RouterLink>
            </li>
            <li class="px-2">
              <a class="pos-relative">
                <i class="bi bi-heart-fill fs-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight">
                </i>
                <span
                  v-if="favoriteData.length > 0"
                  class="
                    badge
                    rounded-pill
                    bg-accent
                    pos-absolute
                    start-50
                    opacity-90">
                  {{ favoriteData.length }}
                </span>
              </a>
            </li>
          </ul>
          <a
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            class="d-block"
            @click="isShow = true"
          >
            <i class="bi bi-list fs-4"></i>
          </a>
        </div>
      </div>
    </header>
    <div
      class="
        nav-collapse
        collapse
        d-lg-none
        z-index-5
        pos-absolute
        start-0
        w-100
        bg-primary
        overflow-hidden
      "
      @click="isShow = false"
      :class="{show:isShow}"
      id="collapseExample"
    >
      <ul class="row text-center m-s justify-content-between g-1 pb-5">
        <li class="col-6 p-s border border-dark border-2 w-49 nav-bg-hover">
          <RouterLink class="border border-dark py-2 hover-bg-white" to="/products"
            >甜點</RouterLink
          >
        </li>
        <li class="col-6 p-s border border-dark border-2 w-49 nav-bg-hover">
          <RouterLink class="border border-dark py-2 hover-bg-white" to="/about"
            >關於我們</RouterLink
          >
        </li>
        <li class="col-6 p-s border border-dark border-2 w-49 nav-bg-hover">
          <RouterLink class="border border-dark py-2 hover-bg-white" to="/contact"
            >聯絡我們</RouterLink
          >
        </li>
        <li class="col-6 p-s border border-dark border-2 w-49 nav-bg-hover">
          <RouterLink class="border border-dark py-2 hover-bg-white" to="/shoppingnotice"
            >購物說明</RouterLink
          >
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
      cartNum: 0,
      favNum: 0,
      isShow: false,
      products: [],
      favoriteData: [],
      isVisible: false
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartNum = res.data.data.carts.length
        })
        .catch(function (err) {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    getFavorite () {
      this.favoriteData = JSON.parse(localStorage.getItem('favorite')) || '[]'
    },
    toProducts () {
      this.$router.push('/products')
      this.isVisible = !this.isVisible
    },
    delFavorite (id) {
      const favoriteIndex = this.favoriteData.findIndex(item => item === id)
      this.favoriteData.splice(favoriteIndex, 1)
    }
  },
  computed: {
    filterFavorite () {
      return this.products.filter((item) => this.favoriteData.includes(item.id))
    }
  },
  watch: {
    favoriteData: {
      handler () {
        localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
      },
      deep: true
    }
  },
  mounted () {
    emitter.on('push-cart-num', (num) => {
      this.cartNum = num
    })
    emitter.on('push-num', (num) => {
      this.cartNum = num
    })
    emitter.on('push-product-num', (num) => {
      this.cartNum = num
    })
    emitter.on('clear-cart', (num) => {
      this.cartNum = num
    })
    emitter.on('favoriteData', (data) => {
      this.favoriteData = data
    })
    emitter.on('favoriteProduct', (data) => {
      this.favoriteData = data
    })
    this.getCart()
    this.getProducts()
    this.getFavorite()
  }
}

</script>
