<template>
  <main>
    <BannerView></BannerView>
      <!-- <section class="py-3 py-md-5 pos-relative h-9 h-md-11.25 bg-secondary opacity-50">
        <p class="fs-3 fs-md-m pos-absolute start-md-33 start-16">讓甜點變成你的日常</p>
        <p class="fs-3 fs-md-m pos-absolute top-45 top-md-50 start-md-50 start-33">是我們的初衷 ── </p>
      </section> -->
    <div class="container px-lg-4">
      <section class="pt-9 row">
        <h2 class="mb-4 lh-sm">Products ></h2>
        <div class="col-lg-6 pos-relative mb-2">
          <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
            <img src="https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" class="h-15 h-lg-26 ">
            <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
              <h3 class="text-light">全部商品</h3>
            </div>
             <router-link class="stretched-link z-index-3" to="/products"></router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="row">
            <li class="col-md-6 mb-2">
              <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
                <img src="https://upload.cc/i1/2022/03/27/7pYBPz.png" alt="" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">瑪德蓮</h3>
                </div>
                 <router-link class="stretched-link z-index-3" to="/products?category=madeleine"></router-link>
              </div>
            </li>
            <li class="col-md-6 mb-2">
              <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
                <img src="https://upload.cc/i1/2022/03/27/afgn0W.png" alt="" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">磅蛋糕</h3>
                </div>
                 <router-link class="stretched-link z-index-3" to="/products?category=pound-cake"></router-link>
              </div>
            </li>
            <li class="col-md-6">
              <div class="card card-img-text-hover card__img__hover__scale overflow-hidden">
                <img src="https://upload.cc/i1/2022/03/27/SgMBnr.png" alt="" class="h-15 h-lg-12.5">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center z-index-2">
                  <h3 class="text-light">其他系列</h3>
                </div>
                <router-link class="stretched-link z-index-3" to="/products?category=others"></router-link>
              </div>
            </li>
            <li class="col-md-6 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1543283832-16b392ce8edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="h-15 h-lg-12.5 rounded-2">
            </li>
          </ul>
        </div>
      </section>
    </div>
    <FooterView></FooterView>
  </main>
</template>

<script>
import BannerView from '@/components/BannerView.vue'
import FooterView from '@/components/FooterView.vue'
// import emitter from '@/libs/emitter'
export default {
  components: {
    BannerView,
    FooterView
  }
}
</script>
