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
          烈焰大火龙 の BLOG
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
            欢迎您,烈焰大火龙！
          </div>
        </n-dropdown>
        <div style="float: right; margin-right: 10px">
          <n-tag checkable> ☀️主题 </n-tag>
          <n-tag checkable> 🌟收藏 </n-tag>
          <n-tag checkable> 🚀友情链接 </n-tag>
        </div>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 0px">
        <!-- <n-layout-sider
          has-sider
          bordered
          show-trigger
          :collapsed="collapsed"
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
           @collapse="collapsed = true"
        @expand="collapsed = false"
          :native-scrollbar="false"
        >
          <n-menu
            :collapsed-width="64"
            :collapsed="collapsed"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider> -->
        <n-layout content-style="padding: 0px;">
          <router-view />
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>
<script>
import { h, defineComponent, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  Home,
  Book,
  LogoVue,
  LogoBuffer,
  LogoPython,
  AlertCircleSharp,
  Apps,
  Bug,
  ChatboxEllipsesSharp,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: "首页",
    key: "hear-the-wind-sing",
    icon: renderIcon(Home),
    href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199",
  },
  {
    label: "文章归档",
    key: "pinball-1973",
    icon: renderIcon(Book),
    children: [
      {
        label: "前端技巧",
        icon: renderIcon(LogoVue),
        key: "vue",
      },
      {
        label: "后端教程",
        icon: renderIcon(LogoBuffer),
        key: "houduan",
      },
      {
        label: "爬虫分享",
        icon: renderIcon(LogoPython),
        key: "pachong",
      },
      {
        label: "精品软件",
        icon: renderIcon(Apps),
        key: "applist",
      },
      {
        label: "爬坑经历",
        icon: renderIcon(Bug),
        key: "keng",
      },
    ],
  },
  {
    label: "说点什么",
    key: "liuyan",
    icon: renderIcon(ChatboxEllipsesSharp),
    href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199",
  },
  {
    label: "关于我们",
    key: "aboutus",
    icon: renderIcon(AlertCircleSharp),
    href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199",
  },
];

export default defineComponent({
  setup() {
    return {
      collapsed: ref(true),
      inverted: ref(false),
      
      menuOptions,
      options: [
        {
          label: "✏️ 发博文",
          key:'/Writing'
        },
        {
          label: "⚙ 账号设置",
          key:'/'
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