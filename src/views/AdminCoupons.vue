<template>
  <div class="container">
    <div class="text-end mt-3">
      <button class="btn btn-accent" type="button" @click="openCouponModal('isNew')">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-3">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-sm btn-outline-accent" @click="openCouponModal('edit',item)">編輯</button>
              <button class="btn btn-sm btn-outline-danger" @click="openCouponModal('remove', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal
    :coupon="tempCoupon"
    ref="couponModal"
    @update-coupon="updateCoupon"
    :is-new="isNew"
    ></CouponModal>
    <RemoveModal ref="removeModal" :item="tempCoupon" @del-item="removeCoupon"></RemoveModal>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import RemoveModal from '@/components/RemoveModal.vue'
export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: false
    }
  },
  components: {
    CouponModal,
    RemoveModal
  },
  methods: {
    getCoupons () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(url)
        .then(res => {
          this.coupons = res.data.coupons
        }).catch(err => {
          alert(err.response.data.message)
        })
    },
    openCouponModal (status, item) {
      if (status === 'isNew') {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
        this.$refs.couponModal.showModal()
        this.isNew = true
      } else if (status === 'edit') {
        this.tempCoupon = { ...item }
        this.$refs.couponModal.showModal()
        this.isNew = false
      } else if (status === 'remove') {
        this.tempCoupon = { ...item }
        this.$refs.removeModal.showModal()
      }
    },
    removeCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(url)
        .then(res => {
          this.$refs.removeModal.hideModal()
          this.getCoupons()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    updateCoupon (item) {
      let data = item
      let http = 'post'
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      if (!this.isNew) {
        http = 'put'
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        data = this.tempCoupon
      }
      this.$http[http](url, { data })
        .then(res => {
          alert(res.data.message)
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
