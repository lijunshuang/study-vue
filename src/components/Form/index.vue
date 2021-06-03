<template>
  <div>
    <KForm :model="model" :rules="rules" ref="kform">
      <KFormItem label="用户名" prop="username">
        <Kinput v-model="model.username" placeholder="请输入用户名" @input="onInput"></Kinput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <Kinput
          v-model="model.password"
          type="password"
          placeholder="请输入密码"
          @input="onInputPassword"
        ></Kinput>
      </KFormItem>
      <button @click="login">登录</button>
    </KForm>
  </div>
</template>

<script>
import Kinput from "./Kinput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";


export default {
  components: {
    KFormItem,
    Kinput,
    KForm
  },
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名为必填项" }],
        password: [{ required: true, message: "密码为必填项" }]
      }
    };
  },
  methods: {
    onInput(value) {
      this.model.username = value;
    },
    onInputPassword(value) {
      this.model.password = value;
    },
    login() {
      this.$refs.kform.validate(isValidate => {

        if (isValidate) {
          console.log("submit login");
        } else {
          this.$notice( {
            title: "校验不通过",
            // message: "提示信息",
            duration: 1000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 10px;
}
</style>