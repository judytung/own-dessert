<template>
  <PicModal
  ref="picModal"
  @update-pic="updatePic"
  />
  <div class="container">
    <div class="mt-3 text-end">
      <button type="button" class="btn btn-accent" @click="openPicModal()">新增圖片</button>
    </div>
    <table class="table table-hover mt-3 align-middle">
      <thead>
        <tr>
          <th>圖片預覽</th>
          <th>分類</th>
          <th>網址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item + '321'">
          <td>
            <div :style="{ backgroundImage: `url(${item.imgUrl})` }" class="h-6.25 background-size-cover background-position-center"></div>
          </td>
          <td></td>
          <td>
            {{ item.imgUrl }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PicModal from '@/components/PicModal.vue'

export default {
  data () {
    return {
      addPic: {},
      data: []
    }
  },
  components: {
    PicModal
  },
  methods: {
    openPicModal (item) {
      const picModal = this.$refs.picModal
      picModal.showModal()
    },
    updatePic (item) {
      const picModal = this.$refs.picModal
      this.addPic = item
      this.data.push(this.addPic)
      localStorage.setItem('listData', JSON.stringify(item))
      picModal.hideModal()
    },
    getList () {
      console.log(this.data)
      this.data = Object.values(JSON.parse(localStorage.getItem('listData')))
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
