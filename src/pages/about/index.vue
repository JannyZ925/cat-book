<template>
  <view class="personal-page">
    <!-- 用户信息区域 -->
    <view class="user-info">
      <image class="user-avatar" :src="avatarUrl"></image>
      <text class="user-name">{{ nickName }}</text>
    </view>

    <view class="panel">
      <view class="panel-item">
        <text>我的建议</text>
        <IconFont name="rect-right"></IconFont>
      </view>
      <view class="panel-item">
        <text>上传的照片</text>
        <IconFont name="rect-right"></IconFont>
      </view>
      <view class="panel-item" @tap="goToEditInfo">
        <text>编辑资料</text>
        <IconFont name="rect-right"></IconFont>
      </view>
    </view>
  </view>
  <tabbar />
</template>

<script>
  import Taro from "@tarojs/taro"
  import { ref, reactive, toRefs } from 'vue'
  import { IconFont } from '@nutui/icons-vue-taro';
  import * as paths from "@/consts/path";
  import useUser from '@/store/user';
  import './index.scss'

  export default {
    components: {
      IconFont
    },
    setup() {
      const userStore = useUser()
      const { avatarUrl, nickName } = toRefs(userStore)

      function goToEditInfo() {
        Taro.navigateTo({
          url: paths.EDIT_INFO
        })
      }

      return {
        avatarUrl,
        nickName,
        goToEditInfo
      }
    }
  }
</script>