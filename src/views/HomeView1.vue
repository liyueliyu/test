<template>
  <!-- <div>HOME VIEW 1</div> -->
  <div>
    <Layout class="layout">
      <LayoutHeader>
        <Menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          class="!w-[100%] !h-[50px]"
        >
          <MenuItem key="1">nav 1</MenuItem>
          <MenuItem key="2">nav 2</MenuItem>
          <MenuItem key="3">nav 3</MenuItem>
        </Menu>
      </LayoutHeader>
      <!-- <LayoutContent :style="contentStyle">Content</LayoutContent>
      <LayoutFooter :style="footerStyle">Footer</LayoutFooter> -->
    </Layout>
  </div>
</template>
<script srtup>
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Menu,
  MenuItem,
} from "ant-design-vue";
import { ref } from "vue";
const selectedKeys = ref(["2"]);
</script>

<!-- <template>
  <a-layout class="layout">
    <a-layout-header>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template> -->

<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
