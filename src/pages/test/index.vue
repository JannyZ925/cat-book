<template>
  <nut-fixed-nav
    :position="{ top: '70px' }"
    v-model:visible="visible"
    :nav-list="navList"
    :active-color="fa2c19"
  />
  <tabbar />
</template>

<script>
import { h, ref, reactive } from "vue";
import { Order, Image, Issue } from "@nutui/icons-vue-taro";
import "./index.scss";

export default {
  components: { Order, Image, Issue },
  setup() {
    const visible = ref(false);
    const navList = reactive([
      {
        id: 1,
        text: "留言板",
        icon: h(Order),
      },
      {
        id: 2,
        text: "添加照片",
        icon: h(Image),
      },
      {
        id: 3,
        text: "反馈",
        icon: h(Issue),
      },
    ]);
    return {
      visible,
      navList,
    };
  },
};
</script>
