<template>
  <div class="about">
    <MyModal :show.sync="show" title="模式窗口">
      <div slot="bd">body</div>
    </MyModal>
    <div @click="show = true">{{ $t('hello') }}</div>
  </div>
</template>


<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      show: false
    }
  },
  mounted() {}
}
</script>

<style scoped>
.about {
  height: 2000px;
}
</style>