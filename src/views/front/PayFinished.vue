<template>
  <CartStep :step="stepNum"/>
  <div class="container">
    <div class="row justify-content-center pt-5 pb-8">
      <div class="col-8 text-center">
        <span class="d-block">
          <i class="bi bi-check-circle-fill fs-1 text-accent"></i>
        </span>
        <p class="fs-3 mt-1">付款完成</p>
        <p class="fs-5 fs-lg-6 mt-1">感謝您的訂購<br>請於匯款完成後主動聯繫服務人員</p>
        <div class="mt-3">
          <RouterLink to="/" class="btn btn-sm btn-outline-dark rounded-0 me-2  me-lg-4 p-lg-1" type="button">返回首頁</RouterLink>
          <RouterLink to="/products" class="btn btn-sm btn-outline-accent rounded-0 p-lg-1" type="button">繼續買</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartStep from '@/components/CartStep.vue'

export default {
  data () {
    return {
      stepNum: 0
    }
  },
  components: {
    CartStep
  },
  mounted () {
    this.stepNum = 3
  }
}
</script>
