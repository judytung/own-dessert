<template>
  <div class="toast-container pos-fixed me-3 top-0 end-0"
    style="z-index: 1500">
    <div class="toast show"
    v-for="(msg, key) in messages"
    :key="key"
    role="alert"
    :class="`toast${key}`">
      <div class="toast-header bg-dark">
         <span
          :class="`bg-${msg.style}`"
          class="p-1 rounded me-2 d-inline-block">
        </span>
        <strong class="me-auto text-light">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close bg-light"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="clearToast(key)"></button>
      </div>
      <div class="toast-body" v-if="msg.content">
       {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      messages: []
    }
  },
  methods: {
    toastShow () {
      setTimeout(() => {
        this.messages.shift()
      }, 6000)
    },
    clearToast (i) {
      this.messages.splice(i, 1)
    }
  },
  mounted () {
    emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
      this.toastShow()
    })
  }
}
</script>
