<template>
  <view class="index">
    <nut-tabbar bottom safe-area-inset-bottom placeholder>
      <nut-tabbar-item
        v-for="(item, index) in List"
        :key="item.title"
        :tab-title="item.title"
        :icon="item.icon"
        :href="item.link"
      >
      </nut-tabbar-item>
    </nut-tabbar>
  </view>
</template>

<script>
import { ref, h } from "vue";
import { Home, Category, Find, Cart, My } from "@nutui/icons-vue-taro";
import "./index.scss";

export default {
  components: { Home, Category, Find, My },
  setup() {
    const List = [
      {
        title: "猫谱",
        icon: h(Home),
        link: '/pages/cats/index'
      },
      {
        title: "猫抓板",
        icon: h(Category),
        link: '/pages/board/index'
      },
      {
        title: "精选",
        icon: h(Find),
        link: '/pages/pics/index'
      },
      {
        title: "关于",
        icon: h(My),
        link: '/pages/about/index'
      }
    ];
    return {
      List,
    };
  },
};
</script>
