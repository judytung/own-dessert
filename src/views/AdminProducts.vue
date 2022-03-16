<template>
  <div class="container">
    <!--AdminModal-->
    <AdminModal
    ref="AdminModal"
    :product="tempProduct"
    @update-product="updateProduct"
    :is-new="isNew"
    :pagination="pagination.current_page"
    ></AdminModal>
    <!---->
    <!--RemoveModal-->
    <RemoveModal
    ref="removemodal"
    :temp-product="tempProduct"
    @get-products="getProducts"
    :pagination="pagination.current_page"
    ></RemoveModal>
    <!---->
    <div class="mt-3 text-end">
      <button type="button" class="btn btn-accent" @click="openModal('isNew')">新增產品</button>
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
            價格
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
        <tr v-for="(item, index) in products" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            <div v-if="item.price === item.origin_price">{{ item.price }} 元</div>
            <div v-else>
                <del>原價 {{ item.origin_price }} 元</del>
                <div>特價 {{ item.price }} 元</div>
            </div>
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-accent btn-sm" @click="openModal('edit', item)"> <!--需帶入當前點擊的欄位 item-->
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('remove', item)">
                  刪除
                </button>
            </div>
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
import AdminModal from '@/components/AdminModal.vue'
import RemoveModal from '@/components/RemoveModal.vue'
export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      pagination: {} // 先定義一個分頁物件
    }
  },
  components: {
    pagination,
    AdminModal,
    RemoveModal
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
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    openModal (status, item) {
      const modalcomponent = this.$refs.AdminModal
      const removemodal = this.$refs.removemodal
      if (status === 'isNew') {
        this.tempProduct = {
          imagesUrl: []
        }
        modalcomponent.openModal()
        this.isNew = true
      } else if (status === 'edit') {
        this.tempProduct = { ...item }
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = []
        }
        modalcomponent.openModal()
        this.isNew = false
      } else if (status === 'remove') {
        removemodal.openRemoveModal()
        this.tempProduct = { ...item }
      }
    },
    updateProduct (item) {
      this.tempProduct = item
      let http = 'post'
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      if (!this.isNew) {
        http = 'put'
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product${item.id}`
      }
      const modalcomponent = this.$refs.AdminModal
      this.$http[http](url, { data: this.tempProduct })
        .then(res => {
          alert(res.data.message)
          this.$emit('get-products', http === 'put' ? this.pagination : 1)
          modalcomponent.hide()
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
