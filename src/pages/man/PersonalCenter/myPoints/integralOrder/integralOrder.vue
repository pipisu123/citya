<template>
	<view>
		<view>
			<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<view class="">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部'
				 },
				{
					name: '待付款'
				}, {
					name: '已完成'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			};
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
				this.current = index;
				console.log(index)
			},
		}
	};
</script>

<style lang="scss">
.order{
	width: 100%;
	height: 300px;
	background-color: #007AFF;
}
</style>
