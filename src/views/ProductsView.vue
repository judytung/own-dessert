<template>
<div class="mt-5 pos-relative">
  <div class="row g-0">
    <div class="col-lg-6 d-inline-block">
      <img src="https://upload.cc/i1/2022/03/23/tXEN1L.png" alt="" class="h-lg-25 h-18.75 opacity-lg-100 opacity-65 w-100">
    </div>
    <div class="col-lg-4 offset-lg-1 pos-absolute top-50 start-lg-50">
      <div class="border border-light border-lg-dark mx-2  mx-md-4 p-s">
         <h2 class="fs-m border border-light border-lg-dark border-3 text-center text-light text-lg-dark">甜點</h2>
      </div>
    </div>
  </div>
</div>
<div class="container mt-md-5 mt-3">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" active-calss="active"  aria-current="page"><router-link to="/products">全部商品</router-link></li>
      <li class="breadcrumb-item"><router-link class="ps-2 pe-1" to="/products/madeleine">瑪德蓮</router-link></li>
      <li class="breadcrumb-item "><router-link class="ps-2 pe-1" to="/products/poundcake">磅蛋糕</router-link></li>
    </ol>
  </nav>
</div>
<router-view></router-view>
</template>
