<template>
	<view>
		<u-select v-model="show" mode="mutil-column-auto" :list="list" @confirm="confirm"></u-select>
		<button type="default" @click="getCity">dasaaa</button>
	</view>
</template>

<script>
	import { CityList } from '../../util/city.js'
	export default {
		data() {
			return {
				show: false,
				list: [
					{
						value: '',
						label: '',
						children: [
							{
								value: '',
								label: '',
							},
						]
					}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			getCity(){
				CityList({
					
				}).then(res=>{
					console.log(res)
					this.list = res.data.data
					this.show =true
				}).catch(err=>{
					console.log(err)
				})
			},
			confirm(e) {
							console.log(e);
						}
		}
	}
</script>