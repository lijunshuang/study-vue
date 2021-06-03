<template>
  <div>
      <p> 祖父的 $attrs.foo: {{$attrs.foo}}</p>
      <button @click="$listeners.add">counter+1</button>
      <p>inject进来的 bar: {{bar}}</p>
      <input type="text" name="" id=""  v-bind="$attrs" >
  </div>
</template>

<script>
  export default {
    name:'Grandson',
    inject: ['bar'],
    inheritAttrs: false, // 是否在跟标签上显示 透传的属性

  }
</script>

<style lang="sass" scoped>

</style>