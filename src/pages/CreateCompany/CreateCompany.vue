<template>
	<view>
	    <u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
	    	<u-form-item>
	    		<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="公司" prop="company">
	    			<u-input :border="border" placeholder="请输入公司名称" v-model="model.company" type="text"></u-input>
	    		</u-form-item>
	    		<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="福利" prop="welfare">
	    			<u-input :border="border" placeholder="请输入公司福利" v-model="model.welfare" type="text" ></u-input>
	    		</u-form-item>
	    		<u-form-item :label-position="labelPosition" label="简介" prop="intro">
	    			<u-input type="textarea" :border="border" placeholder="请填写简介" v-model="model.intro" />
	    		</u-form-item>
	    		<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="地址" prop="address">
	    			<u-input :border="border" placeholder="请选择公司地址" v-model="model.address" type="select" @click="Toaddress"></u-input>
	    		</u-form-item>
	    		<u-form-item :label-position="labelPosition" label="上传图片" prop="photo" label-width="150">
	    			<u-upload width="160" height="160" action="#"  ref="uUpload" :auto-upload="true" max-count=5 @on-remove="deleteImgs" @on-choose-complete="uploadImage"></u-upload>
					<text style="color: #999999;">最多只能上传5张图片，大小不超过1m</text>
	    		</u-form-item>
				<u-form-item :label-position="labelPosition" label="上传营业照" prop="license" label-width="150">
					<u-upload width="160" height="160" action="#"  ref="uUpload1" :auto-upload="true" max-count=1 @on-remove="deleteImgs" @on-choose-complete="uploadImage1"></u-upload>
					<text style="color: #999999;">最多只能上传1张图片，大小不超过1m</text>
				</u-form-item>
	    	</u-form-item>
	    </u-form>
		<!-- <multipleSelect
		v-model="show"
		:data="list"
		:default-selected="defaultSelected"
		@confirm="confirm"
		></multipleSelect> -->
		<!-- 视频 -->
		<view class="uni-uploader__file" v-if="src1">
		    <view class="uploader_video">
		        <view class="icon-cuo" @tap="delectVideo">
					<u-icon name="close" size="28"></u-icon>
				</view>
		        <video :src="src1" class="video"></video>
		    </view>
		</view>
		<!-- 上传视频 -->
		<view class="uni-uploader__input" @tap="chooseVideo" >
			<button type="default">上传视频</button>
		</view>
	    <u-button @click="create" type="primary">创建</u-button>
	</view>
</template>

