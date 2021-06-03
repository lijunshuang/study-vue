<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot @validate="validate"></slot>
    <!-- 校验错误信息  -->
    <p v-if="error" class="error">{{error}}</p>
    <!-- {{rules[prop]}} -->
  </div>
</template>

<script>
// import Kinput from './Kinput' ;
import Validator from 'async-validator';

  export default {
    inject:['rules','model'],
    props: {
      label:{
        type: String
      },
      prop:String
    },
    data() {
      return {
        error: ''
      }
    },
    mounted() {
      this.$on('validate',()=>{
        this.validate()
      })
    },
    methods: {
      validate(){
        // 单项校验
        const value = this.model[this.prop]
        const rules = this.rules[this.prop]
        const validator = new Validator({[this.prop]:rules})
        return validator.validate({[this.prop]:value},errors=>{
          if(errors){
            this.error = errors[0].message
            console.log('errors',errors)
          }else{
            this.error = ''
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.error{
  color:red;
  font-size: 12px;
  margin: 5px 0;
}
</style>