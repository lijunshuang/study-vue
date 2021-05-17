<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <div>
      <p><button @click="$store.commit('add')">同步+1</button></p>
      <p><button @click="$store.dispatch('add')">异步+1</button></p>
      <p><span style="margin:0px 10px;">counter: {{$store.state.counter}}</span></p>
      <p>double counter {{$store.getters.doubleCounter}}</p>
    </div>

    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    console.log('this',this.$store)
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  a {
    display: inline-block;
    padding: 0px 20px;
    color: $green;
  }
}
</style>
