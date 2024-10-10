<template>
  <!-- <div>login</div> -->
  <div class="flex item-center">
    <div class="w-[575px] h-[100vh]">
      <Carousel autoplay>
        <img src="https://p.ipic.vip/ru3q1d.png" alt="" />
        <img src="https://p.ipic.vip/0vts2p.png" alt="" />
        <img src="https://p.ipic.vip/fzd36k.png" alt="" />
        <!-- <img src="/public/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt="" />
        <img src="/public/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="" />
        <img
          src="/public//images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
          alt=""
        /> -->
      </Carousel>
    </div>

    <div class="flex-1 h-[100vh] flex justify-center items-center">
      <div class="w-[500px] flex flex-col justify-center items-center">
        <h1 class="text-[35px] mb-[30px]">登录，即刻创造您的应用</h1>
        <Space class="w-full" direction="vertical" size="large">
          <Input
            class="w-full h-[60px]"
            size="large"
            v-model:value="userLoginInfo.username"
            placeholder="请输入邮箱"
          />
          <Input
            class="w-full h-[60px]"
            size="large"
            v-model:value.lazy="userLoginInfo.password"
            autofocus
            type="password"
            placeholder="请输入密码"
          />
        </Space>
        <div class="w-full my-[10px]">
          <Radio v-model:checked="checked">
            我已阅读并同意，<Button type="link">《服务协议》</Button>和<Button
              type="link"
              >《隐私协议》</Button
            >
          </Radio>
        </div>

        <Button
          @click="loginHandle"
          type="primary"
          class="w-full h-[50px] mt-[30px]"
          >登录</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Button, Carousel, Space, Radio, App } from "ant-design-vue";
import to from "await-to-js";
import { useRouter } from "vue-router";

import { getAccessToken } from "@/service/api";

const router = useRouter();
const { notification } = App.useApp();
const userLoginInfo = ref({
  username: "1765176356@qq.com",
  password: "@liyue2004@",
});

const loginHandle = async () => {
  const loginData = {
    grant_type: "password",
    username: userLoginInfo.value.username,
    password: userLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getAccessToken(loginData));
  console.log(err, res);
  if (!err) notification.success({ message: "恭喜你，登陆成功！" });
  router.replace("home");
};
</script>
