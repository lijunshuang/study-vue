<template>
  <div>
    home
    <p>counter: {{counter}}</p>
    <Child msg="哈哈哈" foo="祖父的 foo" @add="add" placeholder="测试看看"></Child>
  </div>
</template>

<script>
import Child from '../components/Child'
  export default {
    provide(){
      return {
        bar:'barrrrr'
      }
    },
    components:{
      Child
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      add(){
        this.counter ++ ;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>