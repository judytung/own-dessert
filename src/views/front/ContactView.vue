<template>
  <div class="container pt-5 pt-md-8 pb-13">
    <div class="row">
      <div class="col-md-6 order-md-2">
        <div class="pos-relative">
          <div class="h-31.25 bg-secondary w-lg-300p d-none d-lg-block"></div>
          <img src="https://images.unsplash.com/photo-1601205741712-b261aff33a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80" class="h-31.25 pos-lg-absolute end-lg-33 top-lg-16 d-none d-md-block " alt="a dessert shop">
        </div>
      </div>
      <div class="col-md-6 order-lg-2">
        <h2 class="fs-4 text-center">Own-Dessert 手作甜點工作室</h2>
        <div class="border border-dark mt-4 p-2 mt-lg-8">
          <ul>
            <li class="d-flex">
              <i class="bi bi-telephone me-1"></i>
              <span class="me-1"> | </span>
              <a href="tel:0988775563">0988775563</a>
            </li>
            <li class="d-flex">
              <i class="bi bi-envelope me-1"></i>
              <span class="me-1"> | </span>
              <a href="email:ownDessert@dessert.com">ownDessert@dessert.com</a>
            </li>
          </ul>
          <ul class="list-style-square fs-6 ms-2 mt-2">
            <li>客服人員服務時間為早上 10:00 - 晚上 6:00</li>
            <li>選擇面交服務者請主動聯繫服務人員</li>
            <li>購物相關問題請參閱
              <RouterLink to="/shoppingnotice"
                class="d-inline-block text-decoration-underline link-hover-accent">
                購物說明
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
