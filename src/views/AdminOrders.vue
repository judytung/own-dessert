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
            <td>{{ $filters.date(item.create_at) }}</td>
            <td>
              <span v-if="item.user" v-text="item.user.email"></span>
            </td>
            <td>
              <ul>
                <li v-for="(product, index) in item.products" :key="index">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td>
              {{ Math.round(item.total) }}
            </td>
            <td>
              <div class="form-check form-switch">
                <input type="checkbox"
                class="form-check-input"
                :id="`switch${item.id}`"
                v-model="item.is_paid">
                <label class="form-check-label" :for="`switch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
              <button
                class="btn btn-accent btn-sm"
                type="button"
                @click="openOrderModal('edit', item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openOrderModal('remove', item)"
              >
                刪除
              </button>
            </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
    <RemoveModal
    :item="tempOrder"
    ref="removemodal"
    @del-item="removeOrder"
    ></RemoveModal>
    <pagination :pages="pagination" @emit-pages="getOrders"></pagination>
  </div>
</template>

<script>
import pagination from '@/components/paginationView.vue'
import OrderModal from '@/components/OrderModal.vue'
import RemoveModal from '@/components/RemoveModal.vue'
export default {
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {},
      isNew: false
    }
  },
  components: {
    pagination,
    OrderModal,
    RemoveModal
  },
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.$http.get(url)
        .then(res => {
          this.orders = res.data.orders
          console.log(this.orders)
          this.pagination = res.data.pagination
        })
        .catch(err => {
          alert(err.response.message)
        })
    },
    openOrderModal (status, item) {
      const orderModal = this.$refs.orderModal
      const removemodal = this.$refs.removemodal
      if (status === 'edit') {
        this.tempOrder = { ...item }
        orderModal.showModal()
        this.isNew = false
      } else if (status === 'remove') {
        removemodal.showModal()
        this.tempOrder = { ...item }
      }
    },
    updatePaid (item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(url, { data: paid })
        .then(res => {
          const orderModal = this.$refs.orderModal
          alert(res.data.message)
          this.getOrders()
          orderModal.hideModal()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    removeOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then(res => {
          const removemodal = this.$refs.removemodal
          removemodal.hideModal()
          this.getOrders()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
