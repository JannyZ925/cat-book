import Taro from '@tarojs/taro'
// 定义关于 user 的 store
import { defineStore } from "pinia";

const useUser = defineStore("user", {
  state: () => {
    return {
      avatarUrl: Taro.getStorageSync('user').avatarUrl || "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
      nickName: Taro.getStorageSync('user').nickName || "微信用户",
    };
  },
});

export default useUser;
