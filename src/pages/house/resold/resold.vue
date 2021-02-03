<template>
	<view>
	<view class="search">
		<u-search placeholder="请输入房屋信息"></u-search>
	</view>
	<se></se>
	<page></page>
	</view>
</template>

<script>
	import se from '../resold/se.vue'
	import page from '../resold/page.vue'
	export default {
		data() {
			return {
				
			}
		},
		 components:{
			 se,
			 page
			 
		 },
		methods: {
		
			
		}
	}
</script>

<style>

</style>
