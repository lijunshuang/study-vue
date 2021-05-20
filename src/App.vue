<template>
  <div id="app">
      <user-info></user-info>
    <nav>
      <router-link to='/'>首页</router-link>
      <router-link to='/about'>关于</router-link>
    </nav>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import moment from 'moment'

// import HelloWorld from './components/HelloWorld.vue'
import UserInfo from './components/UserInfo'
export default {
  name: 'App',
  components: {
    UserInfo
    // HelloWorld
  },
  mounted() {
    let current = moment().format('YYYY-MM-DD')
    let start = moment(),end = '2021-05-18 10:00'

    console.log('moment',moment(start).isBetween(end,'2021-05-18 11:00'))
  },
}
</script>

<style lang="scss">
*{
  margin: 0;padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button{
  padding:5px 10px;
  background: none;
  border:1px #999 solid;
  cursor: pointer;
}
nav{
  padding: 10px 0;
  a{
    display: inline-block;
    padding: 0px 20px;
    color:$green;
  }
}
</style>
