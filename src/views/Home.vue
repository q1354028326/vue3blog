<template>
  <div>
      <div class="jiazaizhezhao" v-if="show">
      <div style="text-align:center">
        <div style="margin-top:23%">
 <n-spin size="large" />
<div style="margin-top:10px">请耐心等待下下哦~😊</div>
        </div>

      </div>
    </div>
    <div class="bgimg" style="text-align: center">
      <div style="height: 130px"></div>
      <div>
        <n-avatar
          style="border: 3px solid; box-shadow: 4px 4px rgba(0, 0, 0, 0.3)"
          round
          :size="138"
          src="https://s3.bmp.ovh/imgs/2022/03/dd76a642bc20034a.png"
        />
        <div
          style="
            text-align: center;
            font-size: 40px;
            text-shadow: 4px 4px rgba(0, 0, 0, 0.5);
          "
        >
          <!-- 烈焰大火龙的博客 -->
         LYDHL'S BLOG
        </div>
        <div
          style="
          display:flex;
          width:370px
          border:1px solid
            text-align: center;
            font-size: 40px;
            text-shadow: 4px 4px rgba(0, 0, 0, 0.5);
            margin:auto
          "
        >
          <div style="width: 20%">
            <n-icon size="30" class="hovericon-wx">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
              >
                <path
                  data-name="XMLID 501 -1"
                  d="M408.67 298.53a21 21 0 1 1 20.9-21a20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21a20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35s68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7c2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17a5 5 0 0 0 4.65-4.66a14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47a11.4 11.4 0 0 1 5-9.35"
                  fill="currentColor"
                ></path>
                <path
                  data-name="XMLID 505 -7"
                  d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47c1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83a7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48"
                  fill="currentColor"
                ></path>
              </svg>
            </n-icon>
          </div>
          <div style="width: 20%">
            <n-icon size="30" class="hovericon-ds">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
              >
                <path
                  d="M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44l109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25a173.31 173.31 0 0 1-35.11 10.39a170.05 170.05 0 0 1-62.72-.24a184.45 184.45 0 0 1-35.59-10.4a141.46 141.46 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21c-.49-.24-.73-.48-1-.48c-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81c-53.51-1.69-73.85-36.47-73.85-36.47c0-77.06 34.87-139.62 34.87-139.62c34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49a205.62 205.62 0 0 1 48.91-.48a201.62 201.62 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62c0-.28-20.35 34.5-73.86 36.19z"
                  fill="currentColor"
                ></path>
                <path
                  d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57c.25-14.76-10.9-26.57-24.7-26.57z"
                  fill="currentColor"
                ></path>
                <path
                  d="M300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"
                  fill="currentColor"
                ></path>
              </svg>
            </n-icon>
          </div>
          <div style="width: 20%">
            <n-icon size="30" class="hovericon-tw">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
              >
                <path
                  d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </n-icon>
          </div>
          <div style="width: 20%">
            <n-icon size="30" class="hovericon-fb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
              >
                <path
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  fill-rule="evenodd"
                  fill="currentColor"
                ></path>
              </svg>
            </n-icon>
          </div>
          <div style="width: 20%">
            <n-icon size="30" class="hovericon-git">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z"
                  fill="currentColor"
                ></path>
              </svg>
            </n-icon>
          </div>
        </div>
        <div>
          开发技术博客，记录每次造轮子和爬坑
        </div>
      </div>
    </div>
 
    <div style="margin: 10px">
      <n-grid cols="24" item-responsive :x-gap="12">
        <n-grid-item span="0 550:0 900:1 1350:1">
        </n-grid-item>
        <n-grid-item span="24 550:0 900:0 1350:4">
          <div >
               <div class="centerart-right">
              <div style="overflow: hidden; font-size: 22px; color: #9b9baa">
                <div style="float: left; margin-top: 4px; margin-right: 3px">
                  <n-icon size="22"
                    ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M464 208H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg></n-icon>
                </div>
                <div style="float: left">博客统计</div>
              </div>
              <div style="border:1px #2d2d30 solid;border-radius: 3px;overflow: hidden">
                <div style="overflow: hidden;color: #777780;padding:10px 20px;font-size:13px;border-bottom:1px #2d2d30 solid">
                  <div style="float:left;">📖文章数量</div>
                  <div style="float:right"><n-number-animation ref="numberAnimationInstRef" :from="0" :to="artcount" />篇</div>
                </div>
                 <div style="overflow: hidden;color: #777780;padding:10px 20px;font-size:13px;border-bottom:1px #2d2d30 solid">
                  <div style="float:left;">📮评论数量</div>
                  <div style="float:right"><n-number-animation ref="numberAnimationInstRef" :from="0" :to="245" />条</div>
                </div>
                 <div style="overflow: hidden;color: #777780;padding:10px 20px;font-size:13px;border-bottom:1px #2d2d30 solid">
                  <div style="float:left;">🪑访客数量</div>
                  <div style="float:right"><n-number-animation ref="numberAnimationInstRef" :from="0" :to="12212" />个</div>
                </div>
                 <div style="overflow: hidden;color: #777780;padding:10px 20px;font-size:13px;border-bottom:1px #2d2d30 solid">
                  <div style="float:left;">📅建站日期</div>
                  <div style="float:right">2022-03-26</div>
                </div>
                 <div style="overflow: hidden;color: #777780;padding:10px 20px;font-size:13px;border-bottom:1px #2d2d30 solid">
                  <div style="float:left;">🕚持续运行</div>
                  <div style="float:right">{{createdatecha}}</div>
                </div>
                 <div style="overflow: hidden;color: #777780;padding:10px 20px;font-size:13px;">
                  <div style="float:left;">🚧最后更新</div>
                  <div style="float:right">2022-04-13 10:48</div>
                </div>
              </div>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item span="24 550:24 900:16 1350:14">
          <div class="green" >
           
            <div class="centerart"  v-for="(item,index) in artlistdata" :key="index">
              <div style="color: #9b9baa; font-size: 22px; overflow: hidden">
                <div style="float: left;" class="hoverclass" @click="lookart(item.artId)">{{item.artName}}</div>
                <div style="float: left; margin-top: -3px; margin-left: 7px">
                  <n-tag v-if="item.artisyuanchuang==1" type="error" style="margin-top: -30px"> 原创 </n-tag>
                  <n-tag v-if="item.artistop==1"  type="warning" style="margin-top: -30px;margin-left:5px"> 置顶 </n-tag>
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
                <div style="float: left; overflow: hidden" class="hoverclass-an">
                  <div  style="float: left; margin-top: 2px; margin-right: 3px">
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
                  <div style="float: left">{{item.artAuthor}}</div>
                </div>
                <div style="float: left; overflow: hidden; margin-left: 12px" class="hoverclass-an">
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
                  <div style="float: left">{{filtertime(item.createdAt)}}</div>
                </div>
                <div style="float: left; overflow: hidden; margin-left: 12px" class="hoverclass-an">
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
                <div style="float: left; overflow: hidden; margin-left: 12px" class="hoverclass-an">
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
                <div class="hoverclass-an" @click="lookart(item.artId)">
                  <n-ellipsis line-clamp="3" :tooltip="false">
                 {{item.arttext}}
                  </n-ellipsis>
                </div>
              </div>
            </div>
            <div style="float:right;margin-bottom:10px ">
              <n-pagination
                v-model:page="page"
                v-model:page-size="pageSize"
                :page-count="pagebtnnum"
                show-size-picker
                :page-sizes="pageSizes"
                :on-update:page="pagechenge"
                :on-update:page-size="pagechenge1"
              />
            </div>
          </div>
        </n-grid-item>
        <n-grid-item span="24 550:0 900:6 1350:4">
          <div class="green">
              <div class="centerart-right">
              <div style="overflow: hidden; font-size: 22px; color: #9b9baa">
                <div style="float: left; margin-top: 4px; margin-right: 3px">
                  <n-icon size="22"
                    ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512zm66.85-254.84z" fill="currentColor"></path><path d="M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.31 7.31 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.31 7.31 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176z" fill="currentColor"></path><path d="M400 256a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256z" fill="currentColor"></path></svg></n-icon>
                </div>
                <div style="float: left">心情</div>
              </div>
              <div style="margin-top: 4px">
                <n-timeline >
    <n-timeline-item type="warning" title="🌟突发奇想写一个博客" content="😅首先排除为了给女朋友显摆" />
    <n-timeline-item
      type="success"
      title="🎉开工开工冲冲冲！"
      content="😅趁着还没摆烂"
      time="2022-03-26 "
      line-type="dashed"
    />
    <n-timeline-item content="✊疯狂更新中" />
  </n-timeline>
              </div>
            </div>
            <div class="centerart-right">
              <div style="overflow: hidden; font-size: 22px; color: #9b9baa">
                <div style="float: left; margin-top: 4px; margin-right: 3px">
                  <n-icon size="22"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <path d="M128 128h256v38H128z" fill="currentColor"></path>
                      <path d="M112 192h288v38H112z" fill="currentColor"></path>
                      <path
                        d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z"
                        fill="currentColor"
                      ></path></svg
                  ></n-icon>
                </div>
                <div style="float: left">文章分类</div>
              </div>
              <div style="margin-top: 4px">
                
                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:7px" >
                  <div style="float: left" class="hoverclass-an">随笔</div>
                  <div style="margin-top: -2px; float: right">
                    <n-tag round size="small" :color="{ color: '#8e8e9c', textColor: '#1d1d1f' }">2</n-tag>
                  </div>
                </div>
                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:7px">
                  <div style="float: left" class="hoverclass-an">前端学习</div>
                  <div style="margin-top: -2px; float: right">
                    <n-tag round size="small" :color="{ color: '#8e8e9c', textColor: '#1d1d1f' }">13</n-tag>
                  </div>
                </div>
                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:7px">
                  <div style="float: left" class="hoverclass-an">后端技术</div>
                  <div style="margin-top: -2px; float: right">
                    <n-tag round size="small" :color="{ color: '#8e8e9c', textColor: '#1d1d1f' }">4</n-tag>
                  </div>
                </div>
                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:7px">
                  <div style="float: left" class="hoverclass-an">实用技巧</div>
                  <div style="margin-top: -2px; float: right">
                    <n-tag round size="small" :color="{ color: '#8e8e9c', textColor: '#1d1d1f' }">23</n-tag>
                  </div>
                </div>
                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:5px">
                  <div style="float: left" class="hoverclass-an">突发灵感</div>
                  <div style="margin-top: -2px; float: right">
                    <n-tag round size="small" :color="{ color: '#8e8e9c', textColor: '#1d1d1f' }">7</n-tag>
                  </div>
                </div>
                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:5px">
                  <div style="float: left" class="hoverclass-an">Pyhton爬虫</div>
                  <div style="margin-top: -2px; float: right">
                    <n-tag round size="small" :color="{ color: '#8e8e9c', textColor: '#1d1d1f' }">7</n-tag>
                  </div>
                </div>
                                <div style="overflow: hidden; color: #777780; font-size: 16px;margin-bottom:5px">
                  <div style="float: left" class="hoverclass-an">更多...</div>
                </div>

              </div>
            </div>
            <div class="centerart-right">
              <div style="overflow: hidden; font-size: 22px; color: #9b9baa">
                <div style="float: left; margin-top: 4px; margin-right: 3px">
                  <n-icon size="22"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></path>
                      <path
                        d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M230 480l262-262a13.81 13.81 0 0 0 4-10V80"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></path></svg
                  ></n-icon>
                </div>
                <div style="float: left">热门标签</div>
              </div>
              <div style="margin-top: 4px">
                <n-space>
                  <n-tag type="success" style="cursor: pointer"> JavaScript </n-tag>
                  <n-tag type="warning" style="cursor: pointer"> css </n-tag>
                  <n-tag type="warning" style="cursor: pointer"> .NET </n-tag>
                  <n-tag type="info" style="cursor: pointer"> React </n-tag>
                  <n-tag type="error" style="cursor: pointer"> 实用技巧 </n-tag>
                  <n-tag type="success" style="cursor: pointer"> 设计模式 </n-tag>
                  <n-tag type="warning" style="cursor: pointer"> GO </n-tag>
                  <n-tag type="error" style="cursor: pointer"> 鸡汤 </n-tag>
                  <n-tag type="warning" style="cursor: pointer"> Git搬运 </n-tag>
                  <n-tag type="info" style="cursor: pointer"> 恋爱 </n-tag>
                  <n-tag type="success" style="cursor: pointer"> Vue </n-tag>
                  <n-tag type="warning" style="cursor: pointer"> 碎碎念 </n-tag>
                  <n-tag type="error" style="cursor: pointer"> 小程序 </n-tag>
                  <n-tag type="info" style="cursor: pointer"> 日志 </n-tag>
                  <n-tag type="info" style="cursor: pointer"> Python </n-tag>
                  <n-tag type="info" style="cursor: pointer"> 爬坑 </n-tag>
                </n-space>
              </div>
            </div>
          </div>
        </n-grid-item>
          <n-grid-item span="0 550:0 900:1 1350:1">
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>
<style>
.jiazaizhezhao{
  position:fixed;
  top:0px;
  height: 100%;
  z-index: 1000000;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
}
.green {
  height: 800px;
}
.hoverclass{
  cursor: pointer;
  transition:all .3s
}
.hoverclass:hover{
  color: #b6b6c2;
}
.hovericon-wx{
  cursor: pointer;
  transition:all .5s
}
.hovericon-wx:hover{
  color: #58e221;
}
.hovericon-tw{
  cursor: pointer;
  transition:all .5s
}
.hovericon-tw:hover{
  color: #5dbbfa;
}
.hovericon-fb{
  cursor: pointer;
  transition:all .5s
}
.hovericon-fb:hover{
  color: #498ff8;
}
.hovericon-git{
  cursor: pointer;
  transition:all .5s
}
.hovericon-git:hover{
  color: #a3a3a3;
}

