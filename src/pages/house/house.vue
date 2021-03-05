<template>
	<view>
		<template v-if="show">
			<view>
				<view class="searchbar">
					<view class="address">
						<view>
							<u-icon name="map"></u-icon>
						</view>
						<text>茂名</text>
					</view>
					<view class="seach">
						<u-search placeholder="请输入工作或房屋信息"></u-search>
					</view>
				</view>
				<Grid></Grid>
				<swippe></swippe>
				<fz></fz>
				<ym></ym>
			</view>
		</template>
		<template v-else-if="show1">
			<view class="EC_mr15">
				第二页
			</view>
		</template>
		<template v-else-if="show2">
			<view>
				<view class="EC_mr15">
					选择发布类型
				</view>
				<rental></rental>
			</view>
		</template>
		<template v-else-if="show3">
			<view class="EC_mr15">
				第四页
			</view>
		</template>
		<template v-else-if="show4">
			<view>
				<view class="EC_mr15">

				</view>
				<mypage></mypage>
			</view>
		</template>
		<bar @Clickitem="Clickitem"></bar>
	</view>
</template>

<script>
	import Grid from './bar/Grid.vue';
	import swippe from './bar/swippe.vue'
	import fz from './bar/fz.vue'
	import ym from './bar/ym.vue'
	import bar from './bar/bar.vue'
	import rental from './rental/rentalissue.vue'
	import mypage from './mypage/mypage.vue'





	export default {
		data() {
			return {
				show: true,
				show1: false,
				show2: false,
				show3: false,
				show4: false,
			
			}
		},
		components: {
			Grid,
			swippe,
			fz,
			ym,
			bar,
			rental,
			mypage




		},
		onLoad() {
		
			uni.chooseLocation({
				
			    success: function (res) {
					console.log(res)
			        console.log('位置名称：' + res.name);
			        console.log('详细地址：' + res.address);
			        console.log('纬度：' + res.latitude);
			        console.log('经度：' + res.longitude);
			    }
			});
			
		},
		
		methods: {
			Clickitem(index) {
				// console.log(index)
				switch (index) {
					case 0:
						this.show = true;
						this.show1 = false;
						this.show2 = false;
						this.show3 = false;
						this.show4 = false;
						break;
					case 1:
						this.show = false;
						this.show1 = true;
						this.show2 = false;
						this.show3 = false;
						this.show4 = false;
						break;
					case 2:
						this.show = false;
						this.show1 = false;
						this.show2 = true;
						this.show3 = false;
						this.show4 = false;
						break;
					case 3:
						this.show = false;
						this.show1 = false;
						this.show2 = false;
						this.show3 = true;
						this.show4 = false;
						break;
					case 4:
						this.show = false;
						this.show1 = false;
						this.show2 = false;
						this.show3 = false;
						this.show4 = true;
						break;
				}
			},



		}
	}
</script>

<style lang="scss">
	.searchbar {
		display: flex;
		border-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		width: 100%;
		z-index: 9;
		background-color: #5785E5;
		padding-bottom: 10rpx;

		.address {
			display: flex;
			margin-top: 10rpx;
		}

		.seach {
			width: 88%;
		}
	}

	.search {
		border-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		background-color: #5785E5;
		padding-bottom: 10rpx;
	}
</style>
