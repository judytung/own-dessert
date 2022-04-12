<template>
  <div class="mt-5">
    <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    loop
    :autoplay="{ delay: 5000 }"
    :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="berry pie"  class="h-31.25 h-md-36.25 img-fluid object-fit-cover w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="macaron" class="h-31.25 h-md-36.25 img-fluid object-fit-cover w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1612886621865-47cd0e961fac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="brownie" class="h-31.25 h-md-36.25 img-fluid object-fit-cover w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1498588747262-0f2241707d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="fig&orrange" class="h-31.25 h-md-36.25 img-fluid object-fit-cover w-100">
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
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
      modules: [Pagination, Autoplay]
    }
  },
  components: {
    Swiper, SwiperSlide
  }
}
</script>
