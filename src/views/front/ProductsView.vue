<template>
  <div class="mt-5 pos-relative">
    <div class="row g-0">
      <div class="col-lg-6 d-inline-block">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1649843727209.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nr7bF5ri%2B4ROFf5%2FYFMB%2BlWzrf2vrMC6qxnhGgP%2BhiCm78D22hLcRXXIKhyP1SuMXJikxROxRjqmE%2FB7Sb81lmK84F3GklGToyuIXsuW9wOA62%2FktSBfUQ4C9HHLuugdqGvidLrmOXdfS8Oj2HqAbKIwZv2XajE6YUvdxeeBfqOEpRTLRlVV5THYbTo%2BVKs9ugXORJVbPC9WSRGfU7naTv7gFMypGO3xEFWtq0mO7v3RWe6PfvPvUroxWlnJzgziu5eB9x6QwTmCsKwLNIgv9t%2Bb%2FsHO8e5HX9eG0UoCnkoVfOnrcGUt%2BDN9qlr5ZcSKsNwJL5Qp33qODNzD%2F3Xz2w%3D%3D"
          alt="a slice of pound cake"
          class="h-lg-25 h-18.75 opacity-lg-100 opacity-65 w-100"
        />
      </div>
      <div class="col-lg-4 offset-lg-1 pos-absolute top-45 start-lg-50">
        <div class="border border-light border-lg-dark mx-2 mx-md-4 p-s">
          <h2
            class="
              fs-m
              border border-light border-lg-dark border-3
              text-center text-light text-lg-dark fw-light
            "
          >
            甜點
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-md-7 mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-5">
        <li class="breadcrumb-item" active-calss="active" aria-current="page">
          <router-link to="/products" @click="getProducts()">全部商品</router-link>
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
        <CardView :product="product" ref="card"></CardView>
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
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      if (category || this.$route.query.category) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category || this.$route.query.category}`
      }
      this.$http.get(url)
        .then(res => {
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
