<template>
  	<div>
    	This is from route page 
  	</div>
</template>

<script>
export default {
	name: 'item',
  created(){
    //进入题目页面，开始计时
    this.$store.commit('REMBER_TIME');
  }
}

</script>

<style lang="less">
    

</style>
