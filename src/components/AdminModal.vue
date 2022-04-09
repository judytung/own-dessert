<template>
  <div
      id="adminModal"
      ref="modal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="adminModalLabel"
      aria-hidden="true"
      >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="adminModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close bg-primary"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="uploadImage" class="form-label">上傳檔案</label>
                <input type="file" name="image-upload" class="from-control w-100" id="uploadImage" ref="uploadImage" @change="uploadImage">
              </div>
              <div class="mb-3">
                <label for="mainImage" class="form-label">或輸入圖片網址</label>
                <input type="text" class="from-control w-100" id="mainImage" v-model="tempProduct.imageUrl"/>
              </div>
              <img :src="tempProduct.imageUrl" :alt="tempProduct.description" class="img-fluid" />
              <!--多圖-->
              <div class="mb-3">
                <h3>新增多個圖片</h3>
                <!--首先要判斷是不是一個陣列-->
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <!--判斷陣列的方式-->
                  <template v-for="(img, key) in tempProduct.imagesUrl" :key="key + 456">
                    <!--v-for 跟 v-if 不能放在一起-->
                    <input type="text" class="form-control mt-2" id="imagesUrl" v-model="tempProduct.imagesUrl[key]"/>
                    <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid mt-2" />
                    <!--這邊必須加入 key 值-->
                  </template>
                  <!--這邊使用 v-if 判斷，首先當陣列裡面長度為 0 時，要出現新增按鈕，還有最後一格欄位是否有文字，有文字時才會再出現按鈕-->
                  <!--|| 邏輯運算子的使用，當左邊為真值時就會直接回傳，否則就回傳右邊，所以當陣列長度不為 0 時，就會判斷最後一格欄位是否有文字-->
                  <button v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]" @click="tempProduct.imagesUrl.push('')" type="button" class="btn btn-accent w-100 mt-2">
                    新增
                  </button>
                  <!--點擊新增按鈕會觸發方法使用 push 新增到陣列裡，且為字串形式-->
                  <button
                    type="button"
                    class="btn btn-outline-danger w-100 mt-2"
                    @click="tempProduct.imagesUrl.pop()"
                  >
                    刪除
                  </button>
                  <!--pop 為刪除最後一個-->
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
                  />
                </div>
              </div>
              <hr/>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-accent"
          @click="$emit('update-product', tempProduct)"
          >確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin'
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default () { return {} }
    }

  },
  emits: ['updateProduct'],
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  data () {
    return {
      modal: '',
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  methods: {
    // openModal () {
    //   this.modal.show()
    // },
    // closeModal () {
    //   this.modal.hide()
    // },
    uploadImage () {
      // 把上傳的檔案取出來
      const uploadImage = this.$refs.uploadImage.files[0]
      // formData 格式，JS 用來產生表單格式
      const formData = new FormData()
      formData.append('image-upload', uploadImage)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(url, formData)
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.tempProduct.imageUrl = res.data.imageUrl
          }
        })
        .catch(err => {
          console.dir(err)
          // alert(err.response.data.message)
        })
    }
  },
  // mounted () {
  //   this.modal = new Modal(this.$refs.adminModal)
  // }
  mixins: [modalMixin]
}
</script>
