<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      rules: this.rules,
      model: this.model
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(callback) {
      // 1. 获取所有items，执行他们的validate，统一处理返回的Promise
      const results = this.$children.filter(item=>item.prop).map(item => item.validate());
      // const results = this.$children.filter(item=>item.prop).map(item => item.validate());
      console.log('results', results)
      Promise.all(results)
        .then(() => callback(true))
        .catch(() => callback(false));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>