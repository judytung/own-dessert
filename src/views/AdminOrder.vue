<template>
  <div class="container">
    <table class="table mt-3">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <pagination :pages="pagination" @emit-pages="getOrders"></pagination>
</template>

<script>
import pagination from '@/components/paginationView.vue'
export default {
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {}
    }
  },
  components: {
    pagination
  },
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.$http.get(url)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch(err => {
          alert(err.response.message)
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
