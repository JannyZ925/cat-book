<template>
  <view class="index">
    <view class="cat-list">
      <view class="cat-item" v-for="(cat, index) in catList" :key="cat.id" @tap="goToCatDetail(cat.id)">
        <view class="cat-img">
          <image :src="cat.coverImg || defaultImg" />
        </view>
        <view class="cat-info">
          <view class="head">
            <view class="left">
              <text class="head-text name">{{ cat.name }}</text>
              <IconFont v-if="cat.sex==='弟弟'" font-class-name="iconfont" class-prefix="icon" name="nan" size="20" color="#1195DB"/>
              <IconFont v-if="cat.sex==='妹妹'" font-class-name="iconfont" class-prefix="icon" name="nv" size="20" color="#F3ABD0"/>
            </view>
            <view class="right">
              <view class="right-item">
                <IconFont font-class-name="iconfont" class-prefix="icon" name="yu" size="20" />
                <text class="head-text">5860</text>
              </view>
              <view class="right-item">
                <IconFont font-class-name="iconfont" class-prefix="icon" name="liuyanjianyi" size="20" />
                <text class="head-text">5</text>
              </view>
            </view>
          </view>
          <view class="main">
            <view class="main-item">
              <IconFont class="main-icon" font-class-name="iconfont" class-prefix="icon" name="shengridangao" size="20"/>
              <text class="main-text">{{ cat.birthday }}</text>
            </view>
            <view class="main-item">
              <IconFont class="main-icon" font-class-name="iconfont" class-prefix="icon" name="maomi" size="20"/>
              <text class="main-text">{{ cat.stylor }}</text>
            </view>
            <view class="main-item">
              <IconFont class="main-icon" font-class-name="iconfont" class-prefix="icon" name="aixin" size="20"/>
              <text class="main-text">{{ cat.personality }}</text>
            </view>
            <view class="main-item">
              <IconFont class="main-icon" font-class-name="iconfont" class-prefix="icon" name="dizhi" size="20"/>
              <text class="main-text">{{ cat.place }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <tabbar />
  </view>
</template>

<script>
import { reactive, onMounted } from "vue";
import Taro from "@tarojs/taro";
import { Add, IconFont } from "@nutui/icons-vue-taro";
import { getCatList } from "@/apis/cats";
import * as paths from "@/consts/path"
import "./index.scss";

export default {
  components: { Add, IconFont },
  setup() {
    let catList = reactive([]);

    let params = reactive({
      pageNum: 1,
      pageSize: 5
    })

    // 默认图片
    let defaultImg = 'https://lexmin.oss-cn-hangzhou.aliyuncs.com/apis/service-data/goods/defaultImage.gif'

    // 获取猫咪数据
    onMounted(async () => {
      let { list } = await getCatList(params);
      catList.push(...list);
    });

    function goToCatDetail(catId) {
      Taro.navigateTo({
        url: `${paths.CAT_DETAIL}?catId=${catId}`
      })
    }

    return {
      catList,
      defaultImg,
      goToCatDetail
    };
  },
};
</script>
