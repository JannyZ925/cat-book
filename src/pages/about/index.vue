<template>
  <view class="about">
    <text>{{ msg }}</text>
    <tabbar/>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('关于')
    return {
      msg
    }
  }
}
</script>
