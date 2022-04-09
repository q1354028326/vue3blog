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
                style="padding-top:20px"
                 label-placement="left"
                  :model="formdata"
                >
                  <n-form-item label="标题" path="inputValue">
                    <n-input
                      v-model="formdata.artName"
                      type="text"
                      placeholder="标题"
                      style="width: 530px"
                    />
                  </n-form-item>

                  <n-form-item label="作者" path="inputValue">
                    <n-input
                      v-model="formdata.artAuthor"
                      type="text"
                      placeholder="作者"
                      :default-value="formdata.artAuthor"
                      style="width: 200px"
                      :disabled="true"
                    />
                  </n-form-item>
                  
                  <n-form-item label="分类" path="inputValue">
                     <n-select v-model="formdata.artType" :options="optionsartType" placeholder="请选择"  style="width: 200px"/>
                  </n-form-item>
                  <n-form-item label="标签" path="inputValue">
                     <n-select v-model="formdata.artTab" :options="optionsartTab" placeholder="请选择"  style="width: 200px"/>
                  </n-form-item>
                </n-form>
              </div>
            </div>
            <div>
              <md-editor v-model="formdata.arttext" :theme="theme" />
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
import { defineComponent } from "vue";
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
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default defineComponent({
  components: { MdEditor },
  data() {
    return {
      formdata: {
        artName: "",
        artAuthor: "烈焰大火龙",
        artType: "1",
        artTab: "1",
        artisyuanchuang: 0,
        artistop: 0,
        arttext: "",
      },
      arttext: ``,
      theme: "dark",
      page: 1,
      pageSize: 20,
    };
  },
  setup() {
    return {
        
        optionsartType:[ {
          label: 'Drive My Car',
          value: 'song1'
        },
        {
          label: 'Norwegian Wood',
          value: 'song2'
        },
        {
          label: "You Won't See",
          value: 'song3'
        },
        {
          label: 'Nowhere Man',
          value: 'song4'
        },
        {
          label: 'Think For Yourself',
          value: 'song5'
        },
        {
          label: 'The Word',
          value: 'song6'
        }],
        optionsartTab:[ {
          label: 'Drive My Car',
          value: 'song1'
        },
        {
          label: 'Norwegian Wood',
          value: 'song2'
        },
        {
          label: "You Won't See",
          value: 'song3'
        },
        {
          label: 'Nowhere Man',
          value: 'song4'
        },
        {
          label: 'Think For Yourself',
          value: 'song5'
        },
        {
          label: 'The Word',
          value: 'song6'
        }],
    };
  },
});
</script>