<template>
	<view class="publicitem">
		<view class="nav" >
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navclick(item.path)">
				<view>
					<image :src="item.src" mode="" style="width: 50rpx;height: 50rpx;"></image>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				navs:[
					{
						src:'../../../static/80.jpg',
						title: '租房发布',
					     path: '/pages/house/forrent/forrent'
					},
					{
						src: '../../../static/17.jpg',
						title: '二手房发布',
						path: '/pages/house/secondhandhousingrelease/secondhandhousingrelease'
					},
					{
						src: '../../../static/90.jpg',
						title: '新房发布',
						path: '/pages/house/newpupups/newpupups'
					},
					{
						src: '../../../static/70.jpg',
						title: '商铺发布',
						path: '/pages/house/forrent/forrent'
					},
				]
			}
		},
		methods: {
			navclick(url){
				console.log(url)
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" >
	.publicitem{
		background-color: #F1F1F1;
		height: 160px;
	}
	.nav{
		display: flex;
	    flex-wrap: wrap;
		.nav-item{
			width: 25%;
			text-align: center;
			view{
				width: 90rpx;
				height: 80rpx;
				background-color:#F1F1F1;
				margin: 8rpx auto;
				line-height: 110rpx;
				color: #fff;
				font-size: 50rpx;
			}
			text{
				font-size: 20rpx;
			}
		}
	}
</style>
