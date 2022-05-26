<template>
  <div class="mt-4 mb-8 bg-accent">
    <div class="container">
      <ul class="d-flex justify-content-md-evenly text-center flex-wrap">
        <li class="px-0 py-1 w-50 w-md-16 hvr-underline-from-left" active-calss="active" aria-current="page">
            <RouterLink to="/products"
              @click="getProducts()"
              class="px-2 py-ms text-light">
              <span class="productNav-icon-1 d-inline-block align-bottom"></span>
              全部
            </RouterLink>
        </li>
        <li class="px-0 py-1 w-50 w-md-16 hvr-underline-from-left">
          <a type="button"
            class="px-2 py-ms text-light rounded-0"
            @click="getProducts('madeleine')">
            <span class="productNav-icon-2 d-inline-block align-bottom"></span>
            瑪德蓮
          </a>
        </li>
        <li class="px-0 py-1 w-50 w-md-16 hvr-underline-from-left">
          <a type="button"
            class="px-2 py-ms text-light rounded-0"
            @click="getProducts('pound-cake')">
            <span class="productNav-icon-3 d-inline-block align-bottom"></span>
            磅蛋糕
          </a>
        </li>
        <li class="px-0 py-1 w-50 w-md-16 hvr-underline-from-left">
          <a type="button"
            class="px-2 py-ms text-light rounded-0"
            @click="getProducts('others')">
            <span class="productNav-icon-4 d-inline-block align-bottom"></span>
            其他
          </a>
        </li>
      </ul>
    </div>
  </div>
  <RouterView />
  <div class="container mt-1 pb-4 pb-md-8 overflow-hidden">
    <ul class="row gx-lg-18 px-lg-7">
      <li class="col-md-4" v-for="product in products" :key="product.id">
        <CardView
        :product="product"
        :isFavorite="favoriteData"
        @favoriteItem="toggleFavorite"
        ref="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardView from '@/components/CardView.vue'
import emitter from '@/libs/emitter'

export default {
  components: {
    CardView
  },
  data () {
    return {
      products: [],
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      isFavorite: ''
    }
  },
  methods: {
    getProducts (category) {
      this.$emit('loadingStatus', true)
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      if (category || this.$route.query.category) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category || this.$route.query.category}`
      }
      this.$http.get(url)
        .then(res => {
          this.$emit('loadingStatus', false)
          this.products = res.data.products
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    toggleFavorite (id) {
      const favoriteIndex = this.favoriteData.findIndex(item => item === id)
      if (favoriteIndex === -1) {
        this.favoriteData.push(id)
      } else {
        this.favoriteData.splice(favoriteIndex, 1)
      }
    }
  },
  watch: {
    favoriteData: {
      handler () {
        localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
        emitter.emit('favoriteData', this.favoriteData)
      },
      deep: true
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
