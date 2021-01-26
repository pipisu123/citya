<template>
		<view class="wrap">
			<u-swiper :list="list" effect3d="true" height=320 title=true effect3d-previous-margin=35></u-swiper>
		</view>
</template>

<script>
	export default {
			data() {
				return {
					list: [{
							image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F07%2F20161007141756_BMwUL.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613978519&t=e001b69f14f6bcad727ca880846c9112',
							title: ''
						},
						{
							image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0117%252F14b826e9p00qn2fh2008ec000he0071c.png%26thumbnail%3D660x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613978606&t=5cc8529c772d57f9c1d61124fced630a',
							title: ''
						},
						{
							image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0117%252F61c32d79j00qn2fh2000qc000hr006fc.jpg%26thumbnail%3D660x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613979164&t=2d01e418c5acd56ebb2c4fe7cc9e479a',
							title: ''
						}
					],
				}
			},
			methods: {
	
			}
		}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20rpx 10rpx;
	}
</style>
