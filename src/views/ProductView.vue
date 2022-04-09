<template>
  <div class="container pt-8 py-md-11 ">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.imageUrl" class="h-18.75 h-md-25 w-100 w-lg-75" :alt="product.title">
      </div>
      <div class="col-md-6 mt-3 mt-md-0 px-2 px-md-0">
        <h2 class="mb-2">{{ product.title }}</h2>
        <div class="fs-4" v-if="product.origin_price === product.price">{{ product.origin_price }} 元 / {{ product.unit }} </div>
        <div v-else>
          <del class="fs-5">原價 {{ product.origin_price }} 元</del>
          <div class="fs-4">現在只要 {{ product.price }} 元</div>
        </div>
        <div class="mt-2 mt-md-4 ">
          {{ product.description}}
        </div>
        <div class="button-group d-flex justify-content-md-between  mt-6">
          <select class="form-select rounded-0 w-33 me-2" v-model.number="qty">
            <option v-for="num in 30" :key="`${num}-${product.id}`">{{ num }}</option>
          </select>
          <button type="button" class="btn btn-outline-dark rounded-0 w-lg-50" @click="addToCart(product.id)">加入購物車</button>
        </div>
      </div>
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
      },
      id: '',
      product: {},
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product
          }
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: this.qty
      }
      const productNow = this.cartData.carts.filter(item => {
        return item.product_id === id
      })
      console.log(productNow[0])
      if (productNow.length > 0 && productNow[0].qty + this.qty > 30) {
        alert('最多只能購買30個喔！')
        data.qty = 30 - productNow[0].qty
      }
      console.log(data)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data })
        .then(res => {
          alert(res.data.message)
          this.getCart()
          this.qty = 1
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartData = res.data.data // data 裡有兩層，要存到最後一個 data
          // console.log(res.data.data.carts.length)
          emitter.emit('push-product-num', this.cartData.carts.length)
        })
        .catch(function (err) {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getCart()
    this.getProduct()
  }
}
</script>
