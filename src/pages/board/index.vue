<template>
  <view class="board">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('猫抓板')
    return {
      msg
    }
  }
}
</script>
