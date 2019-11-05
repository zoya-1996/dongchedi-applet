<template>
  <view>
    <!-- 右侧的字母加导航 -->
   <view :class="[isIphoneX?'isIphoneStyle':'right-nav']">
         <view :class="{active:active}" style="font-size: 12px;" @click="hadleClickTop">选</view> 
         <view :class="[isIphoneX?'isIphoneStyleCode':'code',activeIndex == index?'active':'']" v-for="(item,index) in cityList" :key="item.code" :data-code="item.code" :data-index="index" @click="getCurrentCode">
            {{item.code}}
         </view>
   </view>
   <!-- 字母框 -->
   <view class="citylayer" v-show="isShowCityLayer">
        {{codeKey}}
   </view>
    <!-- 选车导航 -->
   <scroll-view scroll-with-animation="true" scroll-y="true" :scroll-top="scrollTop" :style="{height:scrollHeight +'px'}" @scroll="scroll" :scroll-into-view="codeKey">
    <top-nav :nav="navtext" ></top-nav>
    <!-- 车型  -->
    <view class="automobile">
      <view class="car-price">10-15万</view>
      <view class="car-price">轿车</view>
      <view class="car-price">SUV</view>
      <view class="car-price">国产车</view>
    </view>
    <view class="automobile-type">
      <view>
        <image src="../../static/img/dazhong.png" mode=""></image>
        <view class="">大众</view>
      </view>
      <view>
        <image src="../../static/img/fengtian.png" mode=""></image>
        <view class="">丰田</view>
      </view>
      <view>
        <image src="../../static/img/bentian.png" mode=""></image>
        <view class="">本田</view>
      </view>
      <view>
        <image src="../../static/img/aodi.png" mode=""></image>
        <view class="">奥迪</view>
      </view>
    </view>
    <!-- 汽车展示 -->
    <view class="automobile-show">
          <view class="automobile-show-img" v-for="(item,index) in automobileShowlist" :key="index">
              <image :src="item.imgUrl"></image>
              <view class="">{{item.name}}</view>
          </view>    
    </view>
    <!-- 汽车显示列表 -->
      <view class="block"></view>
      <!-- 通过id控制scroll-into-view滚动到每个id上 -->
      <view class="city-box" v-for="item in cityList" :key="item.code" :id="item.code">
              <view class="city-code">{{item.code}}</view>
              <view class="city-list" v-for=" (item,index) in item.cityList" :key="index">{{item}}</view>
      </view>
   </scroll-view>
  </view>
</template>

