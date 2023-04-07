<template>
  <nut-tabbar
    v-model="active"
    bottom
    safe-area-inset-bottom
    placeholder
    @tab-switch="tabSwitch"
  >
    <nut-tabbar-item
      v-for="(item, index) in tabList"
      :key="item.title"
      :tab-title="item.title"
      :icon="item.icon"
      :href="item.link"
    >
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
import Taro from "@tarojs/taro";
import { h, ref } from "vue";
import { Home, Category, Find, My } from "@nutui/icons-vue-taro";
import "./index.scss";

export default {
  components: { Home, Category, Find, My },
  setup() {
    let active = ref(0);
    const tabList = [
      {
        title: "猫谱",
        icon: h(Home),
        link: "/pages/cats/index",
      },
      {
        title: "猫抓板",
        icon: h(Category),
        link: "/pages/board/index",
      },
      {
        title: "精选",
        icon: h(Find),
        link: "/pages/pics/index",
      },
      {
        title: "关于",
        icon: h(My),
        link: "/pages/about/index",
      },
      {
        title: "测试",
        icon: h(My),
        link: "/pages/test/index",
      },
    ];

    const { router } = Taro.getCurrentInstance();
    tabList.forEach((item, index) => {
      if (item.link === router.path) active.value = index;
    });

    function tabSwitch(item, index) {
      Taro.navigateTo({
        url: item.href,
      });
    }

    return {
      tabList,
      tabSwitch,
      active,
    };
  },
};
</script>
