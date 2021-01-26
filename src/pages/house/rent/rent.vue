<template>
	<view>
		
		<view class="search">
			<u-search placeholder="请输入房屋信息"></u-search>
		</view>
		<u-line color="blue" />
			
			<!-- /* 等同于 */ -->
			<u-line color="blue"></u-line>
			<u-line class="dotted"></u-line>
	<rentout></rentout>
	<housing></housing>
	<housingnvai></housingnvai>
	</view>
</template>

<script>
	import rentout from '../rent/rentout.vue'
	import housing from '../rent/housing.vue'
	import housingnvai from '../rent/housingnvai.vue'
	export default {
		data() {
			return {
				
			}
		},
		 components:{
			 rentout,
			 housing,
			 housingnvai
		 },
		methods: {
			
		}
	}
</script>

<style>

</style>
