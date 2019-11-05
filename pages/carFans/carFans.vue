<template>
  <view>
 	    <!-- 选择列表 -->
      <!-- 
        需要完善的功能：
        点击视频进入详情页面
       -->
       <view class="carfans-top">
            <view :class="['select-list',activeIndex == index?'active':'']" v-for="(item,index) in selectList" :key="index" :data-index="index" @click="handleSelecList(index)">
                {{item.name}}
             </view>
       </view>
       <!-- 用户评价 -->·
         <view class="user-list">
             <view class="user-avatar"><image src="../../static/img/heaed.png" mode=""></image></view>
             <view class="user-right">
               <view class="user-name">Healer</view>
               <view class="user-time">7分钟前</view>
             </view>
             <view class="user-published">
                  <!-- 文字  -->
                 <view class="user-published-text">
                   <!-- 话题 -->         
                      <text class="content"> <text class="topic">#我的超话</text>秋意渐浓，一丝凉意给我们这一夏天燥热不安分的心带来了一份慰藉，然而，这一次简单的访谈又让我们的心重拾热情，这份热情正是来源于我们今天访谈的主人公—— 唐EV车主 Eric先生，他的一丝不苟和侃然正色深深的感染了我们。5800元的奋斗经历 成为我人生不可复制的财富说起今天的主角，我想用一句话来概括：“年少轻狂却不荒唐、执着坚持成就梦想！Eric先生现在是XX视觉创意工作室的CEO，可以说是90后有为的青年代表，现在的他有着幸福的家庭，心仪的事业，但是，他却尝尝会回忆起3年前，他刚刚创业时的日子。
Eric先生是在2016年大学毕业，刚毕业时，他跟平常青年并无两样，也曾对生活有过迷茫和不满，但是，也就是在那时，他仅凭自己对艺术的满腔喜爱和视觉创意的满腔热情，手里拿着家里凑的5800元钱，和兄弟义无反顾的来到了深圳，开始了他们的创业生涯。
                      </text>
                 </view>
                  <!-- 图片或者视频 -->
                  <view class="user-showmap">
                     <!-- 左侧图片 -->
                      <view class="user-showmap-left">
                          <image src="../../static/img/carfans01.jpg" mode=""></image>
                      </view>
                       <!-- 右侧图片 -->
                      <view class="user-showmap-right">
                          <view class="user-showmap-right-top">
                             <image src="../../static/img/carfans02.jpg" mode=""></image>
                          </view>
                          <view class="user-showmap-right-bottom">
                             <image src="../../static/img/carfans03.jpg" mode=""></image>
                          </view>
                      </view>
                  </view>
                  <!-- 来自哪里 -->
             </view>
         </view>
         <view class="clear"></view>
         <view class="user-list">
            <view class="user-avatar"><image src="../../static/img/heaed.png" mode=""></image></view>
            <view class="user-right">
              <view class="user-name">Healer</view>
              <view class="user-time">7分钟前</view>
            </view>
            <view class="user-published">
                 <!-- 文字  -->
                <view class="user-published-text">
                  <!-- 话题 -->         
                     <text class="content"> <text class="topic">#我的超话</text>秋意渐浓，一丝凉意给我们这一夏天燥热不安分的心带来了一份慰藉，然而，这一次简单的访谈又让我们的心重拾热情，这份热情正是来源于我们今天访谈的主人公—— 唐EV车主 Eric先生，他的一丝不苟和侃然正色深深的感染了我们。5800元的奋斗经历 成为我人生不可复制的财富说起今天的主角，我想用一句话来概括：“年少轻狂却不荒唐、执着坚持成就梦想！Eric先生现在是XX视觉创意工作室的CEO，可以说是90后有为的青年代表，现在的他有着幸福的家庭，心仪的事业，但是，他却尝尝会回忆起3年前，他刚刚创业时的日子。
Eric先生是在2016年大学毕业，刚毕业时，他跟平常青年并无两样，也曾对生活有过迷茫和不满，但是，也就是在那时，他仅凭自己对艺术的满腔喜爱和视觉创意的满腔热情，手里拿着家里凑的5800元钱，和兄弟义无反顾的来到了深圳，开始了他们的创业生涯。
                     </text>
                </view>
                 <!-- 图片或者视频 -->
                <view class="user-video">
                        <image src="../../static/img/videoshow01.jpg" mode=""></image>
                        <view class="pause"></view>
                 </view>
            </view>
        </view>
  </view>

</template>

<script>
	export default {
      data() {
        return {
            selectList:[{
              name:'全部'
            },{
              name:'选买'
            },{
              name:'自驾游'
            },{
              name:'车饰'
            },{
              name:'维修保养'
            },{
              name:'改装'
            },{
              name:'用车'
            },{
              name:'二手车'
            },{
              name:'越野'
            },{
              name:'实拍'
            }],
            activeIndex:0
        }
      },
      methods:{
        handleSelecList:function(index) {
            this.activeIndex = index
        }
      }
	}
</script>

<style lang="stylus">
  .clear
    clear:both
  .active
    border:2px solid #333333;
    color:#2F2F2F !important;
    font-weight:bold;
    border:2upx solid #2F2F2F !important;
  .carfans-top
    width:100%;
    display:flex;
    flex-wrap :wrap;
    .select-list
       padding:5upx 30upx;
       box-sizing:border-box;
       border:2px solid #C5C5C5;
       text-align:center;
       margin:10upx 20upx;
       border-radius:50upx;
       color:#878787;
       font-weight:bold;
  .user-list 
    margin-top:40upx;
    .user-avatar
      display:inline-block;
      width:88upx;
      height:88upx;
      border-radius:50upx;
      background-color:#F2F2F2
      margin-left:20upx;
      image
        width:100%;
        height:100%;
        border-radius:50upx;
        vertical-align:bottom;
    .user-right
      display:inline-block;    
      margin-left:20upx;
      .user-name 
        color:#000000;
        font-weight:bold;
      .user-time
        color:#B0B0B0;
   .user-published-text 
      padding:10upx 30upx;
      font-size:16px;
      .content
        display: -webkit-box;
        -webkit-box-orient: vertical;    
        -webkit-line-clamp: 6;    
        overflow: hidden;
        .topic
          color:#007AFF;
          margin-right:10upx;
    .user-showmap
      padding:10px;
      box-sizing:border-box
      .user-showmap-left
        width:408upx;
        height:400upx;
        margin-right:10upx;
        float:left;
        image
          width:100%;
          height:100%;
      .user-showmap-right
        float:right;
        .user-showmap-right-top 
          width:290upx;
          height:200upx;
          image
           width:100%;
           height:100%;
        .user-showmap-right-bottom
          width:290upx;
          height:190upx;
          margin-top:10upx;
          image 
            width:100%;
            height:100%;
    .user-video  
         position:relative;
         width 50%;
         padding:10px;
         box-sizing:border-box
         image  
           width:100%;
           height:686upx;
        .pause
           width:80upx;
           height:80upx;
           border-radius:50%;
           background-color: rgba(0,0,0,.4);
           position:absolute;
           left:50%;
           top:50%;
           margin-left:-40upx;
           margin-top:-40upx;
           &:after
             content: "";
             width: 20px;
             height: 20px;
             position: absolute;
             left: 50%;
             top: 50%;
             margin-left: -10px;
             margin-top: -10px;
             background:url(../../static/img/bofang.png)
             background-size: contain;
</style>
