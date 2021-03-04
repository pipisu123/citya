<template>
	<view>
		<!-- 招聘首页 -->
		<template v-if="show">
			<!-- 搜索栏 -->
			<view class="search">
				<u-search placeholder="请输入职位或公司名称" v-model="value" @custom="custom"></u-search>
			</view>
			<!-- <view class="top">
				<Recruitment></Recruitment>
			</view> -->
			<!-- 轮播图 -->
			<view class="top">
				<swipper></swipper>
			</view>
			<!-- 广告通知 -->
			<notice></notice>
			<!-- 条件选择招聘列表 -->
			<RecruitmentBar @cityChange="cityChange" @wagesChange="wagesChange" @worktype="worktype" @industryselect="industryselect"></RecruitmentBar>
			<!-- 招聘发布列表 -->
			<view>
				<view v-if="list.length ===0">
					<u-empty text="暂无数据" mode="search" margin-top=200></u-empty>
				</view>
				<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="lower">
					<Recruitmentlist :list="list" @itemClick="goDetail"></Recruitmentlist>
					<u-loadmore :status="status" v-model="showLoad" :load-text="loadText" />
				</scroll-view>
			</view>
		</template>

		<!-- 招聘人才库 -->
		<template v-else-if="show1">
			<view class="">
				<!-- 轮播图 -->
				<swipper></swipper>
				<!-- 个人简历列表 -->
				<ResumeList></ResumeList>
			</view>
		</template>
		<!-- 招聘发布 -->
		<template v-else-if="show2">
			<view>
				<Public></Public>
			</view>
		</template>
		<!-- 招聘职位 -->
		<template v-else-if="show3">
			<view class="ss">
				<Position></Position>
			</view>
		</template>
		<!-- 招聘个人中心 -->
		<template v-else-if="show4">
			<view class="me">
				<me></me>
			</view>
		</template>

		<!-- 底部导航栏 -->
		<Bottombar @Clickitem="Clickitem"></Bottombar>
		<u-toast ref="uToast" />
		
	</view>

</template>

