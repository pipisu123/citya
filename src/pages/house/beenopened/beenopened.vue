<template>
	<view>
	<view class="search">
		<u-search placeholder="请输入楼盘名称或地址"></u-search>
	</view>
		<beenopenedlayout></beenopenedlayout>
		<beenopenedpage></beenopenedpage>
	</view>
</template>

<script>
	import beenopenedlayout from '../beenopened/beenopenedlayout.vue'
	import beenopenedpage from '../beenopened/beenopenedpage.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
		beenopenedlayout,
		beenopenedpage
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
