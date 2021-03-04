<template>
	<view>

	<view class="search">
		<u-search placeholder="请输入房屋信息"></u-search>
	</view>
	<se></se>
	<page></page>
	<!-- <BottomBar></BottomBar> -->
		

	</view>
</template>

<script>

	import se from '../resold/se.vue'
	import page from '../resold/page.vue'
	// import BottomBar from '../resold/BottomBar.vue'

	export default {
		data() {
			return {
				
			}
		},

		 components:{
			 se,
			 page,
			 // BottomBar
			 
		 },
		methods: {
			
		}
	}
</script>

<style>

</style>
