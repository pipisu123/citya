export const BASE_URL = 'http://192.168.101.24:8080/'
export const myRequest = (options)=>{  
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			header: {
				"authorization":uni.getStorageSync('token'),
			    // 'content-type': 'multipart/form-data;charset=UTF-8'
			},
			method:options.method || 'GET',
			data: options.data || {},
			success: (res)=> {
				if(res.data.status ==0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err)=> {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}


