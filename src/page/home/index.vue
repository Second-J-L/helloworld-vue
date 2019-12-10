<template>
  <div class="home_container">
    <router-link to="item" >跳转其他页面</router-link>
    <div>{{ num }}</div>
    <div @click="addNum">自增</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    addNum() {
      let r = Math.floor(Math.random() * 10);
      console.log(r);
      this.$store.commit('ADD_NUM', r)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
