<template>
  <div class="container">
    <header class="d-flex justify-content-between align-items-end">
      <div class="d-none d-lg-block">
        <ul class="d-flex">
          <li class="px-4">
            <router-link class="" to="/products">甜點</router-link>
          </li>
          <li class="px-4">
            <router-link class="" to="/about">關於我們</router-link>
          </li>
          <li class="px-4">
            <router-link class="" to="/contact">聯絡我們</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h1>
            <router-link class="logo navbar-brand d-inline-block" to="/">Own Dessert</router-link>
        </h1>
      </div>
      <div class="d-none d-lg-block">
        <ul class="d-flex">
          <li class="px-4">
            <router-link class="" to="/shoppingnotice">購物說明</router-link>
          </li>
          <li class="px-4">
            <router-link class="pos-relative  border-0" @click="changeCart" to="/cart">
              <i class="bi bi-cart2 fs-3"></i>
              <span class="badge rounded-pill bg-danger pos-absolute start-50 ">{{  }}</span>
            </router-link>
          </li>
          <li class="px-4">
            <router-link to="/admin/products">
              <i class="bi bi-person-fill fs-3"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <a class="d-md-block d-lg-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i class="bi bi-list fs-4"></i>
      </a>
    </header>
    <div class="collapse d-lg-none" id="collapseExample">
      <ul class="d-flex row text-center">
        <li class="border border-dark py-2 m-1 col-6">甜點</li>
        <li class="border border-dark py-2 m-1 col-6">關於我們</li>
        <li class="border border-dark py-2 m-1 col-6">聯絡我們</li>
        <li class="border border-dark py-2 m-1 col-6">購物說明</li>
      </ul>
    </div>
  </div>
</template>
