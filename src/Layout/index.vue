<template>
  <Layout class="!h-[100vh]">
    <LayoutSider
      width="60"
      class="!bg-[#f8f9fc]"
      style="border-right: 1px solid #c9ceda"
    >
      <ul>
        <li class="">
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">工作台</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">项目</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">AI</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">事项</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">代码</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">制品</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">洞察</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">知识</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
          <div class="world">自动化</div>
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:workbench"
            width="1.2rem"
            height="1.2rem"
            style="color: black"
            class="ml-[12px]"
          />
        </li>
      </ul>
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
import { Icon } from "@iconify/vue";
</script>
<style scoped>
.box li {
  width: 5vw;
  height: 5vw;
}
.world {
  font-size: 12px;
  text-align: center;
  margin-left: -12px;
}
</style>