<script>
  import topNav from '../../components/navigation.vue'
  import {city} from '../../common/city.js'
  export default {
    components: {
      topNav,
    },
    data() {
      return {
        navtext: [{
            name: '销量排行',
            imgUrl: '/static/img/trophy.png'
          },
          {
            name: '新车发布',
            imgUrl: '/static/img/newcar.png'
          },
          {
            name: '热门排行',
            imgUrl: '/static/img/huomiao.png'
          },
          {
            name: '条件选车',
            imgUrl: '/static/img/search.png'
          }
        ],
        // 汽车展示
        automobileShowlist:[{
          name: '速腾',
          imgUrl: '../../static/img/car-suteng.png'
        },
        {
          name: 'LA FESTA 菲斯塔',
          imgUrl: '../../static/img/aifeita.png'
        },
        {
          name: '凯美瑞',
          imgUrl: '../../static/img/kaimeirui.png'
        },
        {
          name: '奥迪A4',
          imgUrl: '../../static/img/aodiA4.png'
        },
        {
          name: '卡罗拉',
          imgUrl: '../../static/img/kaluola.png'
        },
        {
          name: '思域',
          imgUrl: '../../static/img/siyu.png'
        }],
        cityList:[],
        activeIndex:-1,
        active:false,
        scrollTop:0,
        scrollHeight:0,
        old:{
          scrollTop:0
        },
        codeKey:'',
        isShowCityLayer:false,
        isIphoneX:false
      }

    },
    mounted() {
      console.log(city)
      this.cityList = city
      this.handleScrollHeight()
      this.handleAdapterIphoneX()
    },
    methods:{
      // 回到顶部
      hadleClickTop:function() {
        this.active = true
        this.activeIndex = -1
        this.scrollTop = this.old.scrollTop
        this.$nextTick(function(){
            this.scrollTop = 0
        })
      },
      // 字母导航
      getCurrentCode:function(e) {
        console.log(e.currentTarget.dataset.code)
        let index = e.currentTarget.dataset.index
        let codeKey = e.currentTarget.dataset.code
        // 获取字母的值
        this.codeKey = codeKey
        this.activeIndex = index
        
        // 选中字母的时候其他按钮不显示
        this.active =false 
        // 点击字母的时候显示字母的圆框
        this.isShowCityLayer =true
        // 过5毫秒后隐藏字母框
        setTimeout(()=>{
             this.isShowCityLayer = false;
        },500)
      },
 
      scroll:function(e) {
            console.log(e)
            this.old.scrollTop = e.detail.scrollTop
        },
        // 获取页面的高度
        handleScrollHeight:function() {
            var that = this
            uni.getSystemInfo({
              success:function(res){
                  console.log(res)
                  that.scrollHeight = res.windowHeight
              }
            })
        },
        // 适配iPhone X的高度
        handleAdapterIphoneX:function() {
            let that = this
            uni.getSystemInfo({
               success: function(res) {
                if (res.model.indexOf('iPhone X') != -1) {
                    that.isIphoneX = true;
                }
              }
            })　
        }
    }
  }
</script>

<style lang="stylus">
  .active
    background-color:#F2F2F2;
    border-radius:40upx;
  .isIphoneStyle
    width: 40upx;
    color: #888;
    text-align: center;
    position: fixed;
    bottom: calc(70vw / 7.5);
    right: 0;
    z-index: 9;
  .isIphoneStyleCode
     border-radius:40upx;
     font-size: 24upx;
     line-height:1.9
  .citylayer
    width:120upx;
    height:120upx;
    line-height:120upx;
    border-radius:50%;
    background-color:#FFFFFF;
    border:2upx solid #F2F2F2;
    -moz-box-shadow:0px 0px 9px #F2F2F2; 
    -webkit-box-shadow:0px 0px 9px #F2F2F2; 
    box-shadow:0px 0px 9px #F2F2F2;
    color:#333333;
    font-weight:bold;
    font-size:28px;
    text-align:center;
    position: fixed;
    top: calc(50% - 80px);
    left:calc(50% - 10px);
    z-index:11
  .right-nav
    width: 40upx;
    color: #888;
    text-align: center;
    position: fixed;
    bottom: 10upx;
    right: 0;
    z-index: 9;
    .code 
     border-radius:40upx;
     font-size: 24upx;
     line-height:1.7
  .automobile
     display:flex;
     justify-content:space-around;
     margin-top:40upx;
     color:#333333;
    .car-price 
       padding:10upx 20upx;
       border:2upx solid #F2F2F2;
       text-align :center;
  .automobile-type 
    display:flex;
    justify-content:space-around;
    margin-top:40upx;
    color:#333333;
    view
     text-align :center;
    image
     width:64upx;
     height:64upx;
     // 车型展示
  .automobile-show
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top:20upx;
    .automobile-show-img
       text-align:center;
       margin:10upx 0;
       view
         text-align:center;
       image
        width:200upx;
        height:150upx;
  .block
    width:100%;
    height:70upx;
  .city-box
    width:100%;
    .city-code
      height:40upx;
      line-height:40upx;
      padding-left:25upx;
      box-sizing:border-box;
      background-color:#F2F2F2;
      opacity:.3
    .city-list
      padding:20upx 25upx;
      box-sizing:border-box;
      
</style>
