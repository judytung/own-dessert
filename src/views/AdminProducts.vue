<template>
  <div class="container">
    <div class="mt-3 text-end">
      <button type="button" class="btn btn-outline-secondary">新增產品</button>
    </div>
    <table class="table table-hover mt-3">
      <thead>
        <tr>
          <th>
            編號
          </th>
          <th>
            分類
          </th>
          <th>
            產品名稱
          </th>
          <th>
            原價
          </th>
          <th>
            售價
          </th>
          <th>
            是否啟用
          </th>
          <th>
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{  }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group"></div>
          </td>
        </tr>
      </tbody>
    </table>
    <!--分頁元件-->
    <pagination :pages="pagination" @get-product="getProducts"></pagination>
  </div>
</template>

<script>
// import emitter from '@/libs/emitter'
import pagination from '@/components/paginationView.vue'
export default {
  data () {
    return {
      products: [],
      tempProducts: {
        imagesUrl: [] // 新增多圖使用，使用陣列
      },
      isNew: false,
      pagination: {} // 先定義一個分頁物件
    }
  },
  components: {
    pagination
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.dir(err)
        })
    },
    openModal (status, productItem) {

    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
