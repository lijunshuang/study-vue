<template>
  <div>
      <p> 祖父的 $attrs.foo: {{$attrs.foo}}</p>
      <button @click="$listeners.add">counter+1</button>
      <p>inject进来的 bar: {{bar}}</p>
  </div>
</template>

<script>
  export default {
    name:'Grandson',
    // inject: ['bar'],
    inject: {
      bar2:'bar'
    }
  }
</script>

<style lang="sass" scoped>

</style>