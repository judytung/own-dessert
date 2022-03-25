<template>
  <main>
    <BannerView></BannerView>
      <section class="py-5 pos-relative h-11.25 bg-secondary opacity-50">
        <p class="fs-3 fs-md-m pos-absolute start-md-33 start-16">讓甜點變成你的日常</p>
        <p class="fs-3 fs-md-m pos-absolute top-50 start-md-50 start-33">是我們的初衷 ── </p>
      </section>
    <section class="pt-4">
    </section>
    <FooterView></FooterView>
  </main>
</template>

<style>
  .home-product-bg {
    background-image: url(https://upload.cc/i1/2022/03/26/GrEyqp.png);
    background-size: cover;
    background-repeat: no-repeat;
    height:500px;
  }
</style>

<script>
import BannerView from '@/components/BannerView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: {
    BannerView,
    FooterView
  }
}
</script>
