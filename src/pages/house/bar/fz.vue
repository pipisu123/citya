<template>
	<view class="wage">
		<u-dropdown ref="uDropdown" @open="open" @close="close">
			<u-dropdown-item v-model="value1" title="区域" :options="options1" @change="change"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="价格" :options="options2"></u-dropdown-item>
		<u-dropdown-item v-model="value3" title="户型" :options="options3"></u-dropdown-item>
		</u-dropdown>
		<view class="wages"@click="show = true">
		更多
		</view>
		<u-popup  v-model="show" width=600>
			<u-form-item :leftIconStyle="{color: '#a0cfff', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="电梯" prop="cou">
				<u-radio-group v-model="value" @change="radioGroupChange">
							<u-radio 
								@change="radioChange" 
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#a0cfff', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="朝向" prop="cour">
				<u-radio-group v-model="value" @change="radioGroupChange">
							<u-radio 
								@change="radioChange" 
								v-for="(item, index) in list" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#a0cfff', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="朝向" prop="court">
				<u-radio-group v-model="value" @change="radioGroupChange">
							<u-radio 
								@change="radioChange" 
								v-for="(item, index) in list2" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
			</u-form-item>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				value1: 1,
				value2: 2,
				value3: 3,
				value4: 4,
				list1: [
								{
									value:'1',
									name: '有',
									disabled: false
								},
								{
									value:'0',
									name: '没',
									disabled: false
								},
							],
							list: [
											{
												name: '东',
												checked: false,
												disabled: false
											},
											{
												
												name: '南',
												checked: false,
												disabled: false
											},
											{
												
												name: '西',
												checked: false,
												disabled: false
											},
											{
												
												name: '北',
												checked: false,
												disabled: false
											},
											{
											
												name: '东南',
												checked: false,
												disabled: false
											},
											{
												
												name: '东北',
												checked: false,
												disabled: false
											},
											{
												
												name: '西南',
												checked: false,
												disabled: false
											},
											{
												
												name: '西北',
												checked: false,
												disabled: false
											},
											{
												
												name: '南北',
												checked: false,
												disabled: false
											},
											{
												
												name: '东西',
												checked: false,
												disabled: false
											},
										],
									list2: [
													{
														value:'0',
														name: '整租',
														disabled: false
													},
													{
														value:'1',
														name: '合租',
														disabled: false
													},
												],	
										
				options1: [{
						label: '不限',
						value: 0,
					},
					{
						label: '电白县',
						value: 1,
					},
					{
						label: '高州县',
						value: 2,
					},
					{
						label: '茂南区',
						value: 3,
					},
					{
						label: '化州县',
						value: 4,
					},
					{
						label: '信宜县',
						value: 5,
					},
					
				],
				options2: [
					{
						label: '不限',
						value: 0,
					},
					{
						label: '0-500',
						value: 1,
					},
					{
						label: '500-1000',
						value: 2,
					},
					{
						label: '1000-2000',
						value: 3,
					},
					{
						label: '2000-3000',
						value: 4,
					},
					{
						label: '3000-4000',
						value: 5,
					},
					{
						label: '5000以上',
						value: 6,
					},
				],
				options3: [{
						label: '不限',
						value: 0,
					},
					{
						label: '一室',
						value: 1,
					},
					{
						label: '二室',
						value: 2,
					},
					{
						label: '三室',
						value: 3,
					},
					{
						label: '四室',
						value: 4,
					},
					{
						label: '五室以上',
						value: 5,
					},
					
				],
			}
		},
		methods: {
			closeDropdown() {
							this.$refs.uDropdown.close();
						},
			open(index) {
				// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
				// 同时内部会自动给当前展开项进行高亮
				this.$refs.uDropdown.highlight();
			},
			close(index) {
				// 关闭的时候，给当前项加上高亮
				// 当然，您也可以通过监听dropdown-item的@change事件进行处理
				this.$refs.uDropdown.highlight(index);
			},
			change() {
				// 更多的细节，如有需要请自行根据业务逻辑进行处理
				// this.$refs.uDropdown.highlight(xxx);
			}
		}
	}
</script>
<style lang="scss">
	.wage{
		width: 100%;
		display:flex;
		 
	}
	.wages{
		padding: 20rpx;
	}
	 
	 
</style>
