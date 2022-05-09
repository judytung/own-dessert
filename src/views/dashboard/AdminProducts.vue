<template>
  <div class="container">
    <!--AdminModal-->
    <AdminModal
      ref="AdminModal"
      :product="tempProduct"
      @update-product="updateProduct"
      :is-new="isNew"
      :pagination="pagination.current_page"
    />
    <!---->
    <!--RemoveModal-->
    <RemoveModal
      ref="removemodal"
      :item="tempProduct"
      @del-item="removeProduct"
      :pagination="pagination.current_page"
    />
    <!---->
    <div class="mt-3 text-end">
      <button type="button" class="btn btn-accent" @click="openModal('isNew')">新增產品</button>
    </div>
    <table class="table table-hover mt-3 align-middle">
      <thead>
        <tr>
          <th>
            圖片
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
        <tr v-for="item in products" :key="item.id">
          <td>
            <div :style="{ backgroundImage: `url(${item.imageUrl})` }" class="h-6.25 background-size-cover background-position-center"></div>
          </td>
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
              <button type="button" class="btn btn-accent btn-sm" @click="openModal('edit', item)">
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
    <Pagination :pages="pagination" @emit-pages="getProducts" />
  </div>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue'
import AdminModal from '@/components/AdminModal.vue'
import RemoveModal from '@/components/RemoveModal.vue'

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      isLoading: false,
      pagination: {}
    }
  },
  components: {
    Pagination,
    AdminModal,
    RemoveModal
  },
  methods: {
    getProducts (page = 1) {
      this.$emit('loadingStatus', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(url)
        .then((res) => {
          this.$emit('loadingStatus', false)
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    openModal (status, item) {
      const modalcomponent = this.$refs.AdminModal
      const removemodal = this.$refs.removemodal
      if (status === 'isNew') {
        this.tempProduct = {
          imagesUrl: []
        }
        modalcomponent.showModal()
        this.isNew = true
      } else if (status === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(item))
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = []
        }
        modalcomponent.showModal()
        this.isNew = false
      } else if (status === 'remove') {
        removemodal.showModal()
        this.tempProduct = { ...item }
      }
    },
    updateProduct (item) {
      this.tempProduct = item
      let http = 'post'
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      if (!this.isNew) {
        http = 'put'
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      }
      const modalcomponent = this.$refs.AdminModal
      this.$http[http](url, { data: this.tempProduct })
        .then(res => {
          alert(res.data.message)
          this.getProducts()
          modalcomponent.hideModal()
        })
    },
    removeProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      const removemodal = this.$refs.removemodal
      this.$http.delete(url)
        .then(res => {
          removemodal.hideModal()
          this.getProducts(this.pagination)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
