<template>
  <view class="editInfo">
    <button
      class="avatar-wrapper"
      open-type="chooseAvatar"
      @chooseavatar="onChooseAvatar"
    >
      <image class="avatar" :src="avatarUrl"></image>
    </button>
    <nut-input
      class="nameInput"
      v-model="nickName"
      placeholder="请输入昵称"
      type="nickname"
    />
    <nut-button block type="info" class="submitButton" @tap="handleSubmit"
      >提交</nut-button
    >
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { ref, reactive, toRefs, watch } from "vue";
import useUser from "@/store/user";
import { addOrUpdateUser } from "@/apis/user";
import { toast } from "@/utils/toast";
import "./index.scss";

export default {
  setup() {
    const userStore = useUser();
    const { avatarUrl, nickName } = toRefs(userStore);

    function onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      userStore.$patch({
        avatarUrl,
      });
    }

    async function handleSubmit() {
      const user = {
        avatarUrl: userStore.avatarUrl,
        nickName: userStore.nickName,
      }
      let sessionId = await addOrUpdateUser(user);
      if(sessionId) {
        toast("修改成功!")
        Taro.setStorageSync('sessionId', sessionId)
        Taro.setStorageSync('user', user)
      } else toast("修改失败!", { icon: "error" })
    }

    return {
      avatarUrl,
      nickName,
      onChooseAvatar,
      handleSubmit,
    };
  },
};
</script>