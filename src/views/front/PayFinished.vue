<template>
  <div class="d-flex justify-content-center mt-4">
    <div class="step-border-2 px-3 px-md-4 py-2 pos-relative d-flex flex-column align-items-center">
      <div class="bg-accent text-light step-1 text-center border-2 border-secondary border"> 1 </div>
      <p class="mt-1">購買明細</p>
    </div>
    <div class="step-border-2 px-3 px-md-4 py-2 pos-relative d-flex flex-column align-items-center">
      <div class="bg-accent text-light step-1 text-center border-2 border-secondary border"> 2 </div>
      <p class="mt-1">確認訂單</p>
    </div>
    <div class="px-3 px-md-4 py-2 d-flex flex-column align-items-center">
      <div class="bg-accent text-light step-1 text-center border-2 border-secondary border"> 3 </div>
      <p class="mt-1">付款完成</p>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center pt-5 pb-8">
      <div class="col-8 text-center">
        <span class="d-block">
          <i class="bi bi-check-circle-fill fs-1 text-accent"></i>
        </span>
        <p class="fs-3 mt-1">付款完成</p>
        <p class="fs-5 fs-lg-6 mt-1">感謝您的訂購<br>請於匯款完成後主動聯繫服務人員</p>
        <div class="mt-3">
          <router-link to="/" class="btn btn-sm btn-outline-dark rounded-0 me-2  me-lg-4 p-lg-1" type="button">返回首頁</router-link>
          <router-link to="/products" class="btn btn-sm btn-outline-accent rounded-0 p-lg-1" type="button">繼續買</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
