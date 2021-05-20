<template>
  <div :class="$style.text">
    <h2>{{title}}</h2>
    <p>{{username}}</p>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      title: "about"
    };
  },
  computed:{
    ...mapState('user',['username'])
  }
  // 组件未渲染，通过给next传递回调访问组件实例
  // beforeRouteEnter(to, from, next) {
  //   getPost(to.params.id, post => {
  //     next(vm => vm.setData(post));
  //   });
  // }, // 组件已渲染，可以访问this直接赋值
  // beforeRouteUpdate(to, from, next) {
  //   this.post = null;
  //   getPost(to.params.id, post => {
  //     this.setData(post);
  //     next();
  //   });
  // }

};
</script>

<style lang="scss" scoped module>
.text {
  color: red;
}
</style>