<template>
	<view>
	<view class="search">
		<u-search placeholder="请输入房屋信息"></u-search>
	</view>
	<sellpage></sellpage>
	</view>
</template>

<script>
	import sellpage from '../sell/sellpage.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			sellpage,
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