<script>
	import { addCompany } from '../../util/company.js'
	
	// import multipleSelect from './childComps/multiple-select.vue'
	var sourceType = [
	        ['camera'],
	        ['album'],
	        ['camera', 'album']
	    ]
	export default {
		data() {
			return {
				// show: false,
				    // show: false, //是否显示 - 双向绑定
				    // info: "",
				    // list: [], //数据源
				    // defaultSelected: ["3", "5"], //默认选中项
				    src1:"",//视频存放
					src2:'',
				    sourceTypeIndex: 2,
				    checkedValue:true,
				    checkedIndex:0,
				    sourceType: ['拍摄', '相册', '拍摄或相册'],
				    cameraList: [{
				            value: 'back',
				            name: '后置摄像头',
				            checked: 'true'
				        },
				        {
				            value: 'front',
				            name: '前置摄像头'
				        },
				    ],
				    cameraIndex: 0,
				    VideoOfImagesShow:true,
				// 上传表单信息
				model:{
					company:'',
					welfare: [],
					intro:'',
					address:'',
					photo: [],
					latitude:'',//纬度
					longitude:'',//经度
					license:''
				},
				rules:{
					
					welfare:[
						{
							required: true,
							message: '请输入公司福利',
							trigger: 'blur' ,
						}
					],
					intro:[
						{
							required: true,
							message: '请输入公司简介',
							trigger: 'blur' ,
						}
					],
					address:[
						{
							required: true,
							message: '请输入公司地址',
							trigger: 'blur' ,
						}
					],
					// photo:[
					// 	{
					// 		required: true,
					// 		message: '请先上传图片',
					// 		trigger: 'change',
					// 	}
					// ],
				},
				check: false,
				selectStatus: 'close',
				border: false,
				labelPosition: 'left',
				actionSheetShow: false,
				errorType: ['message'],
				pickerShow: false,
				selectShow: false,
			}
		},
		components:{
			// multipleSelect
		},
		// onShow() {
		//   //模拟异步数据
		//   setTimeout(() => {
		//     this.list = [
		//       {
		//         label: "皮皮虾",
		//         value: "1"
		//       },
		//       {
		//         label: "小龙虾",
		//         value: "2",
		//         disabled: true //禁用
		//       },
		//       {
		//         label: "大龙虾",
		//         value: "3"
		//       },
		//       {
		//         label: "石头蟹",
		//         value: "4"
		//       },
		//       {
		//         label: "兰花蟹",
		//         value: "5"
		//       },
		//       {
		//         label: "面包蟹",
		//         value: "6"
		//       },
		//       {
		//         label: "石斑鱼",
		//         value: "7"
		//       },
		//       {
		//         label: "鲫鱼",
		//         value: "8"
		//       },
		//       {
		//         label: "鲨鱼",
		//         value: "9"
		//       }
		//     ];
		//   }, 1000);
		// },
		onUnload() {
		    this.src1 = '',
		    this.sourceTypeIndex = 2,
		    this.sourceType = ['拍摄', '相册', '拍摄或相册'];
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			
		},
		methods: {
			// poup(){
			// 	this.show = true
			// },
			// 确定事件
			confirm(data) {
			  console.log(data);
			  this.info = data.map(el => el.label).join(",");
			},
			uploadImage1(){
				let files = [];
				files = this.$refs.uUpload1.lists;
				this.base641(files[0].url)
				
			},
			uploadImage(){
				uni.showLoading({
					title:'上传中...'
				})
				let files = [];
				files = this.$refs.uUpload.lists;
				for(var i=0;i<files.length;i++){
					this.base64(files[i].url,i)
				}
				if(files.length>0){
					uni.hideLoading()
					uni.showToast({
						title:'上传成功'
					})
				}
			},
			// 删除图片时触发事件
			deleteImgs(index,lists){
				console.log(index)
				console.log(lists)
			},
			Toaddress(){
				uni.chooseLocation({
						success:(res)=>{
							console.log('位置名称：' + res.name);
							console.log('详细地址：' + res.address);
							console.log('城市：' + res.address.cityCode);
							console.log('纬度：' + res.latitude);
							console.log('经度：' + res.longitude);
							let latitude = res.latitude; //纬度
							let longitude = res.longitude; //经度
							this.model.address = res.address
							this.model.latitude = res.latitude
							this.model.longitude = res.longitude
						}
						});
			},
			chooseVideo(){
				// 上传视频
				console.log('上传视频')
				uni.chooseVideo({
				    maxDuration:10,
				    count: 1,
				    camera: this.cameraList[this.cameraIndex].value,
				    sourceType: sourceType[this.sourceTypeIndex],
				    success: (res) => {
				        console.log(JSON.stringify(res.tempFilePath),'视频')
						// console.log(res)
						this.src1 = res.tempFilePath;
				      uni.uploadFile({
				        url: 'http://192.168.101.24:8080/utils/video/addVideo',
				        method: 'POST',           // 可用可不用
				        filePath: res.tempFilePath,
						header:{
							"Content-Type":"multipart/form-data",
							"authorization":uni.getStorageSync('token'),
						},
				        name: 'file',              // 服务器定义key字段名称
				        success: (res)=> {
						  var data= null;
				          console.log('视频上传成功');
						  console.log(res);
						  console.log(JSON.parse(res))
						  data = JSON.parse(res.data)
						  this.src2 = data.data.video.videoPath
						 
				        },
				        fail: function() {
				          console.log('接口调用失败')
				        }
				      })
				    },
				})
				
			},
			// 删除视频
			delectVideo(){
			        uni.showModal({
			            title:"提示",
			            content:"是否要删除此视频",
			            success:(res) =>{
			                if(res.confirm){
								uni.request({
									url:'http://192.168.101.24:8080/utils/video/deleteVideo',
									dataType: "json",
									header: {
									        'content-type': 'application/json', 
									        },
									data:JSON.stringify({ 
									"video_path":this.src2	
									}),
									method: 'POST',
									success: (res) =>{
									  console.log('删除成功');
									  console.log(res)
									  console.log(this.src2)
									},
								})
								 this.src1 = ''
								
			                }
			            }
			        })
			    },
			// 上传图片回调转base64
			base641(url){
			      return new Promise((resolve, reject) => {
			        wx.getFileSystemManager().readFile({
			          filePath: url, //选择图片返回的相对路径
			          encoding: 'base64', //编码格式
			          success: res => {
			            resolve('data:image/' + ';base64,' + res.data)
						console.log(res)
						this.model.license = res.data	
			          },
			          fail: res => reject(res.errMsg)
			        })
			      })
			},
			base64(url,i){
			      return new Promise((resolve, reject) => {
			        wx.getFileSystemManager().readFile({
			          filePath: url, //选择图片返回的相对路径
			          encoding: 'base64', //编码格式
			          success: res => {
			            resolve('data:image/' + ';base64,' + res.data)
						console.log(res)
						let base64 = res.data
						 var object = {}
						 object.picture_file = base64
						 this.model.photo.push(object)
						 
			          },
			          fail: res => reject(res.errMsg)
			        })
			      })
			},
			// 创建公司
			create(){
				uni.showLoading({
					title:'创建中...'
				})
				let file = [];
				this.$refs.uForm.validate(valid => {
					if (valid) {
						addCompany({
							// "user_id":"8040423884719751160",
							"company_name":this.model.company,
							// "company_welfare":this.model.welfare,
							"company_introduction":this.model.intro,
							"company_address":this.model.address,
							"company_picture": this.model.photo,
							"longitude": this.model.longitude,
							"latitude": this.model.latitude,
							"str": this.model.license,
							"companyVideo":{
								"videoPath": this.src2
							},
						}).then(res=>{
							console.log(res)
							if(res.data.code === 20000){
								uni.hideLoading()
								uni.reLaunch({
									url:'/pages/man/man'
								})
								uni.showToast({
									title:'创建成功',
									duration:2500
								})
							}else{
								uni.showToast({
									title:'创建失败，请重新创建'
								})
							}
							
						}).catch(err=>{
							console.log(err)
						})
					}
				});
			},
		}
	}
