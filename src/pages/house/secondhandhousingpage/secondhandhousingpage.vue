<template>
	<view class="wrap">
		<u-swiper :list="list" mode="number" indicator-pos="bottomCenter" height=520 title=true effect3d-previous-margin=45></u-swiper>
		<view class="text" >
			<view class="u-font-36 $u-main-color" >
			<text>出售|双山二路花园小区电梯房首次出租,精装修拎包入住</text>
			<view class="u-font-30">
			<text>价格：208万</text>
		</view>
		</view>
		</view>
		<banner></banner>
		<navi></navi>
		<ttex></ttex>
		<banne></banne>	
	</view>
</template>

<script>
	import banner from '../secondhandhousingpage/banner.vue'
	import navi from '../secondhandhousingpage/navi.vue'
	import ttex from '../secondhandhousingpage/ttex.vue'
	import banne from '../secondhandhousingpage/banne.vue'
	export default {
		data() {
			return {
				list: [{
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fk.zol-img.com.cn%2Fdcbbs%2F12466%2Fa12465655_s.jpg&refer=http%3A%2F%2Fk.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616987758&t=fcb1ac7b436c6adb7f444381bd21ddb9',
					},
					{
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.aiimg.com%2Fuploads%2Fuserup%2F1304%2F14123605E21.jpg&refer=http%3A%2F%2Fwww.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616987758&t=8c4c22baaa1c4d6fdf4db48afebbf621',	
					},
					{
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F130717%2F325755-130gg2402272.jpg&refer=http%3A%2F%2Fwww.juimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616987758&t=7dd242f99926ea139f87e0fd6660c12b',
					}
				],
			}
		},
		components:{
			banner,
			navi,
			ttex,
			banne
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 10rpx;
	}
</style>