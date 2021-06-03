<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    name: 'Kinput',
    inheritAttrs: false,
    props:{
      type:{
        type:String,
        default:'text'
      },
      value:{
        type:String,
        default:'text'
      },

    },
    data() {
      return {

      }
    },
    methods: {
      onInput(e){
        this.$emit('input', e.target.value)
        // 通知校验
        this.$parent.$emit('validate')
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>