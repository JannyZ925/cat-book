<template>
  <view class="index">
    <nut-tabbar bottom safe-area-inset-bottom placeholder>
      <nut-tabbar-item v-for="(item,index) in List" :tab-title="item.title"> </nut-tabbar-item>
    </nut-tabbar>
  </view>
</template>

<script>
import { ref, h } from 'vue'
import { Home,Category,Find,Cart,My} from '@nutui/icons-vue-taro';
import './index.scss'

export default {
  components: {Home,Category,Find,Cart, My },
  setup () {
    const List=[
      {
        title:'标签',
        icon: h(Home),
      },
      {
        title:'标签',
        icon: h(Category),
      },
      {
        title:'标签',
        icon: h(Find),
        
      },
      {
        title:'标签',
        icon: h(Cart),
      },
      {
        title:'标签',
        icon: h(My),
      }
    ]
    return {
      List
    }
  }
}
</script>
