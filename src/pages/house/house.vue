<template>
	<view>
		<view class="search">
			<u-search placeholder="请输入房屋信息"></u-search>
		</view>
	<Grid></Grid>
	<swippe></swippe>
	<fz></fz>
	<ym></ym>
	<bar></bar>
	</view>
</template>

<script>
	import Grid from './bar/Grid.vue';
	import swippe from './bar/swippe.vue'
	import fz from './bar/fz.vue'
	import ym from './bar/ym.vue'
	import bar from './bar/bar.vue'
	
	
	export default {
		data() {
			return {
				
			}
		},
		 components: {
				  Grid,
				  swippe,
				  fz,
				  ym,
				  bar
				 
				
				 
		        },
		methods: {
			
				
			
			
		}
	}
</script>

<style lang="scss">
	.search{
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