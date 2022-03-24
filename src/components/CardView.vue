<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-4 col-md-12">
        <img :src="product.imageUrl" class="img-fluid h-lg-17 h-md-13 h-9" :alt="product.title">
      </div>
      <div class="col-8 col-md-12">
        <div class="card-body p-md-0  h-100 d-flex flex-column justify-content-between">
          <h3 class="card-title fs-4 fw-normal mt-2 mt-md-ms">{{ product.title }}</h3>
          <div class="button-group d-flex justify-content-between">
            <select class="form-select rounded-0 w-33 me-2">
              <option v-for="num in 30" :key="`${num}-${product.id}`">{{ num }}</option>
            </select>
            <button type="button" class="btn btn-outline-dark rounded-0 w-lg-50">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="card d-flex">
    <img :src="product.imageUrl" class="card-img-top h-lg-17 h-md-13" :alt="product.title">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> -->
</template>

<script>
export default {
  props: ['product']
}
</script>
