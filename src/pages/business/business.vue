<template>
	<view>
<<<<<<< HEAD
	商家lk111阿萨德撒吃的
=======
	<button type="default" @click="btn">求情数据</button>
>>>>>>> aace846f24cb0dbd839a8cad243ce0ef139ea1ae
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
