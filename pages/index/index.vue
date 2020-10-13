<template>
    <view>
<!-- 		<bar :nav="setNav"></bar> -->
		<!-- 轮播图 -->
    <view class="home-page">
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item"><image src="../../static/img/banner01.jpg" mode=""></image></view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item"><image src="../../static/img/banner02.jpg" mode=""></image></view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item"><image src="../../static/img/banner03.jpg" mode=""></image></view>
                        </swiper-item>
						<swiper-item>
						    <view class="swiper-item"><image src="../../static/img/banner04.jpg" mode=""></image></view>
						</swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
		<!-- 导航 -->
      <top-nav :nav="navtext"></top-nav>
		   <view class="gray-line">
				
		   </view>
		  <!-- 列表 -->
		  <view class="news-list">
			   <view class="news-list-content"><text class="news-list-title">“超跑GK5”喜迎换代！本田新一代飞度亮相2019东京车展</text></br>
           <text class="author">Healer 7分钟前</text>
         </view>
			   <view class="news-list-pic"><image src="../../static/img/car01.jpg" mode=""></image></view>
		  </view>
      <view class="news-list">
         <view class="news-list-content"><text class="news-list-title">“超跑GK5”喜迎换代！本田新一代飞度亮相2019东京车展</text></br>
           <text class="author">Healer 7分钟前</text>
         </view>
         <view class="news-list-pic"><image src="../../static/img/car01.jpg" mode=""></image></view>
      </view>
      <view class="news-list">
         <view class="news-list-content"><text class="news-list-title">“超跑GK5”喜迎换代！本田新一代飞度亮相2019东京车展</text></br>
           <text class="author">Healer 7分钟前</text>
         </view>
         <view class="news-list-pic"><image src="../../static/img/car01.jpg" mode=""></image></view>
      </view>
      <view class="news-list">
         <view class="news-list-content"><text class="news-list-title">“超跑GK5”喜迎换代！本田新一代飞度亮相2019东京车展</text></br>
           <text class="author">Healer 7分钟前</text>
         </view>
         <view class="news-list-video">
                <video id="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
          </view>
      </view>
      </view>
	</view>
</template>

<script>
  // import bar from '../../components/bar.vue';
  import topNav from '../../components/navigation.vue'
	export default {
        components:{
    			topNav
    		},
	    data() {
	        return {
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500,
             // 自定义导航栏对象
               setNav:{
              'bg':'#ffffff',  //背景色
              'color':'red',  //字体颜色
              'isdisPlayNavTitle':false, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
              // 然后有些页面不需要的东西通过条件控制进行显示与隐藏
              'navTitle':'懂车帝', //导航标题
              'imgUrl':'../static/logo.png'
              },
              // 导航
              navtext:[{
                   name:'全部车型',
                   imgUrl:'/static/img/carType.png'
              },
              {
                   name:'拍照识车',
                   imgUrl:'/static/img/camera.png'
              },
              {
                   name:'新车发布',
                   imgUrl:'/static/img/newCar.png'
              },
              {
                   name:'销量排行',
                   imgUrl:'/static/img/trophy.png'
              }],
	        }
	    },
	    methods: {
	        changeIndicatorDots(e) {
	            this.indicatorDots = !this.indicatorDots
	        },
	        changeAutoplay(e) {
	            this.autoplay = !this.autoplay
	        },
	        intervalChange(e) {
	            this.interval = e.target.value
	        },
	        durationChange(e) {
	            this.duration = e.target.value
	        }
	    }
	}
</script>
<style lang="stylus">
    .home-page
      .swiper 
        height:300upx;
        margin-top:10upx;
        .swiper-item 
          display: block;
          height: 300upx;
          line-height: 300upx;
          text-align: center;
          image 
            width:100%;
            height:290upx;
            border-radius: 10upx;
      // 导航
		.navigation  
        display :flex;
        margin-top :20upx;
        justify-content: space-around;
        .car-type
        .camera
        .new-car
        .trophy
          text-align :center
          image
            width:64upx;
            height:64upx;
      .gray-line
        width:750upx;
        height:10upx;
        background-color: #F2F2F2;
        margin-top:20upx;		
      // 新闻列表	
      .news-list
        width:710upx;	
        display:flex;
        margin:0 20upx;
        padding:35upx 0;
        box-sizing: border-box;
        border-bottom:2upx solid #F2F2F2;
        .news-list-content
          width:80%;
          height:100%;
          .news-list-title
           font-size:16px;
           color:#333333;
          .author
           color:#B6B6B6
        .news-list-pic
          width:200upx;
          height:100upx;
          margin-left:10upx;
          image
            width:200upx;
            height:100upx;
            vertical-align:middle;
        .news-list-video
          width:200upx;
          height:100upx;
          margin-left:10upx;
          video
            width:200upx;
            height:100upx;
        
</style>
