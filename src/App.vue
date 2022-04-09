
<template >
<div style="background-color:#18181c;height:100%" >
  <!-- <audio autoplay="autoplay" controls="controls" loop="loop" preload="auto" style="display: none;"
            	src="https://m701.music.126.net/20220326124045/e76228ed820cea58e00c3cf4f63bc707/jdyyaac/0709/025b/5509/0ce3406e0051e90eb4c6bc57a79d5dd6.m4a">
      		你的浏览器版本太低，不支持audio标签
	</audio> -->
  <n-config-provider :theme="darkTheme">
  <router-view/>
  </n-config-provider>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { darkTheme } from 'naive-ui'

  export default defineComponent({
    setup() {
      return {
        darkTheme
      }
    },
  methods:{

  },
  mounted(){

  }
  })
</script>