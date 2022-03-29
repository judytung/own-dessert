<template>
  <div class="container">
   <div class="row">
     <div class="col-md-7 mt-md-9 mt-5">
      <table class="table align-middle">
         <thead>
            <tr>
              <th>購物車品項</th>
            </tr>
        </thead>
        <tbody>
          <template v-if="cartData.carts?.length !== 0">
              <tr v-for="item in cartData.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                    x
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <!-- <div class="text-success">
                    已套用優惠券
                  </div> -->
                </td>
                <td>
                  <div class="input-group">
                    <!-- <input
                          min="1" type="number" class="form-control" v-model.number="item.qty"> -->
                          <select  id="" class="form-select border-secondary" v-model="item.qty"  @change="updateCart(item)">
                            <option :value="num" v-for="num in 50" :key="`${num}-${item.id}`">{{ num }}</option>
                          </select>
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </td>
                <td class="text-end">
                  {{ item.total }} 元
                </td>
              </tr>
            </template>
            <div v-else class="d-flex justify-content-center mt-2">
              <p class="text-danger">購物車是空的</p>
              <router-link to="/products" type="button" class="btn btn-outline-dark hvr-sweep-to-right">快來選購</router-link>
            </div>
        </tbody>
      </table>
     </div>
     <div class="col-md-5 mt-md-9 mt-5">
       <table class="table">
         <thead>
           <tr>
            <th>購物車總計</th>
           </tr>
         </thead>
         <tbody>
          <tr>
            <th>小計</th>
            <td class="text-end"> {{ cartData.total }} 元</td>
          </tr>
          <tr>
            <th>優惠券</th>
            <td class="input-group">
              <input type="text" class="form-control" id="getCode" v-model="couponCode">
              <span  type="button" class="input-group-text" aria-describedby="getCode" @click="sendCoupon()">驗證</span>
            </td>
          </tr>
          <tr>
            <th>折扣金額</th>
            <td class="text-end" v-if="Boolean(cartData.total - Math.round(total.final_total))">{{  cartData.total -  Math.round(total.final_total) }}</td>
            <td class="text-end" v-else-if="cartData.carts?.length === 0 || true">{{ 0 }}</td>
          </tr>
          <tr>
            <th>總計</th>
            <td class="text-end" v-if="cartData.total === cartData.final_total || couponCode === ''">{{ cartData.total }}元</td>
            <!-- <td class="text-end" v-else-if="couponCode === ''">{{ cartData.total }}元</td> -->
            <td class="text-end" v-else>{{ Math.round(total.final_total)}}元</td>
          </tr>
         </tbody>
       </table>
       <button type="button" class="btn btn-accent rounded-0 float-end px-3 clearfix">結帳去</button>
       {{couponCode}}
       {{ cartData.total}}
       {{cartData.final_total}}
     </div>
   </div>
  </div>
</template>

<script>
// import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      cartData: {},
      total: {},
      user: {
        email: '',
        name: '',
        address: '',
        phone: '',
        textarea: ''
      },
      couponCode: ''
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartData = res.data.data // data 裡有兩層，要存到最後一個 data
        })
        .catch(function (err) {
          alert(err.response.data.message)
        })
    },
    removeCartItem (id) {
      this.isLoadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then(res => {
          alert(res.data.message)
          if (this.cartData.carts.length === 0) {
            this.cartData.total = ''
            this.total.final_total = ''
            this.couponCode = ''
          }
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      if (this.couponCode === true) {
        const couponUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
        const data = {
          code: this.couponCode
        }
        this.$http.post(couponUrl, { data })
          .then(res => {
            this.total = res.data.data
            this.getCart()
          })
      }
    },
    updateCart (item) {
      // 根據 api 資料格式建構
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.put(url, { data }) // 這邊要將資料帶出去
        .then(res => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    delCarts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then(res => {
          alert(res.data.message)
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    sendCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.couponCode
      }
      this.$http.post(url, { data })
        .then(res => {
          this.total = res.data.data
          alert(res.data.message)
          this.getCart()
          console.log(this.total.final_total, this.cartData.final_total)
          // this.total.final_total = this.cartData.final_total
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
