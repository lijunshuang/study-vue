<template>
  <div>
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login() {
      // window.isLogin = true;
      // 提交 mutations 改变状态
      this.$store.commit('login')
      this.$router.push(this.$route.query.redirect);
    },
    logout() {
      // window.isLogin = false;
      this.$store.commit('logout')
      this.$router.push("/");
    },
  }
};
</script>

<style lang="scss" scoped>
</style>