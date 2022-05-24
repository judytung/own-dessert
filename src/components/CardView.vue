<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-4 col-md-12 pos-relative">
        <div class="card-img-text-hover card__img__hover__scale overflow-hidden">
          <img
            :src="product.imageUrl"
            class="img-fluid h-lg-17 h-md-13 h-9 ratio ratio-1x1"
            :alt="product.title">
          <a class="stretched-link z-index-4" type="button" @click="getProduct(product.id)"></a>
        </div>
      </div>
      <div class="col-8 col-md-12">
        <div class="card-body p-md-0  h-100 d-flex flex-column justify-content-between">
          <div class="d-lg-flex  mt-md-1 align-items-center">
            <h3 class="card-title fs-4 fw-normal me-2 fw-light">{{ product.title }}</h3>
            <p class="w-33">{{product.price}} / {{product.unit}}</p>
          </div>
          <div class="button-group d-flex justify-content-between mt-md-1">
            <button
              type="button"
              class="btn border-0"
              @click="addToCart(product.id)"
            >
              <i class="bi bi-cart2 fs-3 hvr-bob d-flex align-items-end"></i>
            </button>
            <button
              type="button"
              class="btn border-0"
              @click="$emit('favoriteItem',product.id)"
              >
              <i class="bi bi-heart-fill fs-3 d-flex align-items-end"
                 v-if="isFavorite.includes(product.id)"></i>
              <i class="bi bi-heart fs-3 d-flex align-items-end" v-else></i>
            </button>
            <button type="button"
              class="btn btn-outline-dark rounded-0 w-lg-30 py-s px-m"
              @click="getProduct(product.id)">
              查看更多
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  props: ['product', 'isFavorite'],
  data () {
    return {
      cartData: {
        carts: []
      },
      isLoadingItem: '',
      qty: 1
    }
  },
  emits: ['favoriteItem'],
  methods: {
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty: qty
      }
      this.isLoadingItem = id
      const productNow = this.cartData.carts.filter(item => {
        return item.product_id === id
      })
      if (productNow.length > 0 && productNow[0].qty >= 30) {
        alert('最多只能購買 30 個喔！')
        this.isLoadingItem = ''
        return
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data })
        .then(res => {
          this.$httpMessageState(res, '加入購物車')
          this.qty = 1
          this.getCart()
          this.isLoadingItem = ''
        })
        .catch(err => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartData = res.data.data
          emitter.emit('push-num', this.cartData.carts.length)
        })
        .catch(function (err) {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>
