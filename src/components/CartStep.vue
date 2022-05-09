<template>
  <div class="d-flex justify-content-center mt-4 text-center">
    <div class="step-border-light px-3 px-md-4 py-2 pos-relative d-flex flex-column align-items-center"
    :class="{'step-border-dark': step > 1}">
      <div class="step border-2 border-secondary border"
      :class="{ 'active' : step > 0}"> 1 </div>
      <p class="mt-1">購買明細</p>
    </div>
    <div class="step-border-light px-3 px-md-4 py-2 pos-relative d-flex flex-column align-items-center"
    :class="{'step-border-dark': step > 2}">
      <div class="step border-2 border-secondary border"
      :class="{'active': step > 1}"> 2 </div>
      <p class="mt-1">確認訂單</p>
    </div>
    <div class="px-3 px-md-4 py-2 d-flex flex-column align-items-center">
      <div class="step border-2 border-secondary border"
      :class="{'active': step > 2}"> 3 </div>
      <p class="mt-1">付款完成</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['step']
}
</script>
