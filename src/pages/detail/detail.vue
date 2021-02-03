<template>
	<!-- 个体发布详情 -->
	<view class="personRecruitment" v-if="item.poster_path=='默认海报路径'">
		<view class="head">
			<view class="tit">
				<text>招聘</text>
			</view>
			<view class="type">
				<text>全职</text>
			</view>
			<view class="wages">
				<text>面议</text>
			</view>
		</view>
		<view class="date">
			<text>2021-01-18日发布</text>
			<view class="look">
				<text>20人浏览</text>
			</view>
		</view>
		<notice></notice>
		<view class="introdetail">
			<view>
				<text>招聘详情</text>
			</view>
			<text>{{item.introduction}}</text>
		</view>
		<u-button type="success">
			<u-icon name="phone"></u-icon>
			拨打电话</u-button>
	</view>
	<!-- 企业发布详情-->
	<view class="content" style="height: 100%;" v-else>
		<view class="wrap">
			<u-row gutter="16">
				<u-col span="7">
					<view class="demo-layout bg-purple">
						<view class="title">
							<text>{{item.recruitment_title}}</text>
						</view>
					</view>
				</u-col>
				
				<u-col span="5" text-align="right">
					<view class="demo-layout bg-purple-dark">
						<text>{{item.wages}}</text>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16" justify="space-between">
				<u-col span="4">
					<view class="demo-layout bg-purple">
						<text class="update">发布：{{item.publish_time.split("T")[0]}}</text>
					</view>
				</u-col>
				<u-col span="8" text-align="right">
					<view class="demo-layout bg-purple-light">	
					    <u-button size="mini" @click="refresh">刷新</u-button>
						<text>浏览：{{item.count}}</text>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="detail">
			<view class="work">
				<view class="position">
					<text>职位：</text>
					<text>Java程序员</text>
					<!-- <text>{{item.work_name}}</text> -->
					<collection class="collect"></collection>
				</view>
			</view>
			<view class="work">
				<view class="">
					<text>要求：</text>
					<text>{{item.experience}}经验</text>
				</view>
			</view>
			<view class="work">
				<view class="">
					<text>人数：{{item.recruitment_number}}</text>
				</view>
			</view>
			<view class="work">
				<view class="">
					<text>地区：</text>
					<text>{{item.address}}</text>
				</view>
			</view>
		</view>
		<!-- 职位详情 -->
		<WorkIntroduce :item="item"></WorkIntroduce>
		<!-- 公司导航 -->
		<Companybar :item="item" @itemClick="goCompany()"></Companybar>
		<map class="map" :longitude="longitude" :latitude="latitude"></map>	
		<!-- 温馨提示 -->
		<WarningTip></WarningTip>
		<!-- 详情底部导航 -->
		<Bottombar @gochat="gochat"></Bottombar>
	</view>
	
</template>

<script>
	import WorkIntroduce from './childComps/WorkIntroduce.vue';
	import Companybar from './childComps/Companybar.vue'
	import WarningTip from './childComps/WarningTip.vue'
	import notice from '../components/notice.vue'
	import collection from './childComps/collection.vue'
	import Bottombar from './childComps/BottomBar.vue'
	
	import {recruitmentList} from '../../util/recruitment.js'
	export default {
		data() {
			return {
				longitude:110.922477,
				latitude: 21.666885,
				item:null,
				
				// count1:0
				// company_id: null
			}
		},
		components:{
			WorkIntroduce,
			Companybar,
			WarningTip,
			notice,
			collection,
			Bottombar
		},
		onLoad(options) {
			console.log(options)
			this.getDetail(options.recruitment_id)
		},
		created() {
			// this.refresh();
			
		},
		methods: {
			// 跳转到聊天
			gochat(){
				uni.navigateTo({
					url:'/pages/detail/chat/chat'
				})
			},
			// 招聘详情
		   async getDetail(recruitment_id){
			   uni.showLoading({
			   	title:'正在加载...'
			   })
			   recruitmentList({
				"recruitment_id":recruitment_id,
				"paging":{
					"page":0
				}
			   }).then(res=>{
				   console.log(res)
				   uni.hideLoading()
				   
				   this.item = res.data.data.user_Recruitments[0];
			   }).catch(err=>{
				   console.log(err)
			   })
			   
			},
			// 刷新
			refresh(){
				const res = this.$myRequest({
					url:'refreshTime',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
					    "user_id":1,
						"recruitment_id":125
					}),
					method: 'POST'
				})
			},
			// // 置顶
			// top(){
			// 	const res = this.$myRequest({
			// 		url:'addTopping',
			// 		dataType: "json",
			// 		header: {
			// 		        'content-type': 'application/json', 
			// 		        },
			// 		data:JSON.stringify({ 
			// 		    "user_id":1,
			// 			"recruitment_id":125
			// 		}),
			// 		method: 'POST'
			// 	})
			// },
			// 跳转到聊天
			tochat(){
				uni.navigateTo({
					url:'/pages/detail/chat/chat'
				})
			},
			goCompany(company_id){
				uni.navigateTo({
					url:'/pages/companyDetail/companyDetail?company_id='+company_id
				})
				
				// console.log(company_id)
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		height:100%;
	}
	.content{
		height: calc(100% - 49px);
	}
	// 企业发布
	.wrap {
		padding: 10rpx;
		border-bottom: 4rpx solid #F1F1F1;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		height: 80rpx;
		border-radius: 8rpx;
		
	}

	.bg-purple {
		background: #FFFFFF;
		.title{
			font-size: 40rpx;
			font-weight: bold;
		}
		.update{
			font-size: 20rpx;
		}
		
	}

	.bg-purple-light {
		background: #FFFFFF;
		
	}

	.bg-purple-dark {
		background:  #FFFFFF;
		text{
			color: #FF0000;
		}
	}
	.work{
		display: flex;
		padding: 10rpx;
		.position{
			display: flex;
			.icon{
				margin-left: 500rpx;
			}
		}
	}
	.detail{
		border-bottom: 10rpx solid #F1F1F1;
	}
	.map{
		width:98%;
		height: 400rpx;
		padding: 15rpx;
		margin-left: 10rpx;
		border-radius: 25%;
	}
	// 个体发布
	.personRecruitment{
		
		.head{
			display: flex;
			padding: 15rpx;
			.tit{
				font-weight: bold;
				font-size: 40rpx;
			}
			.type{
				background-color: #F1F1F1;
				font-size: 20rpx;
				border-radius: 25%;
				text-align: center;
				margin: 10rpx;
				width: 60rpx;
				height: 30rpx;
				margin-top: 20rpx;
			}
			.wages{
				color: #ff0000;
				margin-left: 500rpx;
			}
		}
		.date{
			display: flex;
			padding: 15rpx;
			font-size: 25rpx;
			color: #999999;
			.look{
				margin-left: 400rpx;
			}
		}
		.introdetail{
			padding: 15rpx;
			text{
				margin-top: 10rpx;
				font-size: 35rpx;
				word-break:break-all;
			}
		}
	}
	.collect{
		margin-left: 380rpx;
	}
</style>
