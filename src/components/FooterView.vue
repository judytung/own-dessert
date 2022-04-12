<template>
  <div class="container">
    <div class="mt-13 mb-md-8 mb-5">
      <footer class="pos-relative ">
        <h2 class="footer-title pos-absolute end-lg-43 end-md-38 end-32">Own Dessert</h2>
        <div class="footer-body row justify-content-md-between ">
          <ul class="col-6 footer-item d-md-flex justify-content-center">
            <li class="px-ms">
              <router-link to="/products" class="nav-hover">商品列表</router-link>
            </li>
            <li class="px-ms">
              <router-link to="/contact" class="nav-hover">聯絡我們</router-link>
            </li>
            <li class="px-ms">
              <router-link to="/cart" class="nav-hover">購物車</router-link>
            </li>
          </ul>
          <ul class="col-6 footer-item d-md-flex justify-content-center">
            <li class="me-md-ms">
              <a href="#" class="btn btn-outline-dark rounded-0" type="button">Instagram</a>
            </li>
            <li class="ms-md-ms mt-2 mt-md-0">
              <a href="#" class="btn btn-outline-dark rounded-0" type="button">Facebook</a>
            </li>
          </ul>
          <div class="col-6 footer-item d-md-flex justify-content-center">
            <p class="fs-5 mt-2 mt-md-0">Copyright © 2022</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
