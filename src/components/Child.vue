<template>
  <div>
      <p>父级的 $attrs.msg: {{$attrs.msg}}</p>
      <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
  </div>
</template>

<script>
import Grandson from './Grandson'
  export default {
    components : {
      Grandson
    }
  }
</script>

<style lang="sass" scoped>

</style>