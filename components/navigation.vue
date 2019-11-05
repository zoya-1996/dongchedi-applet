<template>
	<view>
		<view class="navigation">
			<view class="car-type" v-for="item in nav" :key="item.index">
				 <image :src="item.imgUrl" mode=""></image>
				 <view>{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
    props:["nav"],
		data() {
			return {
			};
		}
	}
</script>

<style lang="stylus">
   // 导航
   .navigation  
     display :flex;
     margin-top :20upx;
     justify-content: space-around;
     .car-type
       text-align :center
       image
         width:64upx;
         height:64upx;
</style>
