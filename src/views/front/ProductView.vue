<template>
  <div class="container pt-8 py-md-8 ">
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
        <div class="mt-4">
          <p>成分：{{ product.composition }}</p>
        </div>
        <div class="button-group d-flex justify-content-md-between  mt-6">
          <select class="form-select rounded-0 w-33 me-2" v-model.number="qty">
            <option v-for="num in 30" :key="`${num}-${product.id}`">{{ num }}</option>
          </select>
          <button type="button" class="btn btn-outline-dark rounded-0 w-lg-50" @click="addToCart(product.id)">加入購物車</button>
        </div>
        <p class="mt-4 text-accent">
          <i class="bi bi-exclamation-octagon"></i>
          宅配有碰損風險，請可接受者再下單唷
        </p>
      </div>
      <div class="mt-10">
        <h3>你可能會喜歡 ></h3>
        <ul class="row mt-4">
          <li v-for="item in recData" :key="item.id" class="col-6 col-md-3 mb-4 mb-md-0">
            <div class="pos-relative">
              <div class="card hvr-bob">
                <img :src="item.imageUrl" :alt="item.title" class="h-15">
                <h3 class="fs-6 fw-normal text-center mt-1">{{ item.title }}</h3>
                <a class="stretched-link" @click="routerPush(item.id)"></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      recData: [],
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
      if (productNow.length > 0 && productNow[0].qty + this.qty > 30) {
        alert('最多只能購買30個喔！')
        data.qty = 30 - productNow[0].qty
      }
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
          this.cartData = res.data.data
          emitter.emit('push-product-num', this.cartData.carts.length)
        })
        .catch(function (err) {
          alert(err.response.data.message)
        })
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          const arr = res.data.products.sort(function () {
            return Math.round(Math.random()) - 0.5
          })
          this.recData = arr.slice(0, 4)
          console.log(this.recData)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    routerPush (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getCart()
    this.getProduct()
    this.getProducts()
  }
}
</script>
