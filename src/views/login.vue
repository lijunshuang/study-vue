<template>
  <div>
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState('user',['isLogin']),
    // isLogin() {
    //   return this.$store.state.isLogin
    // }
  },
  methods: {
    login() {
      // window.isLogin = true;
      // 提交 mutations 改变状态
      // this.$store.commit('login')
      // this.$store.dispatch('user/login','admin').then(()=>{
      this['user/login']('admin').then(()=>{
        console.log('登录成功')
        this.$router.push(this.$route.query.redirect || '/').catch((e)=>console.log('err',e));
      })
    },
    logout() {
      // window.isLogin = false;
      this.$store.commit('user/logout')
      this.$router.push("/");
    },
    ...mapActions(['user/login','user/logout'])
  }
};
</script>

<style lang="scss" scoped>
</style>