<template>
  <div>
    <div class="jiazaizhezhao" v-show="show">
      <div style="text-align: center">
        <div style="margin-top: 23%">
          <n-spin size="large" />
          <div style="margin-top: 10px">请耐心等待下下哦~😊</div>
        </div>
      </div>
    </div>

    <div style="margin: 10px">
      <n-grid cols="12" item-responsive :x-gap="12">
        <n-grid-item span="0 550:0 1100:0 1350:2">
          <div class="green"></div>
        </n-grid-item>
        <n-grid-item span="12 550:12 1100:9 1350:8">
          <div class="green">
            <n-breadcrumb>
              <n-breadcrumb-item href="#">
                <n-icon><md-cash /></n-icon> 首页
              </n-breadcrumb-item>
              <n-breadcrumb-item href="#">
                <n-icon><md-cash /></n-icon> 文章
              </n-breadcrumb-item>
              <n-breadcrumb-item href="#">
                <n-icon><md-cash /></n-icon> {{ artdata.artName }}
              </n-breadcrumb-item>
            </n-breadcrumb>
            <div class="centerart">
              <div style="color: #9b9baa; font-size: 22px; overflow: hidden">
                <div style="float: left" class="hoverclass">
                  {{ artdata.artName }}
                </div>
                <div style="float: left; margin-top: -3px; margin-left: 7px">
                  <n-tag
                    v-if="artdata.artisyuanchuang == 1"
                    type="error"
                    style="margin-top: -30px"
                  >
                    原创
                  </n-tag>
                  <n-tag
                    v-if="artdata.artistop == 1"
                    type="warning"
                    style="margin-top: -30px; margin-left: 5px"
                  >
                    置顶
                  </n-tag>
                </div>
              </div>
              <div
                style="
                  color: #777780;
                  font-size: 14px;
                  overflow: hidden;
                  margin-top: 3px;
                "
              >
                <div
                  style="float: left; overflow: hidden"
                  class="hoverclass-an"
                >
                  <div style="float: left; margin-top: 2px; margin-right: 3px">
                    <n-icon size="14"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z"
                          fill="currentColor"
                        ></path></svg
                    ></n-icon>
                  </div>
                  <div style="float: left">{{ artdata.artAuthor }}</div>
                </div>
                <div
                  style="float: left; overflow: hidden; margin-left: 12px"
                  class="hoverclass-an"
                >
                  <div style="float: left; margin-top: 2px; margin-right: 3px">
                    <n-icon size="14"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32zm320-244a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64z"
                          fill="currentColor"
                        ></path></svg
                    ></n-icon>
                  </div>
                  <div style="float: left">{{ artdata.createdAt }}</div>
                </div>
                <div
                  style="float: left; overflow: hidden; margin-left: 12px"
                  class="hoverclass-an"
                >
                  <div style="float: left; margin-top: 2px; margin-right: 3px">
                    <n-icon size="14"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M128 128h256v38H128z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M112 192h288v38H112z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z"
                          fill="currentColor"
                        ></path></svg
                    ></n-icon>
                  </div>
                  <div style="float: left">更多/实用技巧</div>
                </div>
                <div
                  style="float: left; overflow: hidden; margin-left: 12px"
                  class="hoverclass-an"
                >
                  <div style="float: left; margin-top: 2px; margin-right: 3px">
                    <n-icon size="14"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M416 480L256 357.41L96 480V32h320z"
                          fill="currentColor"
                        ></path></svg
                    ></n-icon>
                  </div>
                  <div style="float: left">JavaScript、css、实用技巧</div>
                </div>
                <n-divider />
                <div
                  class="hoverclass-an"
                  style="padding: 10px; background-color: #000000; cursor: auto"
                >
                  <md-editor
                    v-model="artdata.arttext"
                    :theme="theme"
                    previewOnly
                  />
                </div>
              </div>
            </div>
            <div class="centerart">
              <div style="overflow: hidden; font-size: 22px; color: #9b9baa">
                <div style="float: left; margin-top: 4px; margin-right: 3px">
                  <n-icon size="22"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M456 48H56a24 24 0 0 0-24 24v288a24 24 0 0 0 24 24h72v80l117.74-80H456a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24zM160 248a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zM456 80z"
                        fill="currentColor"
                      ></path></svg
                  ></n-icon>
                </div>
                <div style="float: left">
                  <font style="color: #276d21; margin-left: 5px">9</font>条评论
                </div>
                <n-divider />
              </div>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item span="0 550:0 1100:3 1350:2">
          <div class="green"></div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>
<style>
.jiazaizhezhao {
  position: fixed;
  top: 0px;
  height: 100%;
  z-index: 1000000;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.green {
  height: 800px;
}
.hoverclass {
  cursor: pointer;
  transition: all 0.3s;
}
.centerart {
  padding: 20px;
  background-color: #1d1d1f;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}
</style>
<script>
import axios from "axios";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default {
  components: { MdEditor },
  data() {
    return {
      text: ``,
      theme: "dark",
      show: true,
      artid: 0,
      artdata: [],
    };
  },
  methods: {
    filtertime(value) {
      return value.substring(0, 10);
    },
    getartdata() {
      this.show = true;
      axios
        .get(
          "/api/OptArtlists/GetOptArtlistsbyartid?artid=" +
            this.artid
        )
        .then((res) => {
          this.artdata = res.data.datalist;
          this.show = false;
        });
    },
  },
  mounted() {
    this.artid = this.$route.params.id;
    this.getartdata();
  },
};
</script>
