<template>
	<view>
	<button type="default" @click="btn">求情数据</button>
	</view>
</template>

<script>
	import { recruitment } from '../../util/recruitment.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			btn(){
				recruitment(
				{
				"paging":{
					"page": 0
				}
				}
				).then(res=>{
					console.log(res)
				}).catch(err=>{
					
				})
			}
		}
	}
</script>

<style>

</style>
