<template>
  <div
    id="picnModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="picModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="[ic]ModalLabel" class="modal-title">
            <span>新增圖片</span>
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
            <div class="col-md-6">
              <div class="mb-3">
                <label for="uploadPic" class="form-label">上傳檔案</label>
                <input type="file" name="image-upload" class="from-control w-100" id="uploadPic" ref="uploadPic" @change="uploadPic">
                <input type="text" class="from-control w-100 mt-3" v-model="pic.imgUrl">
              </div>
            </div>
            <div class="col-md-6">
              <img :src="pic.imgUrl" alt="">
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
          @click="$emit('update-pic', pic)"
          >確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin'

export default {
  data () {
    return {
      pic: {
        imgUrl: ''
      }
    }
  },
  methods: {
    uploadPic () {
      // 把上傳的檔案取出來
      const uploadPic = this.$refs.uploadPic.files[0]
      // formData 格式，JS 用來產生表單格式
      const formData = new FormData()
      formData.append('pic-upload', uploadPic)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(url, formData)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.pic.imgUrl = res.data.imageUrl
          }
        })
        .catch(err => {
          console.dir(err)
          // alert(err.response.data.message)
        })
    }
  },
  mixins: [modalMixin]
}
</script>
