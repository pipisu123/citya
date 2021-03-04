<template>
  <view class="content">
	  <view class="address">
		<view class="map1">
			<u-icon name="map"></u-icon>
		</view>
	  	<text>茂名</text>
	  </view>
	 <view class="seach">
	 	 <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
	 </view>
  </view>
</template>

<script>
export default {
 data(){
   return{
      
  }
},
methods:{
	
	
},
}
</script>

<style scoped lang="scss">
.content{
	display: flex;
	.seach{
		width: 85%;
	}
	.address{
		display: flex;
		margin-top: 10rpx;
		
	}
}
</style>