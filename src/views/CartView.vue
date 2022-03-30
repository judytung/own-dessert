<template>
  <div class="container">
   <div class="row">
     <div class="col-md-7 mt-md-9 mt-5">
      <table class="table align-middle">
         <thead>
            <tr>
              <th>購物車</th>
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
                          <select  id="" class="form-select border-secondary py-xs" v-model="item.qty"  @change="updateCart(item)">
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
      <button type="button" class="btn btn-sm btn-outline-dark rounded-0 mt-2  border-top border-dark" v-if="cartData.carts?.length !== 0" @click="delCarts">清空購物車</button>
     </div>
     <div class="col-md-5 mt-md-9 mt-5">
       <table class="table">
         <thead>
           <tr>
            <th>金額</th>
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
            <th class="w-33">折扣金額</th>
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
     </div>
   </div>
   <div class="row mt-4 justify-content-center bg-secondary pt-4 px-1 px-md-2">
    <div class="col-lg-8">
      <h3 class="fs-4">購買人訊息</h3>
     <v-form ref="form" class=" mt-2 mb-4" v-slot="{ errors }" @submit="sendOrder">
       <div class="row">
         <div class="mb-3 col-md-6">
            <label for="email" class="form-label">Email</label>
            <v-field id="email" name="email" type="email" class="form-control"
                      :class="{ 'is-invalid': errors['email'] }"
                      rules="email|required"
                      placeholder="請輸入 Email"
                      v-model="form.user.email"
                    ></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3 col-md-6">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" v-model="form.user.name"
                      placeholder="請輸入姓名" rules="required"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3 col-md-6">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" :rules="isPhone" v-model="form.user.tel"
                      placeholder="請輸入電話" ></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3 col-md-6">
            <label for="address" class="form-label">收件人地址</label>
            <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" v-model="form.user.address"
                      placeholder="請輸入地址" rules="required" ></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="5" v-model="form.textarea"></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-accent"
            :disabled="Object.keys(errors).length > 0 || cartData.carts?.length === 0">送出訂單</button>
          </div>
       </div>
      </v-form>
    </div>
   </div>
  </div>
  <FooterView></FooterView>
</template>

<script>
import FooterView from '@/components/FooterView.vue'
import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import { localize, loadLocaleFromURL } from '@vee-validate/i18n'
defineRule('required', required)
defineRule('email', email)
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json')
configure({ // 用來做一些設定
  generateMessage: localize('zh_TW')
})
export default {
  data () {
    return {
      cartData: {},
      cartLength: 0,
      total: {},
      form: {
        user: {
          email: '',
          name: '',
          address: '',
          tel: ''
        },
        textarea: ''
      },
      couponCode: ''
    }
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
    FooterView
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.cartData = res.data.data // data 裡有兩層，要存到最後一個 data
          this.cartLength = res.data.data.carts.length
          console.log(this.cartLength)
          this.$emitter.emit('push-cart-num', this.cartLength)
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
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼'
    },
    sendOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then(res => {
          alert(res.data.message)
          this.$router.push(`/checkout/${res.data.orderId}`)
          this.$refs.form.resetForm()
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
