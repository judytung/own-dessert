<template>
  <main>
    <BannerView />
    <div class="container px-lg-4 pos-relative">
      <a href="#productView" class="ani-arrow p-0">
        <i class="bi bi-caret-down-fill fs-1"></i>
      </a>
      <section class="pt-9 row" id="productView">
        <h2 class="mb-4 lh-sm">Products ></h2>
        <div class="col-lg-6 pos-relative mb-2">
          <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
            <img src="https://images.unsplash.com/photo-1592343617997-3cf7621f1552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fruit pie-background" class="h-15 h-lg-26 ">
            <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
              <h3 class="text-light">全部商品</h3>
            </div>
            <RouterLink class="stretched-link z-index-3" to="/products"/>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="row">
            <li class="col-md-6 mb-2">
              <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1652077922082.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pdarJuQC%2FGv2cKXTMoyIDYfqDKCVu93o6skVqEQbyObn3SumO4q%2FcMnLzJ3%2F5uYJBw%2BEvSSVZZMpkqnuwc6LNMOxajQJUEJzOPtXIglYJP6kdhvcTrKS061wY4OdPyT8j0QVKmfArHWuEvAYA0cJ0l27rjKPodU91dz7ybhrlo8iKtPeqfdvMQbXWMMx%2FsmlGjPEF9imAvY88Q5yPsSpRKoUQcS73nXH7dhB1iwvIvvztOnjCR7fVI2XjK5d0AlQDkFOFKhoqKI%2FDBF9uQjBbrHTEQDt7lps1pyxMAmXohj6BoZjDX%2FxAXDKrrvLtrb44%2F28BXeHpeLYCDZ%2FLKZImg%3D%3D" alt="madeleine" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">瑪德蓮</h3>
                </div>
                 <RouterLink class="stretched-link z-index-3" to="/products?category=madeleine" />
              </div>
            </li>
            <li class="col-md-6 mb-2">
              <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605466237773-118a8006696e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80" alt="pound-cake" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">磅蛋糕</h3>
                </div>
                <RouterLink class="stretched-link z-index-3" to="/products?category=pound-cake" />
              </div>
            </li>
            <li class="col-md-6">
              <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1649845114747.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dIK7LxNk2uyMs7D9mrg9xMRwJxLoNnA6VYO6ukwPXdxlZwdl74AGOskZ7Ls%2BwELP87HA0ZMpLgB8oWwOxrOweorh4eCUitDfTQSdS6UDrQmH4clIyhksu3kjIXLYtG02Q%2BpD11FtaL%2FzeJcyrJ5Mci%2BOPvpEZEuuTct%2B9%2BiiwPompZ6OlrjO%2B7VfrMmt62WeGweDkDzIIGRAoXJZYIDBf2vL39d9SrFYZsg9cV0vrvmPrbgZM8YjTnSQT%2FwoFNdAunQAQyR5V2%2BPdcb1bIUPQxxbAk31UGrm8KTojxaOfbce3Opy5BfZG9Iht0%2FRf77u%2Fvc1gkASzQlLGH6IFNDZaA%3D%3D" alt="pudding" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">其他系列</h3>
                </div>
                <RouterLink class="stretched-link z-index-3" to="/products?category=others" />
              </div>
            </li>
            <li class="col-md-6 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1543283832-16b392ce8edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="dessert" class="h-15 h-lg-12.5 rounded-2">
            </li>
          </ul>
        </div>
      </section>
      <section class="py-3 py-md-5 pos-relative h-9 h-md-11.25">
        <p class="fs-4 fs-md-2 pos-absolute start-md-33 start-16">讓甜點變成你的日常</p>
        <p class="fs-4 fs-md-2 pos-absolute top-45 top-md-50 start-md-50 start-33">是我們的初衷 ── </p>
      </section>
      <section class="row mt-2 pb-8 mt-md-4">
        <h2 class="mb-4 lh-sm">最新商品 ></h2>
        <Swiper
          :breakpoints="swiperOptions.breakpoints"
          :space-between="10"
          :modules="modules"
          loop
          :autoplay="{ delay: 3000 }"
          class="h-18.75 pt-2">
          <SwiperSlide v-for="img in APIData" :key="img.id">
            <div class="pos-relative">
              <div class="card hvr-bob">
                <img :src="img.imageUrl" :alt="img.title" class="h-12.5">
                <h3 class="fs-6 fw-normal text-center mt-1">{{ img.title }}</h3>
                <a class="stretched-link" @click="routerPush(img.id)"></a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
    <section class="pb-8">
      <div class="pb-8 sub-banner">
        <div class="container pt-5 pt-md-8">
          <div class="row">
            <div class="bg-secondary opacity-75  h-17 pt-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <h3 class="fs-3 text-center">訂閱我們，收到最新通知！</h3>
            <div class="px-5 px-md-8 mt-3 opacity-100">
              <input type="email" class="form-control" placeholder="填入電子郵件" id="emailAddress">
              <button type="button" class="btn btn-accent w-100 mt-3">馬上訂閱</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BannerView from '@/components/BannerView.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

export default {
  data () {
    return {
      modules: [Pagination, Autoplay],
      APIData: [],
      swiperOptions: {
        breakpoints: {
          367: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      }
    }
  },
  components: {
    BannerView,
    Swiper,
    SwiperSlide
  },
  methods: {
    getProducts () {
      this.$emit('loadingStatus', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.$emit('loadingStatus', false)
          this.APIData = res.data.products.slice(0, 4)
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    routerPush (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
