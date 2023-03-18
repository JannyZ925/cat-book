<template>
  <view class="pics">
    <text>{{ msg }}</text>
    <tabbar/>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('精选')
    return {
      msg
    }
  }
}
</script>