<script>
	// import Recruitment from './childComps/Recruitment.vue';
	import swipper from '../components/swipper.vue'
	import notice from '../components/notice.vue'
	import RecruitmentBar from './childComps/RecruitmentBar.vue'
	import Recruitmentlist from './childComps/Recruitmentlist.vue'
	import Bottombar from './childComps/Bottombar.vue'
	import me from './PersonalCenter/me.vue'
	import ResumeList from './Talentpool/ResumeList.vue'
	import Position from './Position/position.vue'
	import Public from '../PubRecruitment/PubRecruitment.vue'

	import {
		recruitmentList
	} from '../../util/recruitment.js'

	export default {
		data() {
			return {
				value: '',
				list: [],
				show: true,
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				company: '',
				city: '',
				wages: '',
				work_types: '',
				page: 0,
				count: '',
				status:'nomore',
				loadText: {
					nomore: '没有更多数据了~'
				},
				showLoad:false

			}
		},
		components: {
			swipper,
			notice,
			RecruitmentBar,
			Recruitmentlist,
			Bottombar,
			ResumeList,
			me,
			Position,
			Public
		},
		onLoad() {
			this.getRecruitmentlist();
			// this.cityChange();
			// this.wagesChange()
		},
		created() {

		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getRecruitmentlist()
		},
		watch: {
			// 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
			// 也能知道value值当前的内容
			value(val) {
				// console.log(val);
			}
		},
		methods: {
			// 触底分页查询
			lower() {
				this.page++
				console.log(this.page)
				uni.showLoading({
					title:'正在加载...'
				})
				// 查询招聘列表
				recruitmentList({
					"str": this.value,
					"wages": this.wages,
					"address": this.city,
					"work_types": this.work_types,
					"paging": {
						"count": this.count,
						"page": this.page,
					}
					
				}).then(res=>{
					if(res.data.code===20000){
						this.list = this.list.concat(res.data.data.user_Recruitments); //将数据拼接在一起	
						uni.hideLoading()
						this.$refs.uToast.show({
											title: '加载成功',
											type: 'default',
											duration: 3000
										})
						
					}else{
						uni.hideLoading()
						this.$refs.uToast.show({
											title: '暂无数据啦~',
											type: 'default',
											duration: 3500
										})
					}
					console.log(res)
				}).catch(error=>{
					console.log(error)
					this.showLoad = true
					uni.hideLoading()
				})
			},
			// 搜索招聘
			custom(value) {
				console.log(value)
				this.value = '',
				this.getRecruitmentlist()
			},
			// 跳转到招聘详情
			goDetail(recruitment_id,user_id) {
				uni.navigateTo({
					url: '/pages/detail/detail?recruitment_id=' + recruitment_id + '&user_id='+ user_id
				})
				

			},
			Clickitem(index) {
				console.log(index)
				switch (index) {
					case 0:
						this.show = true;
						this.show1 = false;
						this.show2 = false;
						this.show3 = false;
						this.show4 = false;
						break;
					case 1:
						this.show = false;
						this.show1 = true;
						this.show2 = false;
						this.show3 = false;
						this.show4 = false;
						break;
					case 2:
						this.show = false;
						this.show1 = false;
						this.show2 = true;
						this.show3 = false;
						this.show4 = false;
						break;
					case 3:
						this.show = false;
						this.show1 = false;
						this.show2 = false;
						this.show3 = true;
						this.show4 = false;
						break;
					case 4:
						this.show = false;
						this.show1 = false;
						this.show2 = false;
						this.show3 = false;
						this.show4 = true;
						break;
				}
			},
			// 根据工作类型查询
			async worktype(data) {
				recruitmentList({
					"wages": this.wages,
					"address": this.city,
					"work_types": data,
					"paging": {
						"page": this.page
					}
				}).then(res => {
					console.log(res)
					this.list = res.data.data.user_Recruitments
				}).catch(err => {
					console.log(err)
				
				})
				this.work_types = data
			},
			// 根据行业查询
			async industryselect(data) {
				uni.showLoading({
					title:'搜索中...'
				})
				recruitmentList({
					"industry": data,
					"address": this.city,
					"work_types": this.work_types,
					"wages": this.wages,
					"paging": {
						"page": this.page
					}
				}).then(res => {
					console.log(res)
					this.list = res.data.data.user_Recruitments
					if(res.data.code === 20000){
						uni.hideLoading()
					}
				}).catch(err => {
					console.log(err)
				
				})
				this.industry = data
			},
			// 根据工资来查询
			async wagesChange(data) {
				uni.showLoading({
					title:'搜索中...'
				})
				recruitmentList({
					"wages": data,
					"address": this.city,
					"work_types": this.work_types,
					"paging": {
						"page": this.page
					}
				}).then(res => {
					console.log(res)
					this.list = res.data.data.user_Recruitments
					if(res.data.code === 20000){
						uni.hideLoading()
					}
				}).catch(err => {
					console.log(err)
				
				})
				this.wages = data
			},
			// 根据城市查询招聘列表
			async cityChange(data) {
				recruitmentList({
					"address": data,
					"wages": this.wages,
					"work_types": this.work_types,
					"paging": {
						"page": this.page
					}
				}).then(res => {
					console.log(res)
					this.list = res.data.data.user_Recruitments
				}).catch(err => {
					console.log(err)
				
				})
				this.city = data
				
			},
			// 查询招聘列表
			async getRecruitmentlist() {
				uni.showLoading({
					title:'正在加载...'
				})
				recruitmentList({
					"str": this.value,
					"paging": {
						"page": this.page
					}
				}).then(res => {
					uni.hideLoading()
					this.$refs.uToast.show({
										title: '加载成功',
										type: 'default',
										duration: 3000
									})
					console.log(res)
					if(res.data.code === 20000){
						this.list = res.data.data.user_Recruitments
						this.count = res.data.paging.count
					}
					if(res.data.code === 4010002){
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
				}).catch(err => {
					console.log(err)

				})
				
			}

		}
	}
</script>

<style lang="scss" scoped>
	.search {
		background-color: #5785E5;
		padding-bottom: 10rpx;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}

	.top {
		margin-top: 75rpx;
	}

	.button {
		margin-top: 600rpx;
		text-align: center;
	}

	scroll-view {
		height: 900rpx;
	}
</style>
