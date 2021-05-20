<template>
  <header>
    <div class="logo"><img alt="Vue logo"  src="../assets/logo.png"></div>
    <div v-if="isLogin" class="userinfo">
      <span>{{welcome}}</span>
      <button v-if="isLogin" @click="logout">注销</button>
    </div>
  </header>
</template>

<script>
import {mapState,mapGetters, mapActions} from 'vuex'
  export default {
    computed:{
      ...mapState('user',['isLogin']),
      ...mapGetters('user',['welcome']),
    },
    methods: {
      ...mapActions('user',['logout'])

    },
  }
</script>

<style lang="scss" scoped>
header{
  display: flex;
  justify-content: space-between;
  padding:10px 20px;
  background: #eee;
  .logo{
    &>img{
      width: 50px;
    }
  }
  .userinfo{
    span{
      margin-right: 20px;
    }
  }
}
</style>