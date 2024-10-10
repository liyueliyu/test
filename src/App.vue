<template>
  <App>
    <ConfigProvider :theme="{ token: { colorPrimary: '#032bec' } }">
      <RouterView />
      <Button />
    </ConfigProvider>
  </App>
</template>
<script setup>
import { App, ConfigProvider } from "ant-design-vue";
</script>
