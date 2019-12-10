<template>
  	<div>
    	This is from route page 
      <div>{{ name | capitalize }}</div>
  	</div>
</template>

<script>
export default {
  name: 'item',
  data() {
    return {
      name: 'helloworld vue'
    }
  },
  created(){
    //进入题目页面，开始计时
    this.$store.commit('REMBER_TIME');
  },
  filters: {
    capitalize: function(value) {
      return value.toUpperCase();
    }
  }
}

</script>

<style lang="less" scoped>
    

</style>
