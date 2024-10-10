<template>
  <Layout class="!h-[100vh]">
    <LayoutSider
      width="60"
      class="!bg-[#f8f9fc]"
      style="border-right: 1px solid #c9ceda"
    >
      <div></div>
    </LayoutSider>
    <Layout>
      <LayoutHeader
        class="!h-[60px] !bg-white"
        style="border-bottom: 1px solid #c9ceda"
      >
        <div class="text-xl font-bold mt-[10px]">代码仓库</div>
      </LayoutHeader>
      <Layout>
        <LayoutContent class="!p-[10px] !box-border">
          <RouterView></RouterView>
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script setup>
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
} from "ant-design-vue";
</script>
<style scoped></style>
