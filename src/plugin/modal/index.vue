<template>
  <transition name="fade">
    <div class="modal-backdrop" v-if="show" @click="close">
      <div class="modal" @click.stop="">
        <div class="modal-header">
          {{ title }}
          <i class="btn-close iconfont icon-close" @click="close"></i>
        </div>
        <div class="modal-body">
          <slot name="bd"></slot>
        </div>
        <div class="modal-footer">
          <slot name="ft">
            <button type="button" class="btn-close" @click="close">关闭</button>
            <button type="button" class="btn-confirm" @click="close">确认</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyModal',
  components: {},
  props: {
    show: { type: Boolean, default: false, required: true },
    title: { type: String, default: '' }
  },
  methods: {
    cancel($event) {
      console.log('xxx')
      $event.stopImmediatePropagation()
      this.$emit('update:show', false)
    },
    close() {
      this.$emit('update:show', false)
    }
  },
  mounted() {}
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 700px;
}
.modal-header {
  border-bottom: 1px solid #eee;
  color: #313131;
  justify-content: space-between;
  padding: 15px;
  display: flex;
}
.modal-footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
  padding: 15px;
  display: flex;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close,
.btn-confirm {
  border-radius: 8px;
  margin-left: 16px;
  width: 56px;
  height: 36px;
  border: none;
  cursor: pointer;
}
.btn-close {
  color: #313131;
  background-color: transparent;
}
.btn-confirm {
  color: #fff;
  background-color: #2d8cf0;
}
</style>

