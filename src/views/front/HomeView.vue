<template>
  <main>
    <BannerView></BannerView>
    <div class="container px-lg-4 pos-relative">
      <a href="#" class="ani-arrow">
        <i class="bi bi-caret-down-fill fs-1"></i>
      </a>
      <section class="pt-9 row">
        <h2 class="mb-4 lh-sm">Products ></h2>
        <div class="col-lg-6 pos-relative mb-2">
          <div class="card card-img-text-hover-2 card__img__hover__scale overflow-hidden">
            <img src="https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="macaron-background" class="h-15 h-lg-26 ">
            <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
              <h3 class="text-light">全部商品</h3>
            </div>
            <RouterLink class="stretched-link z-index-3" to="/products"></RouterLink>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="row">
            <li class="col-md-6 mb-2">
              <div class="card card-img-text-hover-2 card__img__hover__scale overflow-hidden">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1649844650822.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BQeTam6icetzqdF1HmlyBi0f%2F6VP459KWDarVrL9yJ1JTdTVjmbqEIpoxiqX12jmO0knaAPm47vVGroL%2BQcH%2Fgpqeddy4i6LjuqeT2E49GSTGC83JWjpCTy9NcptzS%2FZpRTzpLm18Px%2BTdnkit3uQ9EuhraT7ML3qMAh%2BQrP2hlnzvBKgNq7bBTQ%2FKm0eFH1e%2B5Ud1ixEustbGkzr6Zoj43B4DUgrsM5fOFCKmTQzwXl9luRB44N69TxAbWXWQZ4VhpSTy6XM1dwgJ1TJRKKEvR3%2BvQXsbTulQC%2FruSmNkdYMf%2BvIzYSqiA0yhdAJYgbC7BTHYtXHHMJqe%2F6UknRVg%3D%3D" alt="madeleine" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">瑪德蓮</h3>
                </div>
                 <RouterLink class="stretched-link z-index-3" to="/products?category=madeleine"></RouterLink>
              </div>
            </li>
            <li class="col-md-6 mb-2">
              <div class="card card-img-text-hover-2 card__img__hover__scale overflow-hidden">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1649844959338.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oCZp2waWpsaXHkOloEX%2FRgfC9IMm5F%2Ba%2BqIY8Gs5CUaK2oMyjrcxQetwJEcydP%2BFzmtcQGSsxfZtEKANoGg2QCVaYsXNPXiB%2BOY2amRhQKH2XfB7MHBXbAIhqnirZ5KM%2BrosBWEhi02W3kp5hhWKUruCQrC6yXdSDfveD3a2PRZql7BslQMhjRT6GypVZGinw1PKSdnjLaI8hqW677Pn6%2FpDVxiu5uvLe4TNt9oClcgtCjnHMeO7ixCPwLRpp6WvbCjgascuz4Jgg2OrPWurL%2BCShyWfGxDb3IHNfvCkKzFRgAsoziJhmrXrqzxmbBlPZ2A0WHrrBr4envamd2GLZg%3D%3D" alt="pound-cake" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">磅蛋糕</h3>
                </div>
                <RouterLink class="stretched-link z-index-3" to="/products?category=pound-cake"></RouterLink>
              </div>
            </li>
            <li class="col-md-6">
              <div class="card card-img-text-hover-2 card__img__hover__scale overflow-hidden">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1649845114747.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dIK7LxNk2uyMs7D9mrg9xMRwJxLoNnA6VYO6ukwPXdxlZwdl74AGOskZ7Ls%2BwELP87HA0ZMpLgB8oWwOxrOweorh4eCUitDfTQSdS6UDrQmH4clIyhksu3kjIXLYtG02Q%2BpD11FtaL%2FzeJcyrJ5Mci%2BOPvpEZEuuTct%2B9%2BiiwPompZ6OlrjO%2B7VfrMmt62WeGweDkDzIIGRAoXJZYIDBf2vL39d9SrFYZsg9cV0vrvmPrbgZM8YjTnSQT%2FwoFNdAunQAQyR5V2%2BPdcb1bIUPQxxbAk31UGrm8KTojxaOfbce3Opy5BfZG9Iht0%2FRf77u%2Fvc1gkASzQlLGH6IFNDZaA%3D%3D" alt="pudding" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">其他系列</h3>
                </div>
                <RouterLink class="stretched-link z-index-3" to="/products?category=others"></RouterLink>
              </div>
            </li>
            <li class="col-md-6 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1543283832-16b392ce8edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="h-15 h-lg-12.5 rounded-2">
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
    <section class="sub-banner pt-5 pt-md-8">
      <div class="bg-secondary opacity-75 my-0 mx-5 h-17 pt-4">
        <h3 class="fs-3 text-center">訂閱我們，收到最新通知！</h3>
        <div class="px-5 px-md-8 mt-3 opacity-100">
          <input type="email" class="form-control" placeholder="填入電子郵件" id="emailAddress">
          <button type="button" class="btn btn-accent w-100 mt-3">馬上訂閱</button>
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
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.APIData = res.data.products.slice(0, 4)
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
    this.getProducts()
  }
}
</script>
