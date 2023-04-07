<template>
  <!-- 轮播图 -->
  <nut-swiper
    :init-page="page"
    :pagination-visible="true"
    pagination-color="#426543"
    auto-play="3000"
  >
    <nut-swiper-item v-for="(pic, index) in swiperList" :key="pic.id">
      <image :src="pic.picUrl" mode="aspectFill" />
    </nut-swiper-item>
  </nut-swiper>

  <!-- 猫咪信息 -->
  <view class="cat-info">
    <view class="header">
      <view class="left">
        <text class="name">{{ catDetail.name }}</text>
        <IconFont
          v-if="catDetail.sex === '弟弟'"
          font-class-name="iconfont"
          class-prefix="icon"
          name="nan"
          size="20"
          color="#1195DB"
        />
        <IconFont
          v-if="catDetail.sex === '妹妹'"
          font-class-name="iconfont"
          class-prefix="icon"
          name="nv"
          size="20"
          color="#F3ABD0"
        />
      </view>
      <view class="right">
        <nut-tag round type="primary">{{
          catDetail.isAdopted === 0 ? "未领养" : "已被领养"
        }}</nut-tag>
        <nut-tag round type="primary">{{
          catDetail.isSterilized === 0 ? "未绝育" : "已绝育"
        }}</nut-tag>
      </view>
    </view>
    <view class="main">
      <view class="main-item">
        <view class="title"> 常驻地 </view>
        <text class="content">
          {{ catDetail.place }}
        </text>
      </view>
      <view class="main-item">
        <view class="title"> 生日 </view>
        <text class="content">
          {{ catDetail.birthday }}
        </text>
      </view>
      <view class="main-item">
        <view class="title"> 花色 </view>
        <text class="content">
          {{ catDetail.stylor }}
        </text>
      </view>
      <view class="main-item" style="width: 100%">
        <view class="title"> 性格及特点 </view>
        <text class="content">
          {{ catDetail.personality }}
        </text>
      </view>
      <view class="main-item" style="width: 100%">
        <view class="title"> 撸猫指南 </view>
        <text class="content">
          {{ catDetail.guide }}
        </text>
      </view>
    </view>
  </view>

  <!-- 相册 -->
  <view class="album">
    <view class="header">
      <image :src="catDetail.coverImg" />
      <view class="title">
        <text class="name">{{ catDetail.name }}的相册</text>
        <!-- <text class="total">共{{ catDetail.pics.length }}张照片</text> -->
        <text class="total">共14张照片</text>
      </view>
    </view>
    <view class="pics-container">
      <view
        class="container-item"
        v-for="(item, key, i) in catDetail.picMap"
        :key="i"
      >
        <view class="date"> <IconFont name="clock" />&nbsp;{{ key }} </view>
        <view class="pics">
          <image
            class="pic-item"
            v-for="(pic, index) in item"
            :key="pic.id"
            :src="pic.picUrl"
            mode="aspectFill"
          />
        </view>
      </view>
    </view>
  </view>

  <!-- 悬浮导航 -->
  <nut-fixed-nav
    :position="{ top: '300px' }"
    v-model:visible="visible"
  >
    <template v-slot:list>
      <ul class="nut-fixed-nav__list">
        <li class="nut-fixed-nav__list-item" v-for="(navItem, index) in navList" :key="index">
          <IconFont :name="navItem.icon"></IconFont>
          <text class="nav-item-text">{{ navItem.text }}</text>
        </li>
      </ul>
    </template>
    <template v-slot:btn>
      <Retweet color="#fff" />
      <span class="nav-btn-text">{{ visible ? "关闭" : "菜单" }}</span>
    </template>
  </nut-fixed-nav>
</template>

<script>
import { onMounted, ref, reactive, toRefs, computed } from "vue";
import Taro from "@tarojs/taro";
import { IconFont, Retweet } from "@nutui/icons-vue-taro";
import { getCatInfoAndPicsById } from "@/apis/cats";
import "./index.scss";

export default {
  components: { IconFont, Retweet },
  setup() {
    const state = reactive({
      // 获取当前路由
      router: Taro.getCurrentInstance().router,

      // 猫咪详情
      catDetail: {},

      // 轮播图初始索引值
      page: 0,

      // 轮播图照片列表
      swiperList: [],

      // 悬浮导航是否可见
      visible: false,

      // 悬浮导航列表
      navList: [
        {
          id: 1,
          text: "添加照片",
          icon: "image",
          // icon: h(Image),
        },
        {
          id: 2,
          text: "留言板",
          icon: "order",
          // icon: h(Order),
        },
        {
          id: 3,
          text: "反馈信息",
          icon: "issue",
          // icon: h(Issue),
        },
      ]
    });

    onMounted(async () => {
      state.catDetail = await getCatInfoAndPicsById(state.router.params.catId);
      state.swiperList.push(
        ...state.catDetail.pics.filter((pic) => pic.isSwiper === 1)
      );
    });

    return {
      ...toRefs(state)
    };
  },
};
</script>
