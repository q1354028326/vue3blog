<template>
  <div style="height: 920px; position: relative">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; line-height: 64px" bordered>
        <div @click="routejump('/')"
          style="
          cursor:pointer;
            height: 100%;
            width: 300px;
            font-size: 24px;
            margin-left: 35px;
            float: left;
          "
        >
          LYDHL の BLOG
        </div>
        <n-dropdown
    trigger="hover"
    placement="bottom-start"
    :options="options"
    @select="handleSelect"
  >
          <div
            style="
              height: 100%;
              padding: 0px 5px;
              font-size: 14px;
              float: right;
              margin-right: 10px;
              cursor: pointer;
            "
          >
            <n-avatar
              style="
                margin-top: 10px;
                float: right;
                margin-right: 10px;
                margin-left: 5px;
              "
              size="large"
              src="https://s3.bmp.ovh/imgs/2022/03/dd76a642bc20034a.png"
            />
            欢迎您,LYDHL！
          </div>
        </n-dropdown>
        <div style="float: right; margin-right: 10px">
          <n-tag checkable> ☀️主题 </n-tag>
          <n-tag checkable> 🌟收藏 </n-tag>
          <n-tag checkable> 🚀友情链接 </n-tag>
        </div>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 0px">
        <n-layout content-style="padding: 0px;">
          <router-view />
        </n-layout>
      </n-layout>
    </n-layout>
    
    <div class="footer">Theme by 烈焰大火龙 | Copyright © 2022 </div>
  </div>
</template>
<style>
.footer{
  color: #777780;
  text-align: center;
  line-height: 40px;
  height: 30px;
  background-color: #18181c;
}
</style>
<script>

export default ({
   data() {
    return {

      options: [
        {
          label: "✏️ 发博文",
          key:'/Writing'
        },
        {
          label: "⚙ 账号设置",
          key:'/set'
        },
        {
          label: "❌ 退出登录",
          key:'/'
        },
      ],
    };
  },
   methods:{
        handleSelect(key) {
          this.routejump(key)
      },
     topbtn(e){
       console.log(e);
     },
       routejump(e){
        this.$router.push({
          path: e,
});
      },
   }
});
</script>