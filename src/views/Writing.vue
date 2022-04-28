<template>
  <div>
    <div style="margin: 10px">
      <n-grid cols="12" item-responsive :x-gap="12">
        <n-grid-item span="0 550:0 1100:0 1350:1">
          <div class="green"></div>
        </n-grid-item>
        <n-grid-item span="12 550:12 1100:12 1350:10">
          <div class="green">
            <div>
              <div>
                <n-form
                  style="padding-top: 20px"
                  label-placement="left"
                  :model="formdata"
                >
                  <n-form-item  label="标题">
                    <n-input
                      v-model:value="formdata.artName"
                      type="text"
                      placeholder="标题"
                      style="width: 530px"
                    />
                  </n-form-item>

                  <n-form-item label="作者" >
                    <n-input
                      v-model="formdata.artAuthor"
                      type="text"
                      placeholder="作者"
                      :default-value="formdata.artAuthor"
                      style="width: 200px"
                      :disabled="true"
                    />
                     
                  </n-form-item>

                  <n-form-item label="分类">
                    <n-select
                    :default-value="formdata.artType"
                     v-model:value="formdata.artType"
                      :options="optionsartType"
                      placeholder="请选择"
                      style="width: 200px"
                    />
                  </n-form-item>
                  <n-form-item label="标签" >
                    <n-dynamic-tags v-model:value="formdata.optionsartTab" />
                  </n-form-item>
                  
                  <n-form-item label="是否原创" >
                    <n-switch  v-model:value="formdata.artisyuanchuang" /> 
                  </n-form-item>
                </n-form>
              </div>
            </div>
            <div>
              <md-editor v-model="formdata.arttext" :theme="theme" />
            </div>
            <div style="margin-top: 20px">
              <n-button
                strong
                secondary
                type="primary"
                style="width: 100px; hight: 50px"
                @click="tijiaoart"
              >
                发 布
              </n-button>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item span="0 550:0 1100:0 1350:1">
          <div class="green"></div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>
<style>
.green {
  height: 800px;
}
.hoverclass {
  cursor: pointer;
  transition: all 0.3s;
}
</style>
<script>
import axios from "axios";
import { useMessage } from "naive-ui";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default ({
  components: { MdEditor },
  data() {
    return {
      formdata: {
        artName: "",
        artAuthor: "烈焰大火龙",
        artType: "随笔",
        artisyuanchuang: false,
        artistop: false,
        arttext: "",
        optionsartTab: [],

      },
      
        optionsartType: [
          {
            label: "随笔",
            value: "随笔",
          },
          {
            label: "前端学习",
            value: "前端学习",
          },
          {
            label: "后端技术",
            value: "后端技术",
          },
          {
            label: "实用技巧",
            value: "实用技巧",
          },
          {
            label: "突发灵感",
            value: "突发灵感",
          },
          {
            label: "Pyhton爬虫",
            value: "Pyhton爬虫",
          },
        ],
      theme: "dark",
      page: 1,
      pageSize: 20,
    };
  },
  setup() {
      window.$message = useMessage()
    return {};
  },
  methods: {
    tijiaoart() {
      if(this.formdata.artName==""){
        window.$message.error(
    '文章标题不能为空'
  )
      }else if(this.formdata.optionsartTab.length==0){
  window.$message.error(
    '请至少添加一个标签'
  )
      }else if(this.formdata.arttext==""){
  window.$message.error(
    '文章内容不能为空'
  )
  }
      console.log(this.formdata, "this.formdata");
    },
    handleClose() {},
  },
});
</script>