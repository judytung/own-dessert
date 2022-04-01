<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-4 col-md-12 pos-relative">
        <div class="card-img-text-hover card__img__hover__scale overflow-hidden">
          <img :src="product.imageUrl" class="img-fluid h-lg-17 h-md-13 h-9 " :alt="product.title">
          <a class="stretched-link z-index-4" type="button" @click="getProduct(product.id)"></a>
        </div>
      </div>
      <div class="col-8 col-md-12">
        <div class="card-body p-md-0  h-100 d-flex flex-column justify-content-between">
          <div class="d-lg-flex mt-2 mt-md-1 align-items-center">
            <h3 class="card-title fs-4 fw-normal me-2 fw-light">{{ product.title }}</h3>
            <p class="w-33">{{product.price}} / {{product.unit}}</p>
          </div>
          <div class="button-group d-flex justify-content-between mt-md-2">
            <select class="form-select rounded-0 w-33 me-2" v-model.number="qty">
              <option v-for="num in 30" :key="`${num}-${product.id}`">{{ num }}</option>
            </select>
            <button type="button" class="btn btn-outline-dark rounded-0 w-lg-50" @click="addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import emitter from '@/libs/emitter'
export default {
  props: ['product'],
  data () {
    return {
      cartData: {
        carts: []
      },
      qty: 1
    }
  },
  methods: {
    addToCart (id) {
      const data = {
        product_id: id,
        qty: this.qty
      }
      const productNow = this.cartData.carts.filter(p => {
        console.log(p)
        return p.product_id === id
      })
      console.log(productNow[0])
      console.log(this.qty)
      if (productNow.length > 0 && productNow[0].qty + this.qty > 30) {
        alert('最多只能購買30個喔！')
        this.qty = 30
      }
      console.log(this.qty)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data })
        .then(res => {
          alert(res.data.message)
          this.qty = 1
          this.getCart()
        })
        .catch(err => {
          console.dir(err)
          alert(err.response.data.message)
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartData = res.data.data // data 裡有兩層，要存到最後一個 data
          this.$emitter.emit('push-num', this.cartData.carts.length)
        })
        .catch(function (err) {
          alert(err.response.data.message)
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