</script>

<style lang="scss">
.burst-wrap{
    width: 100%;
    height: 100%;
}
/* .burst-wrap .burst-wrap-bg{
    position: relative;
    width: 100%;
    height: 320upx;
    background:linear-gradient(90deg,rgba(251,91,80,1) 0%,rgba(240,45,51,1) 100%);
    border-bottom-right-radius: 80upx;
    border-bottom-left-radius: 80upx;
} */
.burst-wrap .burst-wrap-bg>view{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 65upx;
    left: 0;
    right: 0;
}

.form-item{
    width: 100%;
}
.form-item textarea{
    display: block;
    height: 220upx;
    width: 100%;
    color: #AAAAAA;
    font-size: 28upx;
}
.uni-uploader__file,.uploader_video{
    position: relative;
    z-index: 1;
    width: 200upx;
    height: 200upx;
}
.uni-uploader__img {
    width: 200upx;
    height: 200upx;
}
.icon-cuo {
    position: absolute;
    right: 0;
    top: 5upx;
    background: linear-gradient(90deg,rgba(251,91,80,1) 0%,rgba(240,45,51,1) 100%);
    color: #FFFFFF;
    z-index: 999;
    border-top-right-radius: 5upx;
    border-bottom-left-radius: 5upx;
}
.video{
    width: 100%;
    height: 100%;
}

.login-input-box{
    position: relative;
    border-bottom: 1upx solid #EEEEEE;
}
.login-input-box .forget,.login-input-box .phone{
    position: absolute;
    top: 0;
    height: 100%;
    z-index: 100;
}
.login-input-box .phone{
    width: 100upx;
    left: 0;
    color: #666666;
    font-weight: bold;
}
.login-input-box .phone-input{
    padding-left: 100upx;
}
.address-wrap,.open-info{
    margin-top: 20upx;
}
.open-info>view:last-child{
    font-size: 28upx;
    color: #999999;
}
.address-wrap .address {
    background: #F2F2F2;
    border-radius: 40upx;
    padding: 0 20upx;
}
.user-set-btn{
    margin: 40upx;
    background: linear-gradient(90deg,rgba(251,91,80,1) 0%,rgba(240,45,51,1) 100%);
    color: #FFFFFF;
    text-align: center;
    height: 88upx;
    line-height: 88upx;
}
</style>
