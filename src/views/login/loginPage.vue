<template>
  <div>
    <!-- 图片 -->
    <div class="w-[40vw] h-[55vw]">
      <img src="/public/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="" />
    </div>
    <!-- 登录 -->
    <div class="w-[60vw] h-[55vw] float-right mt-[-44%]">
      <h1 class="text-[#20274b] font-bold text-lg text-center">
        登录，即刻创造您的应用
      </h1>

      <!-- <van-form @submit="onSubmit" class="mt-[8vw]">
        <van-cell-group inset class="px-[5vw]">
          <van-field v-model="username" placeholder="账号" />
          <van-field v-model="password" type="password" placeholder="密码" />
        </van-cell-group>
        <div style="margin: 16px" class="btn">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form> -->
      <div class="w-[35vw] h-[18vw] mt-[3%] ml-[24%]">
        <input
          v-model="username"
          placeholder="账号"
          class="w-[30vw] h-[5vw] border broder-[#d6d7df] rounded-xl px-[20px] m-[20px]"
        />
        <input
          v-model="password"
          type="password"
          placeholder="密码"
          class="w-[30vw] h-[5vw] border broder-[#d6d7df] rounded-xl px-[20px] m-[20px]"
        />
        <van-button
          round
          type="success"
          color="#0035e3"
          class="w-[30vw] h-[5vw] ml-[5vw]"
          >登录</van-button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const username = ref();
const password = ref();

watch(() => {
  console.log(username);
  console.log(password);
});

</script>
<style scoped></style>
