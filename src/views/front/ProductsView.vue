<template>
  <div class="mt-2 pos-relative">
    <div class="d-block d-md-none">
      <img src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="lemon">
    </div>
    <div class="d-none d-md-block">
      <ul class="row g-0">
        <li class="col-md-4">
          <img src="https://images.unsplash.com/photo-1587486937303-32eaa2134b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80" alt="lemon" class="h-10 h-lg-17 float-end">
        </li>
        <li class="col-md-2">
        </li>
        <li class="col-md-3">
          <img src="https://images.unsplash.com/photo-1587486937407-34f64d78e270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="chocolate" class="h-10 h-lg-17 ">
        </li>
        <li class="col-md-3">
        </li>
        <li class="col-md-4">
        </li>
        <li class="col-md-3">
          <img src="https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="coffee bean" class="h-10 h-lg-17 ">
        </li>
        <li class="col-md-1">
        </li>
        <li class="col-md-4">
          <img src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="egg" class="h-10 h-lg-17">
        </li>
      </ul>
    </div>
  </div>
  <div class="container mt-md-4 mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-5">
        <li class="breadcrumb-item" active-calss="active" aria-current="page">
          <router-link to="/products" @click="getProducts">全部商品</router-link>
        </li>
        <li class="breadcrumb-item">
          <a type="button" class="ps-2 pe-1" @click="getProducts('madeleine')">瑪德蓮</a>
        </li>
        <li class="breadcrumb-item">
          <a type="button" class="ps-2 pe-1" @click="getProducts('pound-cake')">磅蛋糕</a>
        </li>
        <li class="breadcrumb-item">
          <a type="button" class="ps-2 pe-1" @click="getProducts('others')">其他</a>
        </li>
      </ol>
    </nav>
  </div>
  <router-view></router-view>
  <div class="container mt-1">
    <ul class="row">
      <li class="col-md-4 px-lg-11 p-md-2" v-for="product in products" :key="product.id">
        <CardView :product="product" ref="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardView from '@/components/CardView.vue'

export default {
  components: {
    CardView
  },
  data () {
    return {
      products: []
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
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
