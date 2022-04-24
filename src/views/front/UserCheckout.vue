<template>
  <div class="container pt-8 pb-8 pb-lg-11">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <form @submit.prevent="payOrder">
          <table class="table table-secondary align-middle">
            <thead>
              <th>種類</th>
              <th>數量</th>
              <th>價格</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td> {{ item.product.title }} </td>
                <td> {{ item.qty }}  {{ item.product.unit }} </td>
                <td> {{ Math.round(item.final_total) }} 元</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">{{ Math.round(order.total) }} 元</td>
              </tr>
            </tfoot>
          </table>
          <table class="table table-borderless mt-8 bg-secondary">
            <tbody>
              <tr>
                <th>Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
              <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end mt-2" v-if="order.is_paid === false">
            <button class="btn btn-accent" type="button" @click="payOrder">確認付款去</button>
          </div>
          <div v-if="order.is_paid" class="mt-4 text-end">
            <router-link to="/" class="btn btn-sm btn-outline-dark rounded-0 me-2  me-lg-4 p-lg-1" type="button">返回首頁</router-link>
            <router-link to="/products" class="btn btn-sm btn-outline-accent rounded-0 p-lg-1" type="button">繼續買</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.order
        }).catch((err) => {
          alert(err.response.data.message)
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then(() => {
        this.getOrder()
        this.$router.push('/payfinished')
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          emitter.emit('clear-cart', {})
        })
        .catch(function (err) {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
