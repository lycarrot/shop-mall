<template>
  <router-view />
  <div class="nav">
    <van-tabbar v-model="active" @change="onChange" route>
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/aboutMe">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from 'vue';
import { Button,Tabbar, TabbarItem } from "vant";
export default defineComponent({
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
    setup() {
    const active = ref(0);
    const onChange = (index:string) =>console.log(index);
    return {
      onChange,
      active
    };
  },
});
</script>
<style lang="less">
</style>
