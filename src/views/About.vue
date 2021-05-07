<template>
  <div :class="$style.text">
    {{title}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title:'about'
      }
    },
  }
</script>

<style lang="scss" scoped module>
.text{
  color:red;
}

</style>