.hovericon-ds{
  cursor: pointer;
  transition:all .5s
}
.hovericon-ds:hover{
  color: #b93bd8;
}

.hoverclass-an{
  transition:all .3s;
  cursor: pointer
}
.hoverclass-an:hover{
  color: #878791;
}
.bgimg {
  height: 550px;
  width: 100%;
  /* background-image: url(https://pic.dogimg.com/2022/04/12/6254d5fff1db8.png); */
  background-image: url(https://pic.dogimg.com/2022/04/12/6254d541034ba.png);
}

.footer{
  color: #777780;
  text-align: center;
  line-height: 40px;
  height: 30px;
  background-color: #18181c;
}
.centerart {
  padding: 20px;
  background-color: #1d1d1f;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}
.centerart-right {
  padding: 13px;
  background-color: #1d1d1f;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}
</style>
<script>

import MdEditor from 'md-editor-v3';
import axios from "axios";
import 'md-editor-v3/lib/style.css';
export default ({
   components: { MdEditor },
  data() {
    return {
      createdatecha:'18天11小时3分钟59秒',
      page: 1,
      show:true,
      pageSize: 5,
      artlistdata:[],
      artcount:0,
      pagebtnnum:0,
    };
  },
  setup() {
    const pageSizes = [
      {
        label: "5 每页",
        value: 5,
      },
      {
        label: "10 每页",
        value: 10,
      },
      {
        label: "20 每页",
        value: 20,
      },
    ];
    return {
      time: new Date(0),
      pageSizes,
    };
  },
  methods:{
         filtertime(value) {
         return value.substring(0, 10);
      },
      lookart(e){
        this.$router.push({
          path: `/Article/${e}`,
});
      },
    pagechenge1(e){
      this.pageSize =e
      this.page = 1
      this.getartlist()
    },
    pagechenge(e){
      this.page = e

      this.getartlist()
    },
    shijiancha (beginTime, endTime) {
      var dateBegin = new Date(beginTime);
      var dateEnd = new Date(endTime);
      var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
      var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000);
      this.seconds = seconds;
      this.minutes = minutes;
      return dayDiff +
          "天" +
          hours +
          "小时" +
          minutes +
          "分钟" +
          seconds +
          "秒"
    },
    getartlist(){
      this.show = true
       axios
          .get("/api/OptArtlists/GetOptArtlistsbypage?page="+this.page+"&rows="+this.pageSize)
          .then((res) => {
            this.artcount = res.data.rowscount
            this.artlistdata = res.data.datalist
            this.pagebtnnum = Math.floor(this.artcount /this.pageSize)
      this.show = false
          });
    },
     setTimer() {
　　　　this.timer = setInterval( () => {
    var lsdate = this.shijiancha('2022-3-26',new Date())
      this.createdatecha =lsdate
　　　　　　}, 1000);
　　},
  },
  mounted() {
    this.getartlist();
    this.setTimer()
   
  },
});
</script>
