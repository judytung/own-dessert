<template>
  <div class="mt-1 mt-md-2">
    <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    loop
    :autoplay="{ delay: 4000 }"
    :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/judyhexschoolforvue/1649844087253.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kTlZ71iLqd6vTtA9vKue2lBi%2Ft5Hjz1HRg0TaxOneYBSOTFo%2BokiPfRB0kuxGmXuHuUJMoV1pQ0OLnj5OLk7wkAUqlQONu7kkvNmH7zEyHrgmSvErF8k3d4p4zAdqi%2Bj06r7pdMubs64Ftyp7U3l1CFwHngdCk5A88sq2VY4EG1kUfaM71wfz8corAs33tAFhaYF8RoxC0U%2BbnUAUzNOUviBf45%2B%2BSpLL17Uo5IJeoXGCpJKRLVqf7FegN06AAnHnmmq%2FCO%2Fe2z9oGR6%2FGHU50WS6ohlbf3LrGEFn0y14u8BNNtm7G798C79XnyLlbVt1QO53w8yfmi8Zv3qrvza1Q%3D%3D" alt="lemon pound cake"  class="h-31.25 h-md-36.25 img-fluid  w-100">
        <div class="pos-absolute start-50 translate-middle bottom-16">
          <RouterLink type="button" class="btn btn-dark px-4 py-2 hvr-pulse" to="/products">前往購買</RouterLink>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="berry pie"  class="h-31.25 h-md-36.25 img-fluid w-100">
        <div class="pos-absolute start-50 translate-middle bottom-16">
          <RouterLink type="button" class="btn btn-dark px-4 py-2 hvr-pulse" to="/products">前往購買</RouterLink>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1612886621865-47cd0e961fac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="brownie" class="h-31.25 h-md-36.25 img-fluid w-100">
        <div class="pos-absolute start-50 translate-middle bottom-16">
          <RouterLink type="button" class="btn btn-dark px-4 py-2 hvr-pulse" to="/products">前往購買</RouterLink>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1498588747262-0f2241707d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="fig&orrange" class="h-31.25 h-md-36.25 img-fluid w-100">
        <div class="pos-absolute start-50 translate-middle bottom-16">
          <RouterLink type="button" class="btn btn-dark px-4 py-2 hvr-pulse" to="/products">前往購買</RouterLink>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

export default {
  data () {
    return {
      modules: [Pagination, Autoplay]
    }
  },
  components: {
    Swiper, SwiperSlide
  }
}
</script>
