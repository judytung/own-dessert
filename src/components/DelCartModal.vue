<template>
    <div
      id="delCartModal"
      ref="modal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delCartModalLabel"
      aria-hidden="true"
      >
    <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-accent text-white">
            <h5 id="delCartModalLabel" class="modal-title">
              <span>刪除全部商品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <strong class="text-accent">是否刪除全部商品</strong> (刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="$emit('del-cart')">
              確認刪除
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin'

export default {
  emits: ['del-cart'],
  mixins: [modalMixin]
}
</script>
