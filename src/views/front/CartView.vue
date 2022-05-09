<template>
  <!--清空購物車-->
  <DelCartModal @del-cart="delCarts" ref="delCart"/>
  <!---->
  <CartStep v-if="cartData.carts?.length !== 0" :step="stepNum"/>
  <div class="container pb-8">
    <div class="row pb-8">
      <div class="col-md-7 mt-md-9 mt-3">
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="w-20">購物車</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData.carts?.length !== 0">
              <tr v-for="item in cartData.carts" :key="item.id">
                <td>
                  <button type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)"
                    :disabled="isLoadingItem === item.id">
                    x
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                </td>
                <td>
                  <div class="input-group">
                    <select class="form-select border-secondary py-xs"
                      v-model="item.qty"
                      @change="updateCart(item)">
                      <option
                        :value="num"
                        v-for="num in 30"
                        :key="`${num}-${item.id}`"
                      >{{ num }}</option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </td>
                <td class="text-end w-20">
                  {{ item.total }} 元
                </td>
              </tr>
            </template>
            <div v-else class="d-flex justify-content-center mt-2">
              <p class="text-danger">購物車是空的</p>
              <RouterLink to="/products" type="button" class="btn btn-outline-dark hvr-sweep-to-right">快來選購</RouterLink>
            </div>
          </tbody>
        </table>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-0 mt-2 border-top border-dark"
          v-if="cartData.carts?.length !== 0"
          @click="openDelCartModal"
          :disabled="isLoadingItem === true">清空購物車</button>
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
                <button
                  type="button"
                  class="input-group-text"
                  aria-describedby="getCode"
                  @click="sendCoupon"
                  :disabled="isLoadingItem === true || couponCode === ''">
                  使用優惠碼
                </button>
              </td>
            </tr>
            <tr>
              <th class="w-33">折扣金額</th>
              <td class="text-end"
                v-if="Boolean(cartData.total - Math.round(total.final_total))">
                {{  cartData.total -  Math.round(total.final_total) }}
              </td>
              <td class="text-end" v-else-if="cartData.carts?.length === 0 || true">{{ 0 }}</td>
            </tr>
            <tr>
              <th>總計</th>
              <td class="text-end" v-if="cartData.total === cartData.final_total || couponCode === ''">{{ cartData.total }}元</td>
              <td class="text-end" v-else>{{ Math.round(total.final_total)}}元</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row mt-8 justify-content-center bg-secondary pt-4 px-1 px-md-2" v-if="cartData.carts?.length !== 0">
      <div class="col-lg-8">
        <h3 class="fs-4">購買人訊息</h3>
        <VForm ref="form" class=" mt-2 mb-4" v-slot="{ errors }" @submit="sendOrder">
          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="email" class="form-label">* Email</label>
              <VField id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                rules="email|required"
                placeholder="請輸入 Email"
                v-model="form.user.email"
                />
              <ErrorMessage name="email" class="invalid-feedback"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="name" class="form-label">* 收件人姓名</label>
              <VField id="name" name="姓名" type="text" class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                v-model="form.user.name"
                placeholder="請輸入姓名"
                rules="required"/>
              <ErrorMessage name="姓名" class="invalid-feedback"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="tel" class="form-label">* 收件人電話</label>
              <VField id="tel" name="電話" type="tel" class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                :rules="isPhone"
                v-model="form.user.tel"
                placeholder="請輸入電話" />
              <ErrorMessage name="電話" class="invalid-feedback"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="address" class="form-label">* 收件人地址</label>
              <VField id="address" name="地址" type="text" class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                v-model="form.user.address"
                placeholder="請輸入地址"
                rules="required" />
              <ErrorMessage name="地址" class="invalid-feedback"/>
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
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
import DelCartModal from '@/components/DelCartModal.vue'
import CartStep from '@/components/CartStep.vue'

import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import { localize, loadLocaleFromURL } from '@vee-validate/i18n'

defineRule('required', required)
defineRule('email', email)
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json')
configure({
  generateMessage: localize('zh_TW')
})

export default {
  data () {
    return {
      cartData: {
        carts: []
      },
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
      isLoadingItem: false,
      couponCode: '',
      stepNum: 0
    }
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
    DelCartModal,
    CartStep
  },
  methods: {
    getCart () {
      this.$emit('loadingStatus', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.$emit('loadingStatus', false)
          this.cartData = res.data.data
          this.cartLength = res.data.data.carts.length
          emitter.emit('push-cart-num', this.cartLength)
          this.stepNum = 1
        })
        .catch((err) => {
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
          this.isLoadingItem = ''
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
          .catch(err => {
            alert(err.response.data.message)
          })
      }
    },
    updateCart (item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.put(url, { data })
        .then(res => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    delCarts () {
      this.isLoadingItem = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then(res => {
          this.getCart()
          this.isLoadingItem = ''
          this.couponCode = ''
          const delCartModal = this.$refs.delCart
          delCartModal.hideModal()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    openDelCartModal () {
      const delCartModal = this.$refs.delCart
      delCartModal.showModal()
    },
    sendCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.couponCode
      }
      this.isLoadingItem = true
      this.$http.post(url, { data })
        .then(res => {
          this.total = res.data.data
          alert(res.data.message)
          this.getCart()
          this.isLoadingItem = false
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
