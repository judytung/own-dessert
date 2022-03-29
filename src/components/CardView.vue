<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-4 col-md-12 pos-relative">
        <img :src="product.imageUrl" class="img-fluid h-lg-17 h-md-13 h-9" :alt="product.title">
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
    <a class="stretched-link btn" type="button" @click="getProduct(product.id)">查看更多</a>
  </div>
</template>

<script>
// import emitter from '@/libs/emitter'
export default {
  props: ['product'],
  data () {
    return {
      qty: 1
    }
  },
  methods: {
    addToCart (id) {
      const data = {
        product_id: id,
        qty: this.qty
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data })
        .then(res => {
          alert(res.data.message)
          this.qty = 1
        })
        .catch(err => {
          console.dir(err)
          alert(err.response.data.message)
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
  }
}
</script>
