<template>
    <view class="uni-padding-wrap">
    			<view class="page-section swiper">
    				<view class="page-section-spacing">
    					<swiper @change="onSlideChangeEnd" class="swiper" indicator-dots="#000000" :autoplay="autoplay" interval="10000" duration="500">
    						<swiper-item style="z-index: 1;">
    							<view class="">
    								<video @fullscreenchange="event" loop :muted="muted"  autoplay style="" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4" controls></video>
    							</view>
    						</swiper-item>
    						<swiper-item style="z-index: 1;">
    							<view class="swiper-item uni-bg-green">
								<view class="swiper-item uni-bg-green">
									<image src="https://img1.baidu.com/it/u=2287568211,2342036693&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
								</view>
								</view>
    						</swiper-item>
    						<swiper-item style="z-index: 1;">
    							<view class="swiper-item uni-bg-green">
									<image src="https://img1.baidu.com/it/u=2287568211,2342036693&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
								</view>
    						</swiper-item>
    						<swiper-item style="z-index: 1;">
    							<view class="swiper-item uni-bg-blue">C
								<image src="https://img1.baidu.com/it/u=2287568211,2342036693&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
								</view>
    						</swiper-item>
    					</swiper>
    				</view>
    			</view>
    		</view>
</template>

<script>
	export default {
	    data() {
	        return {
				muted:false,
				vido:0,
	            background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500
	        }
	    },
	    methods: {
	        changeIndicatorDots(e) {
	            this.indicatorDots = !this.indicatorDots
	        },
	        changeAutoplay(e) {
	            this.autoplay = !this.autoplay
	        },
	        intervalChange(e) {
	            this.interval = e.target.value
	        },
	        durationChange(e) {
	            this.duration = e.target.value
	        },
			onSlideChangeEnd: function(swiper) {
							console.log(swiper.detail.current);
							this.vido=swiper.detail.current
						},
			event(fullScreen, direction){
							let self=this
							console.log(fullScreen.detail.fullScreen)
							if(fullScreen.detail.fullScreen==false){
								self.autoplay=true
								self.muted=true
							}else{
								self.autoplay=false
								self.muted=false
							}
							
						console.log(self.autoplay+"22222")
						console.log(self.muted+"11111111")
							
						},
	    }
	}
</script>

<style lang="scss" scoped>
</style>